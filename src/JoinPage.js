import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import GameAPI from "./GameAPI";
import useQuery from "./useQuery";

const useJoinStatus = () => {
  const [joinStatus, setJoinStatus] = useState(null);
  const { gameId } = useParams();
  const pName = useQuery().get("pName");
  useEffect(() => {
    GameAPI.join(pName, gameId).then(setJoinStatus);
  }, []);

  return joinStatus;
};

const JoinPage = () => {
  const joinStatus = useJoinStatus();

  if (joinStatus === null || joinStatus.error) {
    const message = joinStatus ? joinStatus.error : "Joining..";
    return (
      <div className="centerBox">
        <p className="message">{message}</p>
      </div>
    );
  }

  return <Redirect to={`/game`} />;
};

export default JoinPage;
