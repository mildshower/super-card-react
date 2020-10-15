import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useQuery from "./useQuery";
import GameAPI from "./GameAPI";

const HostPage = () => {
  const [hostDetails, setHostDetails] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const pName = useQuery().get("pName");

  useEffect(() => {
    GameAPI.host(pName).then(setHostDetails);
  }, []);

  useEffect(() => {
    if (hostDetails !== null) {
      const intervalId = setInterval(
        () =>
          GameAPI.isGameStarted().then(({ isStarted }) =>
            setIsGameStarted(isStarted)
          ),
        5000
      );
      return () => clearInterval(intervalId);
    }
  }, [hostDetails]);

  if (hostDetails === null) {
    return <p>Hosting...</p>;
  }

  return isGameStarted ? (
    <Redirect to={`/game`} />
  ) : (
    <p>{`Waiting for other Player to join. Game Id: ${hostDetails.gameId}`}</p>
  );
};

export default HostPage;
