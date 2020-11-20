import * as React from "react";
import LukeInnhold, { Emoji, StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke23 = () => {
  return (
    <LukeInnhold nummer={23}>
      <Tekst >
        <h2>Lille julaften! </h2>
        <p>Dagen før dagen - nå må du øve:<br/>
          Still deg i knebøy position og hold stillingen mens du går rundt
          juletreet / kontorstolen <br/>
          Syng <Emoji ariaLabel="note-emoji" content="🎵"/> Så går vi rundt om en enebærbusk
          <Emoji ariaLabel="note-emoji" content="🎵"/>, og ta et spensthopp
          hver gang du sier "busk".
        </p>
        <StyledEmoji ariaLabel="tree-emoji" content="🎄" />
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke23;