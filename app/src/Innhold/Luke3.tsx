import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke3 = () => {
  return (
    <LukeInnhold nummer={3}>
      <Tekst>
        <h2>
          Tøye på overkropp <Emoji ariaLabel="gesturing-emoji" content="🙆" />
        </h2>
        <p>
          Løft begge armene over hodet og senk overkroppen langsomt til den ene siden. Kjenn at det strekker på utsiden
          av overkroppen. Hold i 5 sekunder før du gjentar øvelsen på den andre siden. Strekk totalt 3 ganger på hver
          side.
        </p>
        <p>
          Når: <br /> En gang før lunsj, og en etter.
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke3;
