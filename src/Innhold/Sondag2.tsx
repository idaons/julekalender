import { Emoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";
import styled from "styled-components/macro";

const StyledEmoji = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
`;

const Sondag2 = () => {
  return (
    <Tekst>
      <h2>Andre søndag i advent! </h2>
      Gå til ditt <i>nest</i> nærmeste bakeri å kjøp deg en kaffe og bolle!
      <br />
      <StyledEmoji>
        <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
      </StyledEmoji>
      <i>- Det må jo være lov å kose seg litt!</i>
    </Tekst>
  );
};
export default Sondag2;
