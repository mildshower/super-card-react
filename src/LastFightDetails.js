import React from "react";

const LastFightDetails = ({
  trait,
  winner,
  looser,
  winnerCard,
  looserCard,
  hasWon,
}) => {
  return <p>Last Fight Happened and I {hasWon ? "Won" : "lost"}</p>;
};

export default LastFightDetails;
