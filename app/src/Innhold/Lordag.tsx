import { StyledEmoji, Tekst } from "../Components/LukeInnhold";
import * as React from "react";

const Lordag = () => {
  return (
    <Tekst>
      <h2>Helg!</h2>
      Gå en tur i nabolaget mens du øver på å presentere en vits til teamet på mandag. Feks denne:
      <p>
        <i>Hørt om utvikleren som ville teste ut en ny rett? Hen serverte beta-suppe.</i>
        <StyledEmoji ariaLabel="suppe-emoji" content="🥣" />
      </p>
    </Tekst>
  );
};
export default Lordag;
