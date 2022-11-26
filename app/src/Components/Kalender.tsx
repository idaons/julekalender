import * as React from "react";
import Luke from "./Luke";
import { Emoji } from "./LukeInnhold";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--luke-size), 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  justify-items: center;
  padding: 1rem 2rem 10rem;
  max-width: 60rem;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin: 1.5rem auto 4rem;
  h1 {
    font-size: min(5rem, 15vmin);
    margin-bottom: 1rem;
    word-break: break-word;
  }

  span {
    font-size: 1.8rem;
    font-family: "Lobster Two", cursive;
    letter-spacing: 0.15em;
  }
`;

function Kalender() {
  return (
    <div>
      <Header>
        <h1>Julekalender</h1>
        <span>
          <Emoji ariaLabel="nisse-emoji" content="🎅" />
          for stillesittende kontor-nisser
          <Emoji ariaLabel="nisse-emoji" content="🎅" />
        </span>
      </Header>
      <Wrapper>
        {[...Array(24)].map((item, index) => (
          <Luke key={index} nummer={index + 1} />
        ))}
      </Wrapper>
    </div>
  );
}

export default Kalender;
