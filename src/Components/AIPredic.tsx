import React, { useState } from "react";
import background from "../../public/image/bg-analytis.svg";
import B from "../../public/image/B.svg";
import glow from "../../public/image/glow.svg";
import Footer from "./Footer";
import { Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LineChart } from "lucide-react";

type Props = {};

const AIPredic = (props: Props) => {
  const data = [
    { date: "2025-02-01", price: 102.0 },
    { date: "2025-02-02", price: 101.9 },
    { date: "2025-02-03", price: 101.75 },
    { date: "2025-02-04", price: 101.6 },
    { date: "2025-02-05", price: 101.5 },
    { date: "2025-02-06", price: 101.6 },
    { date: "2025-02-07", price: 101.7 },
    { date: "2025-02-08", price: 101.65 },
    { date: "2025-02-09", price: 101.55 },
    { date: "2025-02-10", price: 101.5 },
    { date: "2025-02-11", price: 101.6 },
    { date: "2025-02-12", price: 101.65 },
    { date: "2025-02-13", price: 101.7 },
    { date: "2025-02-14", price: 101.75 },
    { date: "2025-02-15", price: 101.8 },
    { date: "2025-02-16", price: 101.85 },
    { date: "2025-02-17", price: 101.9 },
    { date: "2025-02-18", price: 102.0 },
    { date: "2025-02-19", price: 101.95 },
    { date: "2025-02-20", price: 101.9 },
    { date: "2025-02-21", price: 101.8 },
  ];

  return (
    <body className="bg-gradient-to-br from-[#3D002F] via-[#39007A] to-[#000000] text-white font-sans h-screen ">
      <div className=" flex justify-between items-start border border-[#2B2B2B] rounded-xl ">
        <img src={background} alt="" className="relative w-full" />
        <div className="absolute container mx-auto px-4 py-8  mt-20 ml-6">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500"></div>

          <div className="flex items-center mb-8">
            <div className="flex justify-center">
              <img
                src={B}
                alt=""
                className="h-12 w-12 mr-4 border border-orange-500 rounded-full p-1 "
              />
              <div>
                <h1 className="text-2xl font-bold">BTC/USDT</h1>
                <p className="text-gray-400">Bitcoin</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <div>
              <h2 className="text-lg  font-mono font-bold ml-10">
                Current Price
              </h2>
              <p className="text-2xl font-bold ml-12">$98.295,99</p>
            </div>

            <div className="flex items-center">
              <img src={glow} alt="" className="w-30 " />
            </div>

            <div>
              <h2 className="text-lg  font-mono font-bold mr-10">
                Predict Price
              </h2>
              <p className="text-2xl font-bold text-[#00FFAE] mr-12">
                $99.000,00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-6 px-4 border border-[#a09f9f] rounded-xl border-b-0 max-w-2xl max-w-auto ml-3 mt-[10%]">
        <div className="text-gray-400 text-sm mb-2 ">Cryptocurrency</div>
        <p className="border-b mb-2"></p>
        <div className="border-b border-gray-700 pb-4">
          <div className="relative h-64">
            {" "}
            
            <div className="absolute top-0 right-0 flex flex-col justify-between h-full">
              <div className="text-white text-xs text-right">102.000</div>
              <div className="text-white text-xs text-right">100.000</div>
              <div className="text-white text-xs text-right">98.000</div>
              <div className="text-white text-xs text-right">96.000</div>
              <div className="text-white text-xs text-right">94.000</div>
              <div className="text-white text-xs text-right">92.000</div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative">
            <canvas id="tradesChart"></canvas> {/* Circular chart */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-gray-400 text-xs">Total Trades</div>
              <div className="text-2xl font-bold">9999</div>
            </div>
          </div>
          <div>
            <div className="text-white text-sm">
              Win Rate: <span className="text-green-400">99.99%</span>
            </div>
            <div className="text-white text-sm">
              Highest Gain: <span className="text-green-400">99.99%</span>
            </div>
            <div className="text-white text-sm">
              Highest Loss: <span className="text-red-400">11.38%</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default AIPredic;
