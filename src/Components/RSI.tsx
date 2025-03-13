import B from "../../public/image/B.svg";
import background from "../../public/image/bg-analytis.svg";
import POL from "../../public/icon/POL.svg"
import OPS from "../../public/icon/OPS.svg"
import ETH from "../../public/icon/ETH.svg"
import DOGE from "../../public/icon/DOGE.svg"
import AVAX from "../../public/icon/AVAX.svg"
import ADA from "../../public/icon/ADA.svg"
import XRP from "../../public/icon/XRP.svg"
import SUI from "../../public/icon/SUI.svg"
import BTC from "../../public/icon/BTC.svg"
import ABT from "../../public/icon/ABT.svg"
import APT from "../../public/icon/APT.svg"
import TON from "../../public/icon/TON.svg"
import Footer from "./Footer";

type Props = {};

const RSI = (props: Props) => {
  return (
    <body className="bg-black text-white font-sans">
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
        
      </div>

      <div className="flex justify-between items-center px-4 py-3 mt-10">
        <span className="text-lg font-mono text-white mt-2">
          Select analysis indicators
        </span>
        <div className="flex space-x-2">
          <span className="px-3 font-mono font-normal py-1 bg-gray-800 rounded-md text-lg">
            RSI14
          </span>
          <div className="flex items-center px-3 py-1 bg-gray-800 rounded-md text-lg">
            <span className="font-mono">30M</span>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative mx-4 h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden">
        <div className="absolute left-2 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
          <div className="text-[#FC454A]">100</div>
          <div className="text-[#FC454A]">90</div>
          <div className="text-[#FC454A]">80</div>
          <div className="text-[#FF9295]">70</div>
          <div>60</div>
          <div>50</div>
          <div className="text-[#8AFFE3]">40</div>
          <div>30</div>
          <div className="text-[#8AFFE3]">20</div>
          <div className="text-[#8AFFE3]">10</div>
        </div>

        <div className="absolute w-full h-full left-0 top-0">
          
          <div className="absolute top-[30%] left-10 right-0 h-px bg-red-900"></div>
          <div className="absolute top-[50%] left-10 right-0 h-px bg-gray-700"></div>
          <div className="absolute top-[70%] left-10 right-0 h-px bg-teal-900"></div>
          <div className="absolute bottom-0 left-10 right-0 h-px bg-teal-900"></div>
        </div>

        <div className="relative h-full w-full">

          <div className="absolute top-[25%] right-[25%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={SUI} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute top-[36%] left-[30%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={APT} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute top-[45%] right-[15%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={BTC} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute top-[58%] left-[22%] w-10 h-10 rounded-full  flex items-center justify-center">
          <img src={ABT} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute top-[58%] right-[30%] w-10 h-10 rounded-full ">
          <img src={TON} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute top-[62%] right-[12%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={XRP} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute bottom-[45%] left-[12%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={ADA} alt="" />
          </div>

          <div className="absolute bottom-[48%] left-[40%] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={AVAX} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute bottom-[38%] right-[48%] w-10 h-10 rounded-full  flex items-center justify-center">
          <img src={DOGE} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute bottom-[28%] left-[28%] w-10 h-10 rounded-full ">
          <img src={ETH} alt=""  className="w-10 h-10"/>
          </div>

          <div className="absolute bottom-[15%] right-[25%] w-10 h-10 rounded-full ">
          <img src={OPS} alt="" className="w-10 h-10"/>
          </div>

          <div className="absolute bottom-[20%] left-[25%] w-9 h-9 rounded-full shadow-purple-300/50">
          <img src={POL} alt="" className="w-10 h-10"/>
          </div>
        </div>

        {/* <div className="absolute bottom-1 right-2 text-xs text-gray-400">
        
        </div> */}
        
      </div>
      <Footer />
    </body>
  );
};

export default RSI;
