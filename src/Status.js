import React from "react";
import LastFightDetails from "./LastFightDetails";

const Status = ({ lastFight, isOwnTurn }) => {
  return (
    <div className="status">
      <LastFightDetails {...lastFight} />
      <p className="turn">{isOwnTurn ? "Your" : "Opponent's"} Turn</p>
    </div>
  );
};

export default Status;
