import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke20 = () => {
  return (
    <LukeInnhold nummer={20}>
      <Tekst>
        <h2>
          Dagens øvelse: Tøye bryst <Emoji ariaLabel="duck-emoji" content="🦆" />
        </h2>
        <p>
          Sitt på en stol med god holdning i ryggen. Strekk armene bakover, samle hendene bak ryggen og press dem litt
          bakover og oppover. Hold stillingen i 5-10 pust.
        </p>
        <p>
          Når: <br /> Hver gang du tenker på juleferie
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke20;
