import React, { useEffect, useRef, useState } from "react";
import GameAPI from "./GameAPI";
import Status from "./Status";
import PlayerDetail from "./PlayerDetail";
import "./game.css";

const useGameStatus = () => {
  const [gameStatus, setGameStatus] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    GameAPI.ownInfo().then(setGameStatus);
  }, []);

  const fight = (trait) => {
    GameAPI.fight(trait).then(() => GameAPI.ownInfo().then(setGameStatus));
  };

  useEffect(() => {
    if (gameStatus === null || gameStatus.isOwnTurn) {
      return clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      GameAPI.ownInfo().then(setGameStatus);
    }, 1000);

    return () => clearInterval(ref.current);
  }, [gameStatus && gameStatus.isOwnTurn]);

  return [gameStatus, fight];
};

const Game = () => {
  const [gameStatus, fight] = useGameStatus();

  if (gameStatus === null || gameStatus.state === "over") {
    const message = gameStatus
      ? `${gameStatus.isWinner ? "You" : "Opponent"} won`
      : "Loading..";
    return (
      <div className="centerBox">
        <p className={`message ${gameStatus ? "result" : ""}`}>{message}</p>
      </div>
    );
  }

  const { myself, opponent, isOwnTurn, lastFight } = gameStatus;

  return (
    <div className="gameContainer">
      <Status lastFight={lastFight} isOwnTurn={isOwnTurn} />
      <div>
        <PlayerDetail
          {...opponent}
          isMe={false}
          onFight={fight}
          isTurn={isOwnTurn}
        />
        <PlayerDetail
          {...myself}
          isMe={true}
          onFight={fight}
          isTurn={isOwnTurn}
        />
      </div>
    </div>
  );
};

export default Game;
