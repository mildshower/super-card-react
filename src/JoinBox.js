import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinBox = ({ pName }) => {
  const [gameId, setGameId] = useState("");

  return (
    <div className="joinBox">
      <input
        className="gameIdInput"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
      ></input>
      <Link className="actionButton" to={`/join/${gameId}?pName=${pName}`}>
        <span>Join</span>
      </Link>
    </div>
  );
};

export default JoinBox;
