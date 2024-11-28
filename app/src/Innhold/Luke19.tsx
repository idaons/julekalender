import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke19 = () => {
  return (
    <LukeInnhold nummer={19}>
      <Tekst>
        Du venter på en skikkelig dyr julegave i postkassa. <br />
        Sjekk om den er kommet minst 4 ganger ila dagen.
        <StyledEmoji ariaLabel="gift-emoji" content="🎁" />
        Har du trapper til postkassa? Hopp/hink opp trappene.
        <br />
        Har du vei? Jogg fram, spurt tilbake.
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke19;
