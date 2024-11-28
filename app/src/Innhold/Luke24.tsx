import * as React from "react";
import LukeInnhold from "../Components/LukeInnhold";
import styles from "./innhold.module.css";

const Luke24 = () => {
  return (
    <LukeInnhold nummer={24}>
      <h2>Et (css-only) sliding puzzle mens du venter på hva man enn venter på på julaften! </h2>
      <iframe className={styles.puzzle} src="https://idaons.github.io/css-puzzle/" />
    </LukeInnhold>
  );
};

export default Luke24;
