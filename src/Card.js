import React from "react";
import "./card.css";

const Card = ({
  id,
  name,
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
  height,
  weight,
  img,
  onFight,
  isPlayable,
}) => {
  const handleClick = (trait) => {
    if (!isPlayable) return;
    onFight(trait);
  };

  return (
    <div className="card" key={id}>
      <h3 className="cardTitle">{name.toUpperCase()}</h3>
      <img className="avatar" src={img} alt={`${name} avatar`} />
      <div className={`traits ${isPlayable ? "playable" : ""}`}>
        <p className="trait" onClick={() => handleClick("intelligence")}>
          Intel: {intelligence}
        </p>
        <p className="trait" onClick={() => handleClick("strength")}>
          Strength: {strength}
        </p>
        <p className="trait" onClick={() => handleClick("speed")}>
          Speed: {speed}
        </p>
        <p className="trait" onClick={() => handleClick("durability")}>
          Durability: {durability}
        </p>
        <p className="trait" onClick={() => handleClick("power")}>
          Power: {power}
        </p>
        <p className="trait" onClick={() => handleClick("combat")}>
          Combat: {combat}
        </p>
        <p className="trait" onClick={() => handleClick("height")}>
          Height: {height}
        </p>
        <p className="trait" onClick={() => handleClick("weight")}>
          Weight: {weight}
        </p>
      </div>
    </div>
  );
};

const NoCard = () => {
  return (
    <div className="card">
      <img
        className="backSide"
        src="https://cdn.trendhunterstatic.com/phpthumbnails/149/149328/149328_1_600.jpeg"
      />
    </div>
  );
};

export { Card as default, NoCard };
