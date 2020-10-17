import React from "react";
import "./lastFight.css";

const LastFightDetails = ({
  trait,
  winner,
  winnerCard,
  looserCard,
  hasWon,
}) => {
  return (
    <div className="lastFight">
      <h3>Last Fight</h3>
      {!trait ? (
        <p className="fightMsg">No Fights Happened</p>
      ) : (
        <React.Fragment>
          <div className="lastFightCards">
            <div className="miniCard">
              <img className="miniAvatar" src={winnerCard.img} />
              <p>{winnerCard.name}</p>
            </div>
            VS
            <div className="miniCard">
              <p>{looserCard.name}</p>
              <img className="miniAvatar" src={looserCard.img} />
            </div>
          </div>
          <p className="fightMsg">Trait: {trait.toUpperCase()}</p>
          <p className={`fightMsg ${hasWon ? "winMsg" : "loseMsg"}`}>
            You {hasWon ? "won" : "lost"}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default LastFightDetails;
