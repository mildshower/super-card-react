import React, { useEffect, useRef, useState } from "react";
import GameAPI from "./GameAPI";
import Card from "./Card";
import LastFightDetails from "./LastFightDetails";

const PlayersNames = ({ own, opponent }) => {
  return <h4>{`Me: ${own}, Opponent: ${opponent}`}</h4>;
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
    lastFightDetails,
    currCard,
    ownCard,
  } = ownDetails;

  console.log(ownCard);
  return (
    <div>
      <PlayersNames {...ownDetails.names} />
      <p>{`My Cards: ${primaryCardsCount + secondaryCardsCount}`}</p>
      <p>{`${isTurn ? "Your" : "Opponent's"} turn`}</p>
      <p>My Card</p>
      {isTurn && <Card {...currCard} onFight={fight} playable={isTurn} />}
      {lastFightDetails && <LastFightDetails {...lastFightDetails} />}
    </div>
  );
};

export default Game;
