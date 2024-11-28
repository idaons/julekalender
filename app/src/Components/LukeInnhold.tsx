import * as React from "react";
import styles from "./lukeinnhold.module.css";

export const Tekst = ({ children }: React.PropsWithChildren) => <div className={styles.text}>{children}</div>;
export const StyledEmoji = (props: { ariaLabel: string; content: string }) => {
  return (
    <span className={styles.emoji} role="img" aria-label={props.ariaLabel}>
      {props.content}
    </span>
  );
};

export const Emoji = (props: { ariaLabel: string; content: string }) => {
  return (
    <span role="img" aria-label={props.ariaLabel}>
      {props.content}
    </span>
  );
};

interface Props {
  children?: React.ReactNode;
  nummer: number;
}

const LukeInnhold = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innhold}>
        <h1>Luke {props.nummer}</h1>

        {props.children}
      </div>
    </div>
  );
};
export default LukeInnhold;
