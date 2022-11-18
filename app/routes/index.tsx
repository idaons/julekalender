import { Link } from "@remix-run/react";
import Kalender from "~/src/Components/Kalender";
import React from "react";
import { GlobalStyles } from "~/src/theme";

export default function Index() {
  return (
    <div>
      <GlobalStyles />

      <main>
        <Kalender />
      </main>
    </div>
  );
}
