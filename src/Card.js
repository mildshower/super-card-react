import React from "react";

const Card = ({
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
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={`${name} avatar`} style={{ width: "400px" }} />
      <p onClick={() => onFight("intelligence")}>
        intelligence: {intelligence}
      </p>
      <p onClick={() => onFight("strength")}>strength: {strength}</p>
      <p onClick={() => onFight("speed")}>speed: {speed}</p>
      <p onClick={() => onFight("durability")}>durability: {durability}</p>
      <p onClick={() => onFight("power")}>power: {power}</p>
      <p onClick={() => onFight("combat")}>combat: {combat}</p>
      <p onClick={() => onFight("height")}>height: {height}</p>
      <p onClick={() => onFight("weight")}>weight: {weight}</p>
    </div>
  );
};

export default Card;
