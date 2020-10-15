import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinBox = ({ pName }) => {
  const [gameId, setGameId] = useState("");

  return (
    <div>
      <input value={gameId} onChange={(e) => setGameId(e.target.value)}></input>
      <Link to={`/join/${gameId}?pName=${pName}`}>
        <p>Join</p>
      </Link>
    </div>
  );
};

export default JoinBox;
