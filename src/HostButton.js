import React from "react";
import { Link } from "react-router-dom";

const HostButton = ({ pName }) => {
  return (
    <Link to={`/host?pName=${pName}`} className="actionButton">
      <span>Host</span>
    </Link>
  );
};

export default HostButton;
