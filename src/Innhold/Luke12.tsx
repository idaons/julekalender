import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";


const Luke12 = () => {

  return (
    <LukeInnhold nummer={12}>
        <Tekst>
          I morgen er det lucia: best å være forberedt. <br/>
          Gå (fort)
          til nærmeste apotek.<br />
          Kjøp safran. <br />
          Stå på høyre ben mens du venter på din tur.<br />
          Stå på venstre ben mens du blir ekspedert.
        </Tekst>
    </LukeInnhold>
  );
};

export default Luke12;