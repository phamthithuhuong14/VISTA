import React, { useState } from "react";
import restartBtn from "../../public/image/restartbutton.png";
import home from "../../public/image/Home.svg";
import analytis from "../../public/image/Analytis.svg";
import AI from "../../public/image/AI.svg";
import chatbot from "../../public/image/chatbot.svg";
import B from "../../public/image/B.svg";
import background from "../../public/image/bg-analytis.svg";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Dot } from "recharts";
import restartbutton from "../../public/image/restartbutton.png";
import Footer from "./Footer";





const PSAR = () => {
  
  const data = [
    { date: '2025-02-01', price: 102.000 },
    { date: '2025-02-02', price: 101.900 },
    { date: '2025-02-03', price: 101.750 },
    { date: '2025-02-04', price: 101.600 },
    { date: '2025-02-05', price: 101.500 },
    { date: '2025-02-06', price: 101.600 },
    { date: '2025-02-07', price: 101.700 },
    { date: '2025-02-08', price: 101.650 },
    { date: '2025-02-09', price: 101.550 },
    { date: '2025-02-10', price: 101.500 },
    { date: '2025-02-11', price: 101.600 },
    { date: '2025-02-12', price: 101.650 },
    { date: '2025-02-13', price: 101.700 },
    { date: '2025-02-14', price: 101.750 },
    { date: '2025-02-15', price: 101.800 },
    { date: '2025-02-16', price: 101.850 },
    { date: '2025-02-17', price: 101.900 },
    { date: '2025-02-18', price: 102.000 },
    { date: '2025-02-19', price: 101.950 },
    { date: '2025-02-20', price: 101.900 },
    { date: '2025-02-21', price: 101.800 }
  ];

  // State to track the selected time period
  const [timeRange, setTimeRange] = useState('1 Day');

  // Function to handle time range selection
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };
  return (
    <body className="bg-black text-white font-sans ">
      <div className=" rounded-2xl bg-crypto-panel relative overflow-hidden border-b-2 border-[#2B2B2B] shadow-lg shadow-blue-300/50">
        <div className=" flex justify-between items-start border border-[#2B2B2B] rounded-xl space-x-2 ">
          <img src={background} alt="" className="relative w-full"/>
          <div className="border absolute w-[50%] flex mt-[17%] ml-[26%] shadow-amber-50  backdrop-blur-md">
          <div className=" ml-3.5 mt-[6%]">
            <h2 className="text-xl font-bold ml-5">BTC/USDT</h2>
            <p className="text-xl font-bold text-teal-400 ml-5">$98.295,99</p>
            <p className="text-teal-400 flex items-center ml-5 text-lg">
              <span className=" mr-1">▲</span>4.34%
            </p>
            <p className="text-lg mt-2 ml-5">RSI: 62</p>
          </div>
          <div className="absolute ml-[68%] rounded-full w-20 h-20 mt-[10%] flex items-center justify-center border-1 border-white">
            <img src={B} alt="" className="w-16 h-16"/>
          </div>
          </div>
        </div>

        {/* <div className="absolute bottom-1 right-2 text-lg font-mono text-white mt-3.5">
          Trading Pair
        </div> */}
      </div>

      <div className="flex flex-col p-4 bg-black text-blue-400 rounded-lg mt-8 border border-[#2B2B2B] w-xl ml-[9%]">
      {/* Time range selector */}
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-4 py-2 rounded-md border border-white text-white ${timeRange === '1 Day' ? '' : 'bg-black'}`}
          onClick={() => handleTimeRangeChange('1 Day')}
        >
          1 Day
        </button>
        <button 
          className={`px-4 py-2 rounded-md border border-white text-white ${timeRange === '1 Week' ? 'bg-blue-900/30' : 'bg-black'}`}
          onClick={() => handleTimeRangeChange('1 Week')}
        >
          1 Week
        </button>
        <button 
          className={`px-4 py-2 rounded-md border border-white text-white ${timeRange === '1 Month' ? 'bg-blue-900/30' : 'bg-black'}`}
          onClick={() => handleTimeRangeChange('1 Month')}
        >
          1 Month
        </button>
      </div>
      
      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" hide={true} />
            <YAxis 
              domain={[101.500, 102.000]}
              orientation="right" 
              tick={{ fill: 'white' }}
              axisLine={false}
              tickLine={false}
              width={70}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111', border: 'none' }}
              itemStyle={{ color: '#3B82F6' }}
              formatter={(value) => [`${value.toFixed(3)}`, 'Price']}
            />
            <Line 
              type="monotone"
              dataKey="price"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
      
      
    <div className="mt-5 pb-40">
        <button className="flex justify-center items-center gap-3 text-[#9EB3FF] font-bold border w-xl ml-[9%] text-2xl font-mono rounded-xl">Swap Now 
        <img src={restartBtn} alt="" className="animate-spin"/>
        </button>
      </div>

      <Footer />
    </body>
  );
};

export default PSAR;
