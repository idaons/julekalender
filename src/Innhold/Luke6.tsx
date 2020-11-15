import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";

const Luke6 = () => {
  return (
    <LukeInnhold nummer={6}>
      <Tekst>
        Første søndag i advent! <br/>
        Gå til <i>nest</i> nærmeste bakeri å kjøp deg en kaffe og bolle!<br/>
        <blockquote>"Det må da være lov å kose seg litt i disse dager"</blockquote>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke6;