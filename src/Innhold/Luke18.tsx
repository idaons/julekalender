import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";

const Luke18 = () => {
  return (
    <LukeInnhold nummer={18}>
      <Tekst >
        <h2>Forebygging av musearm</h2>
        <p>Forklaring:<br/>
          Sett deg inntil ett bord og legg underarmen din på bordet.
          Hånden og håndleddet skal ligge rett utenfor bordkanten. Hold en vannflaske eller manual i hånden.
          Strekk kjapt opp i håndleddet og senk rolig ned igjen.
        </p>
        <p>Antall: <br/>2 ganger om av dagen  </p>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke18;