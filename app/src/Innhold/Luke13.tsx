import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";
import styled from "styled-components";

const StyledEmoji = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  text-align: center;
`;

const Luke13 = () => {
  return (
    <LukeInnhold nummer={13}>
      <Tekst>
        <h2>Lucia!</h2>
        Lag en lussekatt-deig som du elter for hånd.
        <br />
        <StyledEmoji>
          <Emoji ariaLabel="cat-emoji" content="🐈" />
        </StyledEmoji>
        <i>- Det må jo være lov å kose seg litt</i>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke13;
