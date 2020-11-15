import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components/macro';
import Julekule from './Components/Julekule';
import Luke from './Components/Luke';
import LukeInnhold from './Components/LukeInnhold';
import Luke1 from './Innhold/Luke1';
import Luke2 from './Innhold/Luke2';
import { GlobalStyles, theme } from './theme';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax( ${theme.lukeSize},  1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  padding: 1rem 2rem;
  max-width: 60rem;
  margin: 0 auto;
`;

const Header = styled.header`
    text-align: center;
    margin: 2rem auto 3rem;
    h1 {
      font-size: 5rem;
      margin-bottom: .5rem;
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
                    <h2>🎅 for stillesittende kontor-nisser 🎅</h2>
                </Header>
                <Wrapper>
                    {
                        [...Array(24)].map((item, index) =>
                             <Luke key={index} nummer={index + 1}/>

                        )
                    }
                </Wrapper>
            </Route>
              <Route path="/1">
                  <Luke1 />
              </Route>
              <Route path="/2">
                  <Luke2 />
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
