import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";


const Luke12 = () => {
  var foo = `
      if (antallMeterTilNærmesteApotek < 750) {
        nest nærmeste apotek.
      } else {
        nærmeste apotek.
      }
    `


  return (
    <LukeInnhold nummer={12}>
        <Tekst>
          I morgen er det lucia: best å være forberedt. Gå (fort)
          til
          <pre>
            <code>
              {foo}
            </code>
          </pre>
          Kjøp safran. <br />
          Stå på høyre ben mens du venter på din tur.<br />
          Stå på venstre ben mens du blir ekspedert.
        </Tekst>
    </LukeInnhold>
  );
};

export default Luke12;