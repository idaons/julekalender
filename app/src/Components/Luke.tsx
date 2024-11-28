import * as React from "react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Julekule from "./Julekule";
import { getStraffe, isOdd } from "../utils";
import { isLukeAvailible } from "./LukeWrapper";
import styles from "./luke.module.css";

const Luke = (props: { nummer: number }) => {
  const [lukeErÅpen, setLukeErÅpen] = useState(true);

  const onLukeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLukeAvailible(props.nummer)) {
      setLukeErÅpen(false);
      e.preventDefault();
    }
  };
  return (
    <Link className={styles.link} onClick={(e) => onLukeClick(e)} to={`/luke/${props.nummer}`} role="group">
      <Julekule nummer={props.nummer}>
        {lukeErÅpen ? (
          <span className={styles.åpenLukeTekst}>Luke {props.nummer}</span>
        ) : (
          <span
            className={styles.stengtLukeTekst}
            style={{
              transform: isOdd(props.nummer) ? "rotate( 5deg )" : "rotate( -5deg )",
            }}
          >
            Nå var du litt tidlig ute! {getStraffe(props.nummer)}
          </span>
        )}
      </Julekule>
    </Link>
  );
};
export default Luke;
