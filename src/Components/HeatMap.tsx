import React from "react";
import B from "../../public/image/B.svg";
import background from "../../public/image/bg-analytis.svg";
import restartbtn from "../../public/image/restartbutton.png"
type Props = {};

const HeatMap = (props: Props) => {
  return (
    <body className="bg-gradient-to-br from-[#3d002f] via-[#39007a] to-black h-screen text-white font-sans ">
      <div className=" rounded-2xl bg-crypto-panel relative overflow-hidden border-b-2 border-[#2B2B2B] shadow-lg shadow-blue-300/50">
        <div className=" flex justify-between items-start border border-[#2B2B2B] rounded-xl space-x-2 ">
          <img src={background} alt="" className="relative w-full" />
          <div className="border absolute w-[50%] flex mt-[17%] ml-[26%] shadow-amber-50  backdrop-blur-md">
            <div className=" ml-3.5 mt-[6%]">
              <h2 className="text-xl font-bold ml-5">BTC/USDT</h2>
              <p className="text-xl font-bold text-red-500 ml-5">$98.295,99</p>
              <p className="text-red-500 flex items-center ml-5 text-lg">
                <span className=" mr-1">▲</span>4.34%
              </p>
              <p className="text-lg mt-2 ml-5">RSI: 62</p>
            </div>
            <div className="absolute ml-[68%] rounded-full w-20 h-20 mt-[10%] flex items-center justify-center border-1 border-white">
              <img src={B} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-1 right-2 text-lg font-mono text-white mt-3.5">
        Trading Pair
      </div> */}
      </div>

      {/* <div className=" w-full flex items-center justify-center">
    <div className=" rounded-3xl shadow-2xl shadow-gray-800/50 w-full p-8 relative">
      <div className="absolute top-0 left-0 rounded-3xl w-full overflow-hidden">
        <div className="absolute inset-0 opacity-50"></div>
      </div> */}
      <div className="relative z-10 mt-20 w-[90%] ml-10 border border-b-0 rounded-2xl shadow-amber-50  backdrop-blur-md">
        <h1 className="text-2xl font-mono font-bold text-[#426BFF] mt-4 mb-6 text-center">
          Trading Strategy
        </h1>
        <div className="mb-4">
          <p className="text-white font-mono font-bold ml-5">
            Signal: <span className="text-red-500">Over Bought</span>
          </p>
          <p className="text-white font-mono font-bold ml-5">Indicator: RSI7</p>
        </div>

        <div className="space-y-4">
          <div className="border-[#353535] bg-black w-[90%] h-20 p-4 border ml-5 rounded-md flex justify-between items-center">
            <p className="text-[#426BFF]">Entry Point</p>
            <p className="text-white">$90.000,00</p>
          </div>
          <div className="border-[#353535] bg-black w-[90%] h-20 p-4 border ml-5 rounded-md flex justify-between items-center">
            <p className="text-[#426BFF]">DCA1</p>
            <p className="text-[#9EB3FF]">$80.000,00</p>
          </div>
          <div className="border-[#353535] bg-black w-[90%] h-20 p-4 border ml-5 rounded-md flex justify-between items-center">
            <p className="text-[#426BFF]">DCA2</p>
            <p className="text-[#9EB3FF]">$90.000,00</p>
          </div>
          <div className="border-[#353535] bg-black w-[90%] h-20 p-4 border ml-5 rounded-md flex justify-between items-center">
            <p className="text-[#426BFF]">Target Point</p>
            <p className="text-[#00FFAE]">$200.000,00</p>
          </div>
          <div className="border-[#353535] bg-black w-[90%] h-20 p-4 border ml-5 rounded-md flex justify-between items-center">
            <p className="text-[#426BFF]">Stop Loss</p>
            <p className="text-red-500">$90.000,00</p>
          </div>
        </div>

        <button className="mt-8 ml-5 bg-black border border-[#353535] text-white font-bold py-3 px-6 rounded-md w-[90%] flex items-center justify-center space-x-2">
          <span className="font-mono font-bold text-[#9EB3FF] text-xl">Swap Now</span>
          <img src={restartbtn} alt="" />
        </button>
      </div>
      {/* </div>
  </div> */}
    </body>
  );
};

export default HeatMap;
