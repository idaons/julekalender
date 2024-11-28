import * as React from "react";
import { isOdd } from "../utils";
import styles from "./julekule.module.css";

const farger = ["#F8B229", "#EA4630", "#146B3A", "#BB2528", "#165B33"];

interface Props {
  children?: React.ReactNode;
  nummer: number;
}

const Julekule = (props: Props) => {
  return (
    <div
      className={styles.julekule}
      style={{
        backgroundColor: farger[Math.floor(props.nummer % farger.length)],
        transform: isOdd(props.nummer) ? "rotate( -5deg )" : "rotate( 5deg )",
      }}
    >
      <span className={styles.snor} />
      <span className={styles.base} />
      {props.children}
    </div>
  );
};
export default Julekule;
