import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styles from "~/src/Innhold/innhold.module.css";
import tegning from "~/src/assets/absurdgalleriet.jpg";

const Luke11 = () => {
  return (
    <LukeInnhold nummer={11}>
      <Tekst>
        <h2>Spiderman pushups</h2>
        <p>
          Du trener: <br /> Brystmuskler og mage.
        </p>
        <p>
          Ligg på gulvet som om du skal til å ta armhevinger. Hold kroppen helt stiv og rett. Bøy albuene, og senk deg
          ned mot gulvet. Samtidig fører du venstre kne opp til venstre albue. Strekk armene ut igjen til du er i
          startposisjonen. Under neste armheving fører du høyre kne opp til høyre albue.
        </p>
        <p>
          Antall: <br /> 10 repetisjoner
        </p>
        <figure className={styles.figure}>
          <img src={tegning} alt="Tegning fra absurdgalleriet" />
          <figcaption className="decorated">Fra absurdgalleriet</figcaption>
        </figure>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke11;
