import React from "react";
import { GlobalStyles } from "./theme";
import LukeWrapper from "./Components/LukeWrapper";
import Kalender from "./Components/Kalender";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/julekalender/:lukeNummer" element={<LukeWrapper />} />
        <Route path="/julekalender" element={<Kalender />} />
      </Routes>
    </>
  );
}

export default App;
