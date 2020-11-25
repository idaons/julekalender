import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styled from "styled-components/macro";
import { useState } from "react";

const StyledIframe = styled.iframe`
  margin-top: 1rem;
  width: 50rem;
  max-width: 95vw;
  height: 27rem;
  max-height: 80vh;
`;

const Luke4 = () => {
  return (
    <LukeInnhold nummer={4}>
      <Tekst>
        <h2>Løs opp i stive kontormuskler</h2>
        Her får du en yoga-økt fra Sats. Så kort at du rekker det i lunsjen!
      </Tekst>
      <StyledIframe
        title="Video fra sats"
        src="https://www.youtube.com/embed/xPvQgXFjNAg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    </LukeInnhold>
  );
};

export default Luke4;
