import React, { useState } from "react";
import HostButton from "./HostButton";
import JoinBox from "./JoinBox";

const Home = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <HostButton pName={input} />
      <JoinBox pName={input} />
    </div>
  );
};

export default Home;
