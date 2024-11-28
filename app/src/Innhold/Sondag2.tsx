import { Emoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";
import styles from "./innhold.module.css";

const Sondag2 = () => {
  return (
    <Tekst>
      <h2>Andre søndag i advent! </h2>
      Gå / løp / sykle / hink til ditt <i>nest</i> nærmeste bakeri å kjøp deg en drikke og bolle!
      <br />
      <div className={styles.emoji}>
        <Emoji ariaLabel="emoji-kafevare" content="☕ 🥐" />
      </div>
    </Tekst>
  );
};
export default Sondag2;
