import * as React from "react";
import styled from "@emotion/styled";
import { isOdd } from "../utils";

const farger = ["#F8B229", "#EA4630", "#146B3A", "#BB2528", "#165B33"];

const JulekuleStyle = styled.div<{ nummer: number }>`
  background-color: ${(props) => farger[Math.floor(props.nummer % farger.length)]};
  background-image: radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  border-radius: 50%;
  box-shadow: inset 0.3em 0.3em 1em rgba(255, 255, 255, 0.5);
  height: var(--luke-size);
  width: var(--luke-size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props: any) => (isOdd(props.nummer) ? "rotate( -5deg )" : "rotate( 5deg )")};
`;

const Base = styled.span`
  position: absolute;
  content: "";
  display: block;
  width: 1rem;
  height: 0.5rem;
  top: -0.46rem;
  background-color: white;
  left: 50%;
  margin-left: -0.5rem;
  border-radius: 2px 2px 0 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
`;

const Snor = styled.span`
  position: absolute;
  border-color: white;
  height: 1.25rem;
  width: 0.75rem;
  border-width: 2px 2px 0 2px;
  top: -1.75rem;
  border-style: solid;
  border-radius: 50% 50% 0 0;
  left: calc(var(--luke-size) / 2);

  &::before {
    content: "";
    display: block;
    height: 50%;
    background-color: var(--background-color);
    position: absolute;
    bottom: 0;
    width: 0.1875rem;
    right: -0.125rem;
  }
`;

interface Props {
  children?: React.ReactNode;
  nummer: number;
}

const Julekule = (props: Props) => {
  return (
    <JulekuleStyle nummer={props.nummer}>
      <Snor />
      <Base />
      {props.children}
    </JulekuleStyle>
  );
};
export default Julekule;
