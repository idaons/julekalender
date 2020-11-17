import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke4 = () => {
  return (
    <LukeInnhold nummer={4}>
      <Tekst>
        <h2>Skyt rygg <Emoji ariaLabel="cat-emoji" content="🐈"/></h2>
        <p>Forklaring:<br/>
          Skyt ryggen opp mot taket - som en katt. Hold gjennom to innpuster
        </p>
        <p>Når: <br/> Hver gang du får en DM på slack </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke4;