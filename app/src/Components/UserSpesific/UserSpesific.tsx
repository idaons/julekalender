import { Emoji } from "~/src/Components/LukeInnhold";
import * as React from "react";
import styles from "./userSpesific.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const Adjektiv = ["frosne", "stillesittende", "slitne"];
const Plassering = ["hjemmekontor", "FA1", "remotekontor"];

interface userState {
  adjektiv: typeof Adjektiv[0];
  plassering: typeof Plassering[0];
}

const UserSpesific = () => {
  return (
    <span>
      <Emoji ariaLabel="nisse-emoji" content="🎅" />
      for{" "}
      {
        <select>
          {Adjektiv.map((v) => {
            return <option key={v}>{v}</option>;
          })}
        </select>
      }{" "}
      <select>
        {Plassering.map((v) => {
          return <option key={v}>{v}</option>;
        })}
      </select>
      -nisser
      <button className="bonusKnapp">
        <Emoji ariaLabel="nisse-emoji" content="🎅" />
      </button>
    </span>
  );
};
export default UserSpesific;
