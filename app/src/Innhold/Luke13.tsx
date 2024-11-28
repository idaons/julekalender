import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke13 = () => {
  return (
    <LukeInnhold nummer={13}>
      <Tekst>
        <h2>Lucia!</h2>
        Lag en lussekatt-deig som du elter for hånd.
        <br />
        <StyledEmoji ariaLabel="cat-emoji" content="🐈" />
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke13;
