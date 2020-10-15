import React, { useEffect, useRef, useState } from "react";
import GameAPI from "./GameAPI";
import Card from "./Card";
import LastFightDetails from "./LastFightDetails";

const PlayersNames = ({ own, opponent }) => {
  return <h4>{`Me: ${own}, Opponent: ${opponent}`}</h4>;
};

const Game = () => {
  const [ownDetails, setOwnDetails] = useState(null);
  const [playersNames, setPlayersNames] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    GameAPI.ownInfo().then(setOwnDetails);
    GameAPI.playersNames().then(setPlayersNames);
  }, []);

  const fight = (trait) => {
    GameAPI.fight(trait).then(() => GameAPI.ownInfo().then(setOwnDetails));
  };

  useEffect(() => {
    if (ownDetails === null || ownDetails.isTurn) {
      return clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      GameAPI.ownInfo().then(setOwnDetails);
    }, 1000);
  }, [ownDetails && ownDetails.isTurn]);

  if (ownDetails === null) return <p>Loading Game</p>;

  if (ownDetails.error) return <p>could not load game</p>;

  const {
    primaryCardsCount,
    secondaryCardsCount,
    isTurn,
    topCard,
    lastFightDetails,
  } = ownDetails;

  return (
    <div>
      {playersNames === null ? (
        <p>Loading Player Names</p>
      ) : (
        <PlayersNames {...playersNames} />
      )}
      <p>{`My Cards: ${primaryCardsCount + secondaryCardsCount}`}</p>
      <p>{`${isTurn ? "Your" : "Opponent's"} turn`}</p>
      {isTurn && <Card {...topCard} onFight={fight} />}
      {lastFightDetails && <LastFightDetails {...lastFightDetails} />}
    </div>
  );
};

export default Game;
