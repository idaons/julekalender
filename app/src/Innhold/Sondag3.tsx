import { Emoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";
import styles from "./innhold.module.css";

const Sondag3 = () => {
  return (
    <Tekst>
      <h2>Tredje søndag i advent! </h2>
      Gå / løp / sykle / hink til <i>tredje</i> nærmeste bakeri og kjøp deg en deilig lunsj!
      <br />
      <div className={styles.emoji}>
        <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
      </div>
    </Tekst>
  );
};
export default Sondag3;
