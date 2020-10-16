import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import GameAPI from "./GameAPI";
import useQuery from "./useQuery";

const JoinPage = () => {
  const [joinStatus, setJoinStatus] = useState(null);
  const pName = useQuery().get("pName");
  const { gameId } = useParams();

  useEffect(() => {
    GameAPI.join(pName, gameId).then(setJoinStatus);
  }, []);

  if (joinStatus === null) {
    return (
      <div className="centerBox">
        <p>{`Trying to join game ${gameId}`}</p>
      </div>
    );
  }

  return joinStatus.error ? (
    <div className="centerBox">
      <p className="message">{joinStatus.error}</p>
    </div>
  ) : (
    <Redirect to={`/game`} />
  );
};

export default JoinPage;
