import React from 'react'
import B from "../../public/image/B.svg";
import background from "../../public/image/bg-analytis.svg";
import glow from "../../public/image/glow.svg";
import ImgAI2 from "../../public/image/imgAI2.svg"
import Footer from './Footer';

type Props = {}

const cryptocurrencies = [
  { name: "WBTC", price: "$98.295,99", change: "+0.051%", newPrice: "$98.296,13", color: "text-green-400",  },
  { name: "WETH", price: "$3.884,48", change: "-0.092%", newPrice: "$3.782,21", color: "text-red-400" },
  { name: "xcDOT", price: "$7,4295", change: "+1,142%", newPrice: "$7,4317", color: "text-green-400" },
  { name: "FRAX", price: "$236,06", change: "+0,318%", newPrice: "$237,19", color: "text-green-400" },
  { name: "WGLMR", price: "$0,2658", change: "-1,235%", newPrice: "$0,41275", color: "text-red-400" },
  { name: "STELLA", price: "$4,82", change: "+1,827%", newPrice: "$4,94", color: "text-green-400" },
];

const AI = (props: Props) => {
  
  return (
    <body className="bg-[#06001C] text-white font-sans">
      <div className=" rounded-2xl bg-crypto-panel relative overflow-hidden border-b-2 border-[#2B2B2B] shadow-lg shadow-blue-300/50">
        <div className=" flex justify-between items-start border border-[#2B2B2B] rounded-xl">
          <img src={background} alt="" className="relative w-full" />
          <div className='absolute flex justify-center items-center'>
          <div className="flex justify-center items-center text-white border mt-10 ml-20">
      <div className="relative w-[400px] h-[200px] flex justify-center items-center bg-opacity-30">
     
        <div className="absolute w-[150px] h-[150px] bg-black rounded-full border-white border flex flex-col justify-center items-center">
          <p className="text-sm text-gray-300">Total Trades</p>
          <p className="text-2xl font-bold">13923</p>
        </div>
        
        <div className="absolute top-0 left-0 text-xl font-mono  font-bold">Loss Rate<br /><p className='text-red-500'>40.00%</p></div>
        <div className="absolute top-0 right-0  text-xl font-mono font-bold">Win Rate<br /><p className='text-[#01B792]'>60.00%</p></div>
        <div className="absolute bottom-0 left-0 text-xl font-mono font-bold">Highest Loss<br /><p className='text-[#22C0FF]'>6.02%</p></div>
        <div className="absolute bottom-0 right-0 text-xl font-mono font-bold">bot<br /><p className='text-[#22C0FF]'>7.07%</p></div>
      </div>
    </div>
          </div>
        </div>
        </div>

        <div className="flex justify-center items-center mt-20 text-white pb-40">
      <div className="w-[90%] p-4 rounded-lg bg-gray-900 shadow-lg">
        <div className="flex justify-between text-[#FFFFFF] text-xl font-mono font-normal mb-4">
          <span>Cryptocurrency</span>
          <span className="font-bold text-white ">11:00 AM</span>
          <span>Next Change</span>
        </div>
        {cryptocurrencies.map((crypto, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <img src={ImgAI2} alt="" />
              <div>
                <p className="font-bold">{crypto.name}</p>
                <p className="text-gray-400 text-sm">{crypto.price}</p>
              </div>
            </div>
            <div>
              <img src={glow} alt="" />
            </div>
            <div className="text-xs text-center">
              <p className={crypto.color}>{crypto.change}</p>
              <p className={crypto.color}>{crypto.newPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
        </body>
  )
}

export default AI