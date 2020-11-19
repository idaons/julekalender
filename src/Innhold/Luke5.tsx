import * as React from "react";
import LukeInnhold, { StyledEmoji, Tekst } from "../Components/LukeInnhold";


const Luke5 = () => {
  return (
    <LukeInnhold nummer={5}>
      <Tekst>
        <h2>Helg!</h2>
        Gå en tur i nabolaget mens du øver på å presentere en vits til teamet,
        feks denne:
        <p>
          Hørt om utvikleren som ville teste ut en ny rett?
          Han serverte beta-suppe.
          <StyledEmoji ariaLabel="suppe-emoji" content="🥣" />
        </p>
      </Tekst>
    </LukeInnhold>
  );
};

export default Luke5;
