import * as React from "react";
import { useParams } from "react-router-dom";
import Luke1 from "../Innhold/Luke1";
import Luke2 from "../Innhold/Luke2";
import Luke3 from "../Innhold/Luke3";
import Luke4 from "../Innhold/Luke4";
import Luke5 from "../Innhold/Luke5";
import Luke6 from "../Innhold/Luke6";
import Luke7 from "../Innhold/Luke7";
import Luke8 from "../Innhold/Luke8";
import Luke9 from "../Innhold/Luke9";
import Luke10 from "../Innhold/Luke10";
import Luke11 from "../Innhold/Luke11";
import Luke12 from "../Innhold/Luke12";
import Luke13 from "../Innhold/Luke13";
import Luke14 from "../Innhold/Luke14";
import Luke15 from "../Innhold/Luke15";
import Luke16 from "../Innhold/Luke16";
import Luke17 from "../Innhold/Luke17";
import Luke18 from "../Innhold/Luke18";
import Luke19 from "../Innhold/Luke19";
import Luke20 from "../Innhold/Luke20";
import Luke21 from "../Innhold/Luke21";
import Luke22 from "../Innhold/Luke22";
import Luke23 from "../Innhold/Luke23";
import Luke24 from "../Innhold/Luke24";
import LukeInnhold, { StyledEmoji } from "./LukeInnhold";
import { getStraffe } from "../utils";

export const isLukeAvailible = (nummer: number) => {
  const currentDate = new Date();
  const openDate = new Date(currentDate.getFullYear(), 11, nummer);
  if (openDate > currentDate) {
    return false;
  }
  return true;
};

const LukeWrapper = () => {
  const { lukeNummer } = useParams();
  const lukeNummerAsInt: number = parseInt(lukeNummer ?? "");
  if (lukeNummerAsInt > 24 || lukeNummerAsInt < 1 || isNaN(lukeNummerAsInt)) {
    return (
      <LukeInnhold nummer={404}>
        Ingen luke her..
        <StyledEmoji ariaLabel="emoji-sad" content="😢" />
      </LukeInnhold>
    );
  }

  if (!isLukeAvailible(lukeNummerAsInt)) {
    return (
      <LukeInnhold nummer={lukeNummerAsInt}>
        Nice try! <br />
        <StyledEmoji ariaLabel="chicken-emoji" content="🐣" />
        {getStraffe(lukeNummerAsInt)}
      </LukeInnhold>
    );
  }

  switch (lukeNummer) {
    case "1":
      return <Luke1 />;
    case "2":
      return <Luke2 />;
    case "3":
      return <Luke3 />;
    case "4":
      return <Luke4 />;
    case "5":
      return <Luke5 />;
    case "6":
      return <Luke6 />;
    case "7":
      return <Luke7 />;
    case "8":
      return <Luke8 />;
    case "9":
      return <Luke9 />;
    case "10":
      return <Luke10 />;
    case "11":
      return <Luke11 />;
    case "12":
      return <Luke12 />;
    case "13":
      return <Luke13 />;
    case "14":
      return <Luke14 />;
    case "15":
      return <Luke15 />;
    case "16":
      return <Luke16 />;
    case "17":
      return <Luke17 />;
    case "18":
      return <Luke18 />;
    case "19":
      return <Luke19 />;
    case "20":
      return <Luke20 />;
    case "21":
      return <Luke21 />;
    case "22":
      return <Luke22 />;
    case "23":
      return <Luke23 />;
    case "24":
      return <Luke24 />;
    default:
      return (
        <LukeInnhold nummer={404}>
          Ingen luke her..
          <StyledEmoji ariaLabel="emoji-sad" content="😢" />
        </LukeInnhold>
      );
  }
};

export default LukeWrapper;
