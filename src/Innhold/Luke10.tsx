import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke10 = () => {
  return (
    <LukeInnhold nummer={10}>
      <Tekst>
        <h2>Korsrygg</h2>
        <p>Forklaring:<br/>
          Stå oppreist med svak bøy i knærne. Bøy deg sakte fremover virvel for virvel.
          Hold vekten på hælene. Heng avslappet og pust rolig. Slapp av i magen og nakken.
          Rull sakte opp igjen virvel for virvel, hodet til slutt. Bruk 30-60 sekunder per runde.
        </p>
        <StyledEmoji ariaLabel="kamel-emoji">🐫</StyledEmoji>
        <p>Når: <br/> Gjør øvelsen hver gang du går gjennom en dør</p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke10;