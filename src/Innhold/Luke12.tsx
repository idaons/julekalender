import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";


const Luke12 = () => {

  return (
    <LukeInnhold nummer={12}>
        <Tekst>
          I morgen er sjølveste luciadagen! Tid for forberedelse: <br/>
          Gå (fort) til nærmeste apotek og kjøp safran. <br />
          <p>
          Stå på høyre ben mens du venter på din tur .
            <StyledEmoji ariaLabel="emoji-leg" content="🦵"/>
          Stå på venstre ben mens du blir ekspedert.
          </p>
        </Tekst>
    </LukeInnhold>
  );
};

export default Luke12;