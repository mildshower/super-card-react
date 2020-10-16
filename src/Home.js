import React, { useState } from "react";
import HostButton from "./HostButton";
import JoinBox from "./JoinBox";
import "./home.css";

const Home = () => {
  const [input, setInput] = useState("");
  return (
    <div className="centerBox">
      <label className="nameLabel">Enter Your Name</label>
      <input
        placeholder="ex. John Doe"
        className="nameField"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div className="actions">
        <HostButton pName={input} />
        <JoinBox pName={input} />
      </div>
    </div>
  );
};

export default Home;
