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
    if (ownDetails === null || ownDetails.isOwnTurn) {
      return clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      GameAPI.ownInfo().then(setOwnDetails);
    }, 1000);

    return () => clearInterval(ref.current);
  }, [ownDetails && ownDetails.isOwnTurn]);

  if (ownDetails === null) return <p>Loading Game</p>;

  if (ownDetails.error) return <p>could not load game</p>;

  const { myself, opponent, isOwnTurn, lastFightDetails } = ownDetails;

  console.log(ownDetails);

  return (
    <div>
      <PlayersNames own={myself.name} opponent={opponent.name} />
      <p>{`My Cards: ${myself.currDeck + myself.comingDeck}`}</p>
      <p>{`${isOwnTurn ? "Your" : "Opponent's"} turn`}</p>
      <p>My Card</p>
      <Card {...myself.topCard} onFight={fight} playable={isOwnTurn} />
      {lastFightDetails && <LastFightDetails {...lastFightDetails} />}
    </div>
  );
};

export default Game;
