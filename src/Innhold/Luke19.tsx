import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke19 = () => {
  return (
    <LukeInnhold nummer={19}>
      <h2>Helg!</h2>
      <Tekst>
        Anta at du er  med i Tour de France - på tide med en hviledag!<br/>
        Legg deg i sofaen og se litt netflix.
        <StyledEmoji ariaLabel="tv-emoji" content="📺" />

        <p>NB! 5 straffe-pushup hver gang du gjør noe jobb-relatert i løpet av dagen.</p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke19;