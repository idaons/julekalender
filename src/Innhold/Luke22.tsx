import * as React from "react";
import LukeInnhold, { Emoji, Tekst } from "../Components/LukeInnhold";

const Luke22 = () => {
  return (
    <LukeInnhold nummer={22}>
      <Tekst >
        <h2>For vonde skuldre og nakke: <Emoji ariaLabel="giraffe-emoji" content="🦒"/></h2>
        <p>Forklaring:<br/>
          Stå med liten bøy i knær og hofter. Kjenn at du er i en stødig posisjon, og lut litt med kroppen.
          Ha fokus på et punkt foran deg som du skal skyggebokse mot.
          Du trenger ikke strekke helt ut i albuer, men kjør et jevnt tempo og roter i overkroppen.
          Stå i ro med underkroppen.
          Velg om du kjører høyt tempo eller store bevegelser. Pass på å få med hele bevegelsen på skuldra.
          Hold skuldrene lave gjennom hele øvelen
        </p>
        <p>Når: <br/> Nå, eller hver gang du har lyst til å slå noen <Emoji ariaLabel="punch-emoji" content="🥊"/> </p>
        <p>Antall: <br/> 50 repetisjoner</p>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke22;