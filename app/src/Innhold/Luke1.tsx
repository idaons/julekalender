import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke1 = () => {
  return (
    <LukeInnhold nummer={1}>
      <Tekst>
        <h2>
          <Emoji ariaLabel="party-emoji" content="🎉" /> Første luke! <Emoji ariaLabel="party-emoji" content="🎉" />
        </h2>
        <p>
          Hvis det også blir din siste luke, skal du få en oppgave som sikrer litt ekstra aktivitet resten av
          adventstida.
        </p>
        <ul>
          <li>
            Finn det mest kronglete stedet i boligen din. Det kan være på loftet, i kjellern, øverst i det høyeste
            skapet, lengst under senga eller lignende{" "}
          </li>
          <li>Ta din favoritt-julekalender (løp og kjøp en hvis du ikke har) og legg den der</li>
          <li>Åpne dagens luke og la kalenderen ligge, slik at den blir like vanskelig å komme til resten av dagene</li>
        </ul>
      </Tekst>
    </LukeInnhold>
  );
};
export default Luke1;
