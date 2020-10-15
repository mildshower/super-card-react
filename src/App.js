import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import HostPage from "./HostPage";
import JoinPage from "./JoinPage";
import Game from "./Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/index">
          <Redirect from="/index" to="/" exact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/host" exact>
          <HostPage />
        </Route>
        <Route path="/join/:gameId" exact>
          <JoinPage />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
