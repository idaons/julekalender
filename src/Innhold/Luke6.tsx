import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";
import styled from "styled-components/macro";

const StyledEmoji = styled.div`
    margin: 1rem 0 3rem;
    text-align: center;
`;

const Luke6 = () => {
  return (
    <LukeInnhold nummer={6}>
      <Tekst>
        <h2>Andre søndag i advent! </h2>
        Gå til <i>nest</i> nærmeste bakeri å kjøp deg en kaffe og bolle!
        <br/>
        <StyledEmoji>
          <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐"/>
        </StyledEmoji>
        <i>- Det må jo være lov å kose seg litt i disse dager</i>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke6;