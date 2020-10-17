import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import useQuery from "./useQuery";
import GameAPI from "./GameAPI";

const useHostingDetails = () => {
  const [gameDetails, setGameDetails] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const pName = useQuery().get("pName");

  useEffect(() => {
    GameAPI.host(pName).then(setGameDetails);
  }, []);

  useEffect(() => {
    if (gameDetails !== null) {
      const intervalId = setInterval(
        () =>
          GameAPI.isGameStarted().then(({ isStarted }) =>
            setIsGameStarted(isStarted)
          ),
        1000
      );
      return () => clearInterval(intervalId);
    }
  }, [gameDetails]);

  return [gameDetails, isGameStarted];
};

const HostPage = () => {
  const [gameDetails, isGameStarted] = useHostingDetails();

  return isGameStarted ? (
    <Redirect to={`/game`} />
  ) : (
    <div className="centerBox">
      <p className="message">
        {gameDetails ? `Waiting for Opponent..` : `Hosting`}
      </p>
      {gameDetails && <p className="gameId">GAME ID: {gameDetails.gameId}</p>}
    </div>
  );
};

export default HostPage;
