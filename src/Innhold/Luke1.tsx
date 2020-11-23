import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke1 = () => {
  return (
    <LukeInnhold nummer={1}>
      <Tekst>
        <h2>
          <Emoji ariaLabel="party-emoji" content="🎉" /> Første luke! <Emoji ariaLabel="party-emoji" content="🎉" />{" "}
        </h2>
        <p>
          Realistisk som jeg er, innser jeg faren for at det også kan bli din eneste luke..
          <Emoji ariaLabel="crying-emoji" content="😢" /> <br />
          Derfor skal du få en oppgave som sikrer litt ekstra aktivitet resten av adventstida!
        </p>
        <p>
          <ul>
            <li>
              Finn det mest kronglete stedet i boligen din. Det kan være på loftet, i kjellern, øverst i det høyeste
              skapet, innerst i hjørnet under senga eller lignende{" "}
            </li>
            <li>Ta din favoritt-sjokoladekalender (eller gå å kjøp en hvis du ikke har) og legg den der</li>
            <li>
              Spis dagens luke og la kalenderen ligge, slik at den blir like vanskelig å komme til resten av dagene
            </li>
          </ul>
        </p>
      </Tekst>
    </LukeInnhold>
  );
};
export default Luke1;
