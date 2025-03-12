import { use, useState } from "react";

import "./App.css";
import Home from "./Components/Home";
import { useRoutes } from "use-routes";
import { Route, Router, Routes } from "react-router-dom";
import ADX from "./Components/ADX";
import RSI from "./Components/RSI";
import PSAR from "./Components/PSAR";
import Swap from "./Components/Swap";
import AI from "./Components/AI";
import AIChatbot from "./Components/AIChatbot";
import Analytic from "./Components/Analytic";
import AIPredic from "./Components/AIPredic";
import HeatMap from "./Components/HeatMap";
import Banner from "./Components/Banner";

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
        <Route path="/AIChatbot" element={<AIChatbot />} />
        <Route path="/Analytic" element={<Analytic />} />
        <Route path="/AIPredic" element={<AIPredic />} />
        <Route path="/HeatMap" element={<HeatMap />} />
        <Route path="/Banner" element={<Banner />} />
      </Routes>
    </>
  );
}

export default App;
