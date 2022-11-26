import { Emoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";
import styled from "@emotion/styled";

const StyledEmoji = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
`;
const Sondag3 = () => {
  return (
    <Tekst>
      <h2>Tredje søndag i advent! </h2>
      Gå / løp / sykle / hink til <i>tredje</i> nærmeste bakeri og kjøp deg en deilig lunsj!
      <br />
      <StyledEmoji>
        <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
      </StyledEmoji>
    </Tekst>
  );
};
export default Sondag3;
