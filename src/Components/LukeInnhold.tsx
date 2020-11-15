import * as React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 3rem auto 3rem;
  }

`;

const InnholdStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


export const Tekst = styled.div`
  max-width: 50rem;
  font-size: 1.25rem;
`;


export const Emoji = styled.div`
    font-size: 4rem;
    text-align: center;
`;

interface Props {
  children?: React.ReactNode;
  nummer: number;
}

const LukeInnhold = (props: Props) => {
  return (
    <Wrapper>
      <h1>Luke {props.nummer}</h1>
      <InnholdStyle>
      {props.children}
      </InnholdStyle>
    </Wrapper>
  );
};
export default LukeInnhold;
