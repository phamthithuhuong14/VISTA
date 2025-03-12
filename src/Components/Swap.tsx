import React, { useState } from "react";
import logo from "../../public/image/logo.svg";
import { ChevronDown } from "lucide-react";
import B from "../../public/image/B.svg";
import restartBtn from "../../public/image/restartbutton.png";
import home from "../../public/image/Home.svg";
import analytis from "../../public/image/Analytis.svg";
import AI from "../../public/image/AI.svg";
import chatbot from "../../public/image/chatbot.svg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Footer from "./Footer";

const data = [
  { name: "1", value: 20 },
  { name: "2", value: 80 },
  { name: "3", value: 40 },
  { name: "4", value: 70 },
  { name: "5", value: 50 },
  { name: "6", value: 30 }
];

type Props = {};

// function CryptoExchange() {
//   const [amount, setAmount] = useState("1,5");
// }

const Swap = (props: Props) => {

  return (
    <body className="bg-[#0d0136] text-white font-sans">
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src={logo} alt="" className="w-[30%] ml-16" />
        <div>
          <button className="border rounded-full w-[40%] h-9 border-blue-500 text-blue-500 mt-6 ml-16 font-mono font-bold">
            0xe851...17fbf
          </button>
        </div>
      </div>

      <div>
        <p className="font-sans font-extrabold text-blue-500 text-xl mt-6 ml-16">
          Choose Network
        </p>
        <div className="border border-blue-500 shadow-xl shadow-blue-500/50 max-w-lg ml-16 mt-4 rounded-xl">

        <div className="bg-[#242424] text-white p-4 rounded-xl w-full max-w-md mt-8 ml-8">
          <div className="flex justify-between items-center text-blue-300 mb-2">
            <span className="font-bold text-lg">From</span>
            <span className="text-sm">
              Available: <span className="font-semibold">140.214,85</span>
            </span>
            <div className="text-sm space-x-2">
              <button className="hover:underline">Max</button>
              <button className="hover:underline">Half</button>
            </div>
          </div>
          <div className="bg-black p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2  w-28 h-15 bg-[#161616]">
              <div className=" w-8 h-8 flex items-center justify-center rounded-full ml-2">
                <img src={B} alt="" />
              </div>
              <span className="font-semibold">BTC</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="text-right">
              <input
                type="text"
                className="bg-transparent text-2xl text-blue-300 w-16 text-right outline-none"
              />
              <p className="text-blue-300 text-sm">$142.125,7</p>
            </div>
          </div>
        </div>

        <div className="bg-[#242424] text-white p-4 rounded-xl w-full max-w-md mt-8 ml-8">
          <div className="flex justify-between items-center text-blue-300 mb-2">
            <span className="font-bold text-lg">From</span>
            <span className="text-sm">
              Available: <span className="font-semibold">140.214,85</span>
            </span>
            <div className="text-sm space-x-2">
              <button className="hover:underline">Max</button>
              <button className="hover:underline">Half</button>
            </div>
          </div>
          <div className="bg-black p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2  w-28 h-15 bg-[#161616]">
              <div className=" w-8 h-8 flex items-center justify-center rounded-full ml-2">
                <img src={B} alt="" />
              </div>
              <span className="font-semibold">BTC</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="text-right">
              <input
                type="text"
                className="bg-transparent text-2xl text-blue-300 w-16 text-right outline-none"
              />
              <p className="text-blue-300 text-sm">$142.125,7</p>
            </div>
          </div>
        </div>

        <button className="border rounded-md w-full h-12 max-w-md mt-10 mb-5 ml-8 bg-blue-500 font-mono font-bold text-black text-2xl">Swap</button>
        </div>
      </div>

      <div className=" text-white p-4 rounded-xl w-full max-w-md mt-8 ml-16 ">
      <div className="bg-gray-900 mt-4 p-4 rounded-lg w-full max-w-md">
        <div className="flex items-center mb-2 ">
          <button className="bg-black text-white px-3 py-1 rounded-md flex items-center">
            RSI <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" hide />
            <YAxis domain={[0, 100]} ticks={[0, 50, 100]} stroke="#ccc" />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

     <Footer />
    </body>
  );
};

export default Swap;
