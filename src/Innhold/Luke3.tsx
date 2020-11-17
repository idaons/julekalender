import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styled from "styled-components";


const StyledIframe = styled.iframe`
    margin-top: 1rem;
`;

const Luke3 = () => {
  return (
    <LukeInnhold nummer={3}>
      <Tekst>
        <h2>Løs opp i stive kontormuskler</h2>
        Videoen er så kort at du rekker det i lunsjen!
      </Tekst>
      <StyledIframe width="750" height="422" src="https://www.youtube.com/embed/xPvQgXFjNAg" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
      </StyledIframe>
    </LukeInnhold>
  );
};

export default Luke3;