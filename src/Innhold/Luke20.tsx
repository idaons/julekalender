import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";

const Luke20 = () => {
  return (
    <LukeInnhold nummer={20}>
      <Tekst>
        Fjerde søndag i advent! <br/>
        Du venter på en skikkelig kul julegave i posten. Sjekk postkassa minst 4 ganger før lunsj,
        Har du trapper til post-kassa? Hopp/hink opp trappene.
        Har du vei? Jogg til, spurt tilbake.
        <br/>
        <blockquote><i>Det må da være lov å kose seg litt i disse dager</i></blockquote>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke20;