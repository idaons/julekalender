import * as React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 0 1rem 1rem;
  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 3rem auto 2.5rem;

    @media (max-width: 40rem) {
      margin: 2.5rem auto 1.5rem;
    }
  }
`;

const InnholdStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
      <h1>Luke {props.nummer}</h1>
      <InnholdStyle>{props.children}</InnholdStyle>
    </Wrapper>
  );
};
export default LukeInnhold;
