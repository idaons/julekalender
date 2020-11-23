import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";

const Luke2 = () => {
  return (
    <LukeInnhold nummer={2}>
      <Tekst>
        <h2>Et hett tips!</h2>
        Hvis man får lyst til å sette seg på en standup, er den for lang. <br />
        Forslag til de som synes den fortsatt er for lang: Kjør push-up i steden. <br />
        Da blir møtet veldig kort, eller så blir man veldig sterk!
        <StyledEmoji ariaLabel="biceps-emoji" content="💪" />
      </Tekst>
    </LukeInnhold>
  );
};
export default Luke2;
