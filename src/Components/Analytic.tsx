import React, { useState } from "react";
import BINANCE from "../../public/image/BINANCE.svg";
import HEATMAP from "../../public/image/bg-Heatmap.svg"
import HeatMap from "../../public/image/imgHeatmap.svg"
import JP from "../../public/image/imgJP.svg"
import PSAR from "../../public/image/imgPSAR.svg"
import ADX from "../../public/image/imgADX.svg"
import radar from "../../public/image/radar.svg"
import Footer from "./Footer";

type Props = {};

const Analytic = (props: Props) => {
  const [selectedExchange, setSelectedExchange] = useState("BINANCE");
  return (
    <div className=" min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-48 h-28 bg-[#0A0F1E] border border-blue-500 rounded-lg shadow-md p-2 flex flex-col items-center justify-center space-y-2">
          <span className="text-white font-mono text-sm font-bold">
            Centralized Exchange
          </span>
          <button className="w-full flex items-center justify-between bg-black  font-bold px-3 py-2 rounded-md shadow-lg border border-gray-700">
            <img src={BINANCE} alt="" className="h-5 text-yellow-400" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="w-80 h-24 bg-black border border-gray-500 rounded-lg shadow-md p-3 flex flex-col space-y-2">
          <span className="text-white font-mono text-sm font-bold">
            Decentralized Exchange
          </span>
          <div className="flex space-x-2">
            <button className="w-1/2 bg-black text-white border border-gray-500 px-3 py-2 rounded-md flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <button className="w-1/2 bg-black text-white border border-gray-500 px-3 py-2 rounded-md flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-6">
        <h2 className="text-lg font-normal font-mono mb-2">Single Indicator</h2>
        <div className=" w-full p-6 rounded-lg shadow-lg mb-4">
          <img src={HEATMAP} alt="" className="w-full"/>
        </div>
        <div className="flex gap-2 border rounded border-[#3C3A3A] w-full h-34 items-center justify-around">
          <div>
            <img src= {HeatMap} alt="" className="w-20"/>
          <button className=" p-2 font-mono text-md">Heatmap</button>
          </div>
          <div className="ml-4">
            <img src={JP} alt="" className="w-20"/>
          <button className=" p-2 font-mono text-md">JP Candlestick</button>
          </div>
          <div>
            <img src={PSAR} alt="" className="w-20"/>
          <button className="p-2 font-mono text-md">PSAR</button>
          </div>
          <div>
            <img src={ADX} alt="" className="w-20"/>
          <button className=" p-2 font-mono text-md">ADX</button>
          </div>
        </div>
      </div>

      
      <div className="mt-6">
        <h2 className="text-lg font-normal font-mono mb-2">Confluence</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-52 h-52 bg-black border border-gray-500 rounded-xl">
            <img src={radar} alt="" className="w-15 ml-2 mt-2"/>
            <p className="font-bold font-mono ml-4 mt-2 text-sm">Radar</p>
          </div>
          <div className="w-52 h-52 bg-black border border-gray-500 rounded-xl"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Analytic;
