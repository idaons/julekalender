import * as React from "react";
import LukeInnhold, { Emoji, StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke14 = () => {
  return (
    <LukeInnhold nummer={14}>
      <Tekst>
        <h2>
          Dagens øvelse:<br/>
          <Emoji ariaLabel="tromme-emoji">🥁</Emoji><br/>
          The World’s Greatest Stretch
        </h2>
        <p>Antall: <br/> 10 repetisjoner</p>
        <p>Forklaring:<br/>
          1. Start i høy plankeposisjon. Plasser det ene beinet rett utenfor hånden på samme side og senk setet forsiktig ned.
          2. Før armen opp, mens du følger armen med blikket. Gjenta på motsatt side.
          </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke14;