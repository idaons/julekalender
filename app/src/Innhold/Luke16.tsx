import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke16 = () => {
  return (
    <LukeInnhold nummer={16}>
      <Tekst>
        <h2>
          <Emoji ariaLabel="tromme-emoji" content="🥁" />
          The World’s Greatest Stretch
          <Emoji ariaLabel="tromme-emoji" content="🥁" />
        </h2>
        <ol>
          <li> Start i en dyp utfallsposisjon med venstre ben foran. </li>
          <li>
            {" "}
            Aktiver dine setemuskler og press hoften mot gulvet. Du skal kjenne en strekk på fremsiden av din høyre
          </li>
          <li>
            {" "}
            Sett høyre arm i bakken, roter overkroppen og løft venstre arm opp i luften, se opp mot armen. Pass på at
            foten din er godt plantet i bakken.
          </li>
          <li>
            Deretter tar du venstre arm ned og presser albu mot gulv. Hold i 2-3 sekunder, før du igjen løfter venstre
            arm opp i luften. Denne bevegelsen hjelper for å øke mobiliteten i brystryggraden.
          </li>
          <li>Gjenta på motsatt side</li>
        </ol>
        <p>
          Antall: <br /> 10 repetisjoner
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke16;
