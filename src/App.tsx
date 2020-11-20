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

          <Route path="/julekalender/:lukeNummer">
            <LukeWrapper />
          </Route>
          <Route path="">
            <Kalender />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
