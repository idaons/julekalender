import { Emoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";
import styled from "@emotion/styled";

const StyledEmoji = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
`;

const Sondag2 = () => {
  return (
    <Tekst>
      <h2>Andre søndag i advent! </h2>
      Gå / løp / sykle / hink til ditt <i>nest</i> nærmeste bakeri å kjøp deg en kaffe og bolle!
      <br />
      <StyledEmoji>
        <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
      </StyledEmoji>
    </Tekst>
  );
};
export default Sondag2;
