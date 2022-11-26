import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke7 = () => {
  return (
    <LukeInnhold nummer={7}>
      <Tekst>
        <h2>
          Forebygging av musearm <Emoji ariaLabel="mouse-emoji" content="🐭" />
        </h2>
        <p>
          Sett deg inntil et bord og legg underarmen din på bordet. Hånden og håndleddet skal ligge rett utenfor
          bordkanten. Hold en vannflaske eller manual i hånden. Strekk kjapt opp i håndleddet og senk rolig ned igjen.
        </p>
        <p>
          Antall: <br /> 3 sett med 8 repetisjoner.
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke7;
