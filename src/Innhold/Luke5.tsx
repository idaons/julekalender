import * as React from "react";
import LukeInnhold, { Tekst } from "../Components/LukeInnhold";


const Luke5 = () => {
  return (
    <LukeInnhold nummer={5}>
      <Tekst>
        Helg! Da sitter du kanskje ikke så stille?

        Da blir det dagens vits istedet:
        <p>
          Hørt om utvikleren som ville teste ut en ny rett?
          Han serverte beta-suppe.
        </p>

      </Tekst>
    </LukeInnhold>
  );
};

export default Luke5;