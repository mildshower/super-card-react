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
    return <p>{`Trying to join game ${gameId}`}</p>;
  }

  return joinStatus.error ? (
    <p>{`Can't Join, as ${joinStatus.error}`}</p>
  ) : (
    <Redirect to={`/game`} />
  );
};

export default JoinPage;
