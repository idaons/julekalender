import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke2 = () => {
  return (
    <LukeInnhold nummer={2}>
      <Tekst>
        <h2>Dagens øvelse: Dorull-knebøy!</h2>
        <p>Varighet: <br/> 45 sekunder x 3 sett </p>
        <p>Forklaring:<br/>
          Lag et dorulltårn av tre ruller. Glemt å hamstre doruller sier du? Da blir bare øvelsen tyngere
          og du blir sterkere! 💪 <br />
          Stå med en hoftebredde avstand mellom bena og ta en dyp knebøy helt til rumpa treffer rullene.
          Gjenta så mange repetisjoner du rekker på 45 sekunder.
        </p>
      </Tekst>
    </LukeInnhold>
  );
};
export default Luke2;