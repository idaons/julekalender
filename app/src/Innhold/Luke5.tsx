import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke5 = () => {
  return (
    <LukeInnhold nummer={5}>
      <Tekst>
        <h2>
          Nakke <Emoji ariaLabel="giraffe-emoji" content="🦒" />
        </h2>
        <p>
          Plassér den ene hånda på hodet og trekk forsiktig ned mot skulderen. Senk motsatt skulder og kjenn at det
          strekker på utsiden av nakken. Hold i cirka 5 pust og gjenta øvelsen på motsatt side.
        </p>
        <p>
          Antall: <br /> Spør din personalleder
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke5;
