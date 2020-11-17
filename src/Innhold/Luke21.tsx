import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import tegning from "../assets/absurdgalleriet.jpg"
import styled from "styled-components";

const StyledFigure = styled.figure`
  margin: 0;
  
  img {
   width: 90%
  }
`

const Luke21 = () => {
  return (
    <LukeInnhold nummer={21}>
      <Tekst >
        <h2>Spiderman pushups</h2>
        <p>Du trener: <br/> Brystmuskler og mage.</p>
        <p>Forklaring:<br/>
          Ligg på gulvet som om du skal til å ta armhevinger. Hold kroppen helt stiv og rett.
          Bøy albuene, og senk deg ned mot gulvet. Samtidig fører du venstre kne opp til venstre albue.
          Strekk armene ut igjen til du er i startposisjonen.
          Under neste armheving fører du høyre kne opp til høyre albue.
        </p>
        <p>Antall: <br/> 10 repetisjoner</p>
        <StyledFigure>
          <img
            src={tegning}
            alt="Tegning fra absurdgalleriet"
          />
          <figcaption className="decorated">
            Fra absurdgalleriet
          </figcaption>
        </StyledFigure>
      </Tekst >
    </LukeInnhold>
  );
};

export default Luke21;