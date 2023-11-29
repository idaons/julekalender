import { Box, Heading } from "@chakra-ui/react";
import * as React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 0 1rem 1rem;
  h1 {
    font-size: 4rem;
    //text-align: center;
    margin: 3rem auto 2.5rem;

    @media (max-width: 40rem) {
      margin: 2.5rem auto 1.5rem;
    }
  }
`;

export const Tekst = styled.div`
  max-width: 45rem;
  font-size: 1.25rem;
`;

export const EmojiStyle = styled.span`
  font-size: 3rem;
  text-align: center;
  display: block;
`;

export const StyledEmoji = (props: { ariaLabel: string; content: string }) => {
  return (
    <EmojiStyle role="img" aria-label={props.ariaLabel}>
      {props.content}
    </EmojiStyle>
  );
};

export const Emoji = (props: { ariaLabel: string; content: string }) => {
  return (
    <span role="img" aria-label={props.ariaLabel}>
      {props.content}
    </span>
  );
};

interface Props {
  children?: React.ReactNode;
  nummer: number;
}

const LukeInnhold = (props: Props) => {
  return (
    <Wrapper>
      <Box margin="0 auto" maxWidth="45rem">
        <Heading as="h1" variant={"jul"}>
          Luke {props.nummer}
        </Heading>

        {props.children}
      </Box>
    </Wrapper>
  );
};
export default LukeInnhold;
