import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke14 = () => {
  return (
    <LukeInnhold nummer={14}>
      <Tekst>
        <h2>
          <Emoji ariaLabel="tromme-emoji" content="🥁"/>
          The World’s Greatest Stretch
          <Emoji ariaLabel="tromme-emoji" content="🥁"/>
        </h2>
        <p>Forklaring:<br/>
          Start i høy plankeposisjon.
          Plasser det ene beinet rett utenfor hånden på samme side og senk setet forsiktig ned.
          Før armen opp, mens du følger armen med blikket. Gjenta på motsatt side.
        </p>
        <p>Antall: <br/> 10 repetisjoner</p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke14;