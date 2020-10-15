import React from "react";
import { Link } from "react-router-dom";

const HostButton = ({ pName }) => {
  return (
    <Link to={`/host?pName=${pName}`}>
      <p>Host</p>
    </Link>
  );
};

export default HostButton;
