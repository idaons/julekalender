import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke12 = () => {
  return (
    <LukeInnhold nummer={12}>
      <Tekst>
        <h2>Helg igjen jo!</h2>
        Og i morgen er sjølveste luciadagen. Det krever forberedelse: <br />
        Gå (type kappgang) til nærmeste apotek og kjøp safran. <br />
        <p>
          Stå på høyre ben mens du venter på din tur .
          <StyledEmoji ariaLabel="emoji-leg" content="🦵" />
          Stå på venstre ben mens du blir ekspedert.
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke12;
