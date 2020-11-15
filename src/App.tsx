import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./theme";
import LukeWrapper from "./Components/LukeWrapper";
import Kalender from "./Components/Kalender";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Kalender />
          </Route>
          <Route path="/:lukeNummer">
            <LukeWrapper />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
