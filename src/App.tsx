import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./theme";
import LukeWrapper from "./Components/LukeWrapper";
import Kalender from "./Components/Kalender";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/julekalender/:lukeNummer" element={<LukeWrapper />} />
          <Route path="/julekalender" element={<Kalender />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
