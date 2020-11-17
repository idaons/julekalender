import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";

const Luke16 = () => {
  return (
    <LukeInnhold nummer={16}>
      <Tekst >
        <h2>Fleksjon</h2>
        <p>Forklaring:<br/>
          Sitt på stolen med bena langt fra hverandre.
          Bøy rygg og nakke fremover, slik at armer og hode henger avslappet mellom lårene.
          Kjenn at det strekker i korsrygg. Hold i 5-10 pust.
        </p>
        <p>Når: <br/> Hver gang du mister fokus fra noe du har fokus på. </p>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke16;