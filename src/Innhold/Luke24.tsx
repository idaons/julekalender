import * as React from "react";
import LukeInnhold from "../Components/LukeInnhold";
import styled from "styled-components";

const StyledIframe = styled.iframe`
    height: 50vh;
    width: 50vw;
    border: none;
`;

const Luke24 = () => {
  return (
    <LukeInnhold nummer={24}>
      <StyledIframe src="https://idaons.github.io/css-puzzle/"/>
    </LukeInnhold>
  );
};

export default Luke24;