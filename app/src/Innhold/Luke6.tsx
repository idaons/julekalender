import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styles from "./innhold.module.css";

const Luke6 = () => {
  return (
    <LukeInnhold nummer={6}>
      <Tekst>
        <h2>Løs opp i stive kontormuskler</h2>
        Her får du en yoga-økt fra Sats. Så kort at du rekker det i lunsjen!
      </Tekst>
      <iframe
        className={styles.iframe}
        title="Video fra sats"
        src="https://www.youtube.com/embed/xPvQgXFjNAg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </LukeInnhold>
  );
};

export default Luke6;
