import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { GlobalStyles, theme } from "./theme";
import Luke from "./Components/Luke";
import LukeWrapper from "./Components/LukeWrapper";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${theme.lukeSize}, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  padding: 1rem 2rem 10rem;
  max-width: 60rem;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin: 1.5rem auto 4rem;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.8rem;
    font-family: "Lobster Two", cursive;
    letter-spacing: 0.15em;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Header>
              <h1>Julekalender</h1>
              <span>🎅 for stillesittende kontor-nisser 🎅</span>
            </Header>
            <Wrapper>
              {[...Array(24)].map((item, index) => (
                <Luke key={index} nummer={index + 1} />
              ))}
            </Wrapper>
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
