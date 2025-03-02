import React, { useState, useEffect } from "react";
import { Bell, Search, ChartLine, Bot, Menu } from "lucide-react";

import restartBtn from "../../public/image/restartbutton.png";
import home from "../../public/image/Home.svg";
import analytis from "../../public/image/Analytis.svg";
import AI from "../../public/image/AI.svg";
import chatbot from "../../public/image/chatbot.svg";
import banner from "../../public/image/banner.png";
import avt from "../../public/image/3d_avatar_13.svg";
import emtyToken from "../../public/image/empty-token 1.svg";
import Analytis from "./RSI";
import Footer from "./Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slides = [
    {
      id: 1,
      image: banner,
    },

    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const marketList = [
    {
      id: 1,
      name: "Wrapped BTC",
      symbol: "BTC",
      price: 98285.99,
      change: 4.34,
      amount: "1000.000",
    },
    {
      id: 2,
      name: "Wrapped Ether",
      symbol: "ETH",
      price: 3884.48,
      change: 6.67,
      amount: "431.38",
    },
    {
      id: 3,
      name: "xcDOT",
      symbol: "DOT",
      price: 7.4595,
      change: 8.85,
      amount: "1000.000",
    },
    {
      id: 4,
      name: "USDC",
      symbol: "USDC",
      price: 1.0001,
      change: 0.0,
      amount: "1000.000",
    },
    {
      id: 5,
      name: "Wrapped GLMR",
      symbol: "GLMR",
      price: 0.665,
      change: 4.34,
      amount: "1000.000",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsZoomed(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsZoomed(false);
      }, 500);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black to-black text-white">
      {/* Header */}
      <div className="p-7 border border-[rgba(43,43,43,1)] rounded-b-lg shadow-[0px_4px_40px_0px_rgba(0,119,255,0.25)] backdrop-blur-[90px]bg-[#4e0c42] bg-gradient-to-r from-[#4e0c4261] via-[#5a20b7] to-[#2e05c0]">
        <div className="flex items-center ">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={avt} alt="" className="w-12" />
          </div>
          <div className=" ">
            <h2 className="text-white font-semibold font-mono text-xl ml-10">
              Hi, BaroV
            </h2>
            <p className="text-gray-300 text-sm ml-10 font-mono">
              Have a good day!
            </p>
          </div>
          <div className="border border-none rounded-full ml-auto w-10 h-10 bg-black">
            <Bell className="w-6 h-6 mt-2 ml-2 " />
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2 mt-2.5">
          <div className="bg-white/10 rounded-full flex items-center px-4 py-2">
            <Search className="w-5 h-8 text-gray-400" />
            <input
              type="text"
              placeholder="Search for cryptocurrencies"
              className="bg-transparent font-mono border-none outline-none text-white px-3 w-full"
            />
          </div>
        </div>
      </div>

      {/* Banner Slider */}
      <div className="relative w-full p-4 overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-in-out w-[50%] justify-between items-center gap-16"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.image} className="w-full flex-shrink-0">
              <div className="bg-white/10 rounded-3xl p-6">
                <div
                  className={`flex justify-between items-center transition-transform duration-500 ${
                    isZoomed ? "scale-110" : "scale-100"
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="w-1/2 relative h-24 flex justify-center">
                    <div className="w-16 h-32 rounded-xl absolute -right-4 transform -rotate-12" />
                    <div className="w-16 h-32 rounded-xl relative" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? " w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Market List */}
      <div className="p-4">
        <h3 className="text-white font-bold text-xl font-mono mb-4">
          Market List
        </h3>
        <div className="space-y-3 bottom-2">
          {marketList.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 " />
                <img src={emtyToken} alt="" />
                <div>
                  <h4 className=" text-white font-bold text-xl font-mono">
                    {item.name}
                  </h4>
                  <p className=" text-white font-bold text-xl font-mono">
                    {item.amount}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className=" text-white font-bold text-xl font-mono">
                  ${item.price.toLocaleString()}
                </p>
                <p className="text-green-400 font-bold text-xl font-mono">
                  +{item.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    
  );
};

export default Home;
