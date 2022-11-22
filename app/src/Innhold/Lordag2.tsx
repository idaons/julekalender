import { StyledEmoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";

const Lordag2 = () => {
  return (
    <Tekst>
      <h2>Helg igjen jo!</h2>
      Og til uka er sjølveste luciadagen. Det krever forberedelse: <br />
      Gå til nærmeste apotek og kjøp safran. <br />
      <p>
        Stå på høyre ben mens du venter på din tur .
        <StyledEmoji ariaLabel="emoji-leg" content="🦵" />
        Stå på venstre ben mens du blir ekspedert.
      </p>
    </Tekst>
  );
};
export default Lordag2;
