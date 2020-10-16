import React, { useEffect, useRef, useState } from "react";
import GameAPI from "./GameAPI";
import Card, { NoCard } from "./Card";
import LastFightDetails from "./LastFightDetails";
import "./game.css";

const Status = ({ lastFightDetails, isOwnTurn }) => {
  return (
    <div className="status">
      <LastFightDetails {...lastFightDetails} />T{" "}
      <p className="turn">{isOwnTurn ? "Your" : "Opponent's"} Turn</p>
    </div>
  );
};

const PlayerDetail = ({
  topCard,
  currDeck,
  comingDeck,
  name,
  onFight,
  isMe,
  isTurn,
}) => {
  return (
    <div className="playerDetails">
      <span className="cardsCount">{`Cards: ${currDeck + comingDeck}`}</span>
      {topCard ? (
        <Card {...topCard} onFight={onFight} isPlayable={isMe && isTurn} />
      ) : (
        <NoCard />
      )}
      <span className="pName">{`${isMe ? "You" : "Opponent"} (${name})`}</span>
    </div>
  );
};

const Game = () => {
  const [ownDetails, setOwnDetails] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    GameAPI.ownInfo().then(setOwnDetails);
  }, []);

  const fight = (trait) => {
    GameAPI.fight(trait).then(() => GameAPI.ownInfo().then(setOwnDetails));
  };

  useEffect(() => {
    if (ownDetails === null || ownDetails.isOwnTurn) {
      return clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      GameAPI.ownInfo().then(setOwnDetails);
    }, 1000);

    return () => clearInterval(ref.current);
  }, [ownDetails && ownDetails.isOwnTurn]);

  if (ownDetails === null)
    return (
      <div className="centerBox">
        <p className="message">Loading..</p>
      </div>
    );

  if (ownDetails.error)
    return (
      <div className="centerBox">
        <p className="message">Could not load game</p>
      </div>
    );

  const { myself, opponent, isOwnTurn, lastFightDetails } = ownDetails;

  return (
    <div className="gameContainer">
      <Status lastFightDetails={lastFightDetails} isOwnTurn={isOwnTurn} />
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
