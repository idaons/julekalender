import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke19 = () => {
  return (
    <LukeInnhold nummer={19}>
      <Tekst>
        Du venter på en skikkelig kul julegave i posten. <br />
        Sjekk postkassa minst 4 ganger før lunsj.
        <StyledEmoji ariaLabel="gift-emoji" content="🎁" />
        Har du trapper til post-kassa? Hopp/hink opp trappene.
        <br />
        Har du vei? Jogg fram, spurt tilbake.
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke19;
