import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";
import styled from "styled-components/macro";


const Luke1 = () => {
  return (
      <LukeInnhold nummer={1}>
        <Tekst>
          Hvis man får lyst til å sette seg på en standup, er den for lang. <br />
          Forslag til de som synes den fortsatt er for lang:
          Kjør push-up i steden. <br/>
          Da blir møte veldig kort, eller så blir man veldig sterk! 🏋️‍♀
        </Tekst>
      </LukeInnhold>
    );
};
export default Luke1;
