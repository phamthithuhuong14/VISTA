import { use, useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import { useRoutes } from "use-routes";
import { Route, Router, Routes } from "react-router-dom";
import Analytis from "./Components/RSI";
import ADX from "./Components/ADX";
import RSI from "./Components/RSI";
import PSAR from "./Components/PSAR";
import Swap from "./Components/Swap";
import AI from "./Components/AI";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RSI" element={<RSI />} />
        <Route path="/ADX" element={<ADX />} />
        <Route path="/PSAR" element={<PSAR />} />
        <Route path="/Swap" element={<Swap />} />
        <Route path="/AI" element={<AI />} />
      </Routes>
    </>
  );
}

export default App;
