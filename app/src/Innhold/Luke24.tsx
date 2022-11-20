import * as React from "react";
import LukeInnhold, { Emoji } from "../Components/LukeInnhold";
import styled from "@emotion/styled";

const StyledIframe = styled.iframe`
  height: 75vh;
  max-height: 80vmin;

  width: 55vw;
  width: max(60vw, 20rem);
  border: none;
`;

const StyledLink = styled.a`
  color: lightgoldenrodyellow;
`;

const Luke24 = () => {
  return (
    <LukeInnhold nummer={24}>
      <h2>Fordi det er gøy: sliding puzzle!</h2>
      <StyledIframe src="https://idaons.github.io/css-puzzle/" />
      <p>
        PS: fungerer uten javascript{" "}
        <StyledLink href={"https://idaons.github.io/css-puzzle/"}>på denne siden</StyledLink>.{" "}
        <Emoji ariaLabel="nerd-emoji" content=" 🤓 " />{" "}
      </p>
    </LukeInnhold>
  );
};

export default Luke24;
