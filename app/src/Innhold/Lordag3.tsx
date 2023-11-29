import { StyledEmoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";

const Lordag3 = () => {
  return (
    <Tekst>
      <h2>Helg!</h2>
      Puh, på tide med en hviledag!
      <br />
      Legg deg i sofaen og se litt netflix.
      <StyledEmoji ariaLabel="tv-emoji" content="📺" />
      <p>NB! 5 straffe-pushup hver gang du gjør noe jobb-relatert i løpet av dagen.</p>
    </Tekst>
  );
};
export default Lordag3;
