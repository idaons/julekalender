import * as React from "react";
import Luke from "./Luke";
import { Emoji } from "./LukeInnhold";
import styles from "./kalender.module.css";

function Kalender() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Julekalender</h1>
        <span>
          <Emoji ariaLabel="nisse-emoji" content="🎅" />
          for stillesittende kontor-nisser
          <Emoji ariaLabel="nisse-emoji" content="🎅" />
        </span>
      </header>
      <div className={styles.wrapper}>
        {[...Array(24)].map((item, index) => (
          <Luke key={index} nummer={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Kalender;
