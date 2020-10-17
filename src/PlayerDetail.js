import React from "react";
import Card, { NoCard } from "./Card";

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

export default PlayerDetail;
