import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke12 = () => {
  return (
    <LukeInnhold nummer={12}>
      <Tekst>
        <h2>Korsrygg</h2>
        <p>
          Stå oppreist med svak bøy i knærne. Bøy deg sakte fremover virvel for virvel. Hold vekten på hælene. Pust
          rolig og slapp av i magen og nakken. Rull sakte opp igjen virvel for virvel, hodet til slutt. Bruk 30-60
          sekunder per runde.
        </p>
        <StyledEmoji ariaLabel="kamel-emoji" content="🐫" />
        <p>
          Når: <br /> Gjør øvelsen hver gang du går gjennom en dør
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke12;
