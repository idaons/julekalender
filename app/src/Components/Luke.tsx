import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import Julekule from "./Julekule";
import { getStraffe, isOdd } from "../utils";
import { isLukeAvailible } from "./LukeWrapper";
import { Box } from "@chakra-ui/react";

export const ÅpenLuketekst = styled.span``;

export const StengtLuketekst = styled.span<{ nummer: number }>`
  color: white;
  font-size: 1rem;

  padding: 2rem 1rem 1rem;
  text-align: center;
  transform: ${(props) => (isOdd(props.nummer) ? "rotate( 5deg )" : "rotate( -5deg )")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const Luke = (props: { nummer: number }) => {
  const [lukeErÅpen, setLukeErÅpen] = useState(true);

  const onLukeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLukeAvailible(props.nummer)) {
      setLukeErÅpen(false);
      e.preventDefault();
    }
  };
  return (
    <StyledLink onClick={(e) => onLukeClick(e)} to={`/luke/${props.nummer}`} role="group">
      <Julekule nummer={props.nummer}>
        {lukeErÅpen ? (
          <Box
            as="span"
            color="white"
            fontSize="1.25rem"
            _groupHover={{ transitionDuration: "2s", transitionProperty: "transform", transform: " rotate(360deg)" }}
          >
            Luke {props.nummer}
          </Box>
        ) : (
          <StengtLuketekst nummer={props.nummer}>Nå var du litt tidlig ute! {getStraffe(props.nummer)}</StengtLuketekst>
        )}
      </Julekule>
    </StyledLink>
  );
};
export default Luke;
