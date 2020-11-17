import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke17 = () => {
  return (
    <LukeInnhold nummer={17}>
      <Tekst >
        <h2>Dagens øvelse: Bryst <Emoji ariaLabel="duck-emoji" content="🦆"/></h2>
        <p>Forklaring:<br/>
          Sitt på en stol med god holdning i ryggen.
          Strekk armene bakover, samle hendene bak ryggen og press dem litt bakover og oppover.
          Hold stillingen i 5- 10 gode pust.
        </p>
        <p>Når: <br/> Hver gang du har et videomøte </p>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke17;