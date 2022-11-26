import { Emoji } from "~/src/Components/LukeInnhold";
import * as React from "react";
import styles from "./userSpesific.css";
import { useEffect, useState } from "react";

export const links = () => [{ rel: "stylesheet", href: styles }];

const Adjektiv = ["frosne", "stillesittende", "slitne"];
const Plassering = ["kontor", "hjemmekontor", "FA1", "remotekontor"];

interface userState {
  adjektiv: typeof Adjektiv[0];
  plassering: typeof Plassering[0];
}

const UserSpesific = () => {
  const [state, setState] = useState({ adjektiv: "stillesittende", plassering: "kontor" });

  return (
    <span>
      <Emoji ariaLabel="nisse-emoji" content="🎅" />
      for{" "}
      {
        <select onChange={(e) => setState({ ...state, adjektiv: e.target.value })}>
          {Adjektiv.map((v) => {
            return <option key={v}>{v}</option>;
          })}
        </select>
      }{" "}
      <select onChange={(e) => setState({ ...state, plassering: e.target.value })}>
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
