import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke4 = () => {
  return (
    <LukeInnhold nummer={4}>
      <Tekst>
        <h2>Kattestrekk <Emoji ariaLabel="cat-emoji" content="🐈"/></h2>
        <p>
          Stå på alle fire med knærne rett under hoftene og håndbakene rett under skuldrene.
          På innpust svaier du ryggen, samtidig som du ser opp i taket.
          På utpust skyt rygg som en katt.
          Gjenta 10 ganger.
        </p>
        <p>Når: <br/> Hver gang noen @channel'er deg på slack </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke4;