import React from "react";
import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <Link to="/" className="iconBox">
      <img
        className="iconImg"
        alt="Icon"
        src="https://cdn0.iconfinder.com/data/icons/sports-and-games-3/512/102-512.png"
      />
      <span className="gameName">Super Cards</span>
    </Link>
  );
};

export default Icon;
