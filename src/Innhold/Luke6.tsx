import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styled from "styled-components/macro";

const Emoji = styled.div`
    font-size: 3rem;
    margin-top: 1rem;
    text-align: center;
`;

const Luke6 = () => {
  return (
    <LukeInnhold nummer={6}>
      <Tekst>
        Andre søndag i advent! <br/>
        Gå til <i>nest</i> nærmeste bakeri å kjøp deg en kaffe og bolle!
        <br/>
        <Emoji>☕ 🥐</Emoji>
        <blockquote><i>Det må da være lov å kose seg litt i disse dager</i></blockquote>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke6;