import { StyledEmoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";

const Lordag2 = () => {
  return (
    <Tekst>
      <h2>Helg igjen jo!</h2>
      <p>
        Finn deg et julemarket og still deg i den lengste køen du finner.
        <br />
        Stå på ett ben.
        <br />
        Hink ett steg fram når køen beveger seg, deretter kan du bytte ben.
        <br />
        Ta en ett-bens knebøy hvis du ser noen snike.
        <StyledEmoji ariaLabel="emoji-leg" content="🦵" />
      </p>
    </Tekst>
  );
};
export default Lordag2;
