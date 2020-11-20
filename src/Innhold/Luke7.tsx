import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke7 = () => {
  return (
    <LukeInnhold nummer={7}>
      <Tekst>
      <h2>Skulderrulle <Emoji ariaLabel="circle-emoji" content="🔃"/></h2>
      <p>
        Rull begge skuldrene i store sirkler, mens armene henger ned langs siden.<br/>
        Gjør øvelsen i begge retninger.
      </p>
      <p>Antall: <br/> 10 ruller hver vei </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke7;
