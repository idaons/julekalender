import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke18 = () => {
  return (
    <LukeInnhold nummer={18}>
      <Tekst>
        <h2>
          Fleksjon <Emoji ariaLabel="old-emoji" content="🧓" />
        </h2>
        <p>
          Sitt på en stol med bena langt fra hverandre. Bøy rygg og nakke fremover, slik at armer og hode henger
          avslappet mellom lårene. Kjenn at det strekker i korsrygg. Hold i 5-10 pust.
        </p>
        <p>
          Når: <br /> Hver gang du mister fokus fra noe du har fokus på.{" "}
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke18;
