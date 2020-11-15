import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";

const Luke4 = () => {
  return (
    <LukeInnhold nummer={4}>
      <Tekst>
        <h2>Dagens øvelse: Skyte rygg</h2>
        <p>Når: <br/> Hver gang du får en DM på slack </p>
        <p>Forklaring:<br/>
          Skyt ryggen opp mot taket, hold gjennom to innpuster
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke4;