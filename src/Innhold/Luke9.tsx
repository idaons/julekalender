import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke9 = () => {
  return (
    <LukeInnhold nummer={9}>
      <Tekst >
      <h2>Nakke <Emoji ariaLabel="person-bowing-emoji" content="🙇"/></h2>
      <p>Forklaring:<br/>
        Plassér den ene hånda på hodet og trekk forsiktig ned mot skulderen.
        Sørg for å senke motsatt skulder og kjenn at det strekker på utsiden av nakken.
        Hold i cirka 5 pust og gjenta øvelsen på motsatt side.
      </p>
      <p>Antall: <br/> Spør din identansvarlig</p>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke9;