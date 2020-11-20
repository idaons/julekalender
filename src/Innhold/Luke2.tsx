import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke2 = () => {
  return (
    <LukeInnhold nummer={2}>
      <Tekst>
        <h2>Dorull-knebøy!</h2>
        <p>
          Lag et dorulltårn av tre ruller. <Emoji ariaLabel="toiletpaper-emoji" content="🧻 🧻 🧻"/> <br/>
          Glemt å hamstre doruller sier du? Da blir bare øvelsen tyngere og du blir sterkere! <br />
          Stå med en hoftebredde avstand mellom bena og ta en dyp knebøy helt til rumpa treffer rullene.
          Gjenta så mange repetisjoner du rekker på 45 sekunder.
        </p>
        <p>Antall: <br/> 3 sett á 45 sekunder </p>
      </Tekst>
    </LukeInnhold>
  );
};
export default Luke2;