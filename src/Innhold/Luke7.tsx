import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke7 = () => {
  return (
    <LukeInnhold nummer={7}>
      <Tekst>
      <h2>Skulderrulle 🔃</h2>
      <p>Forklaring:<br/>
        Rull begge skuldre i store sirkler, mens armene henger ned langs siden.
        10 ruller hver vei.
      </p>
        <p>Antall: <br/> 10 ruller hver vei </p>

      </Tekst>
    </LukeInnhold>
  );
};

export default Luke7;