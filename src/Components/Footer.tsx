import React from 'react'
import restartBtn from "../../public/image/restartbutton.png";
import home from "../../public/image/Home.svg";
import analytis from "../../public/image/Analytis.svg";
import AI from "../../public/image/AI.svg";
import chatbot from "../../public/image/chatbot.svg";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 border border-[rgba(86,86,86,1)] rounded-s-3xl">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center text-blue-500">
            {/* <Home class="w-6 h-6" /> */}
            <img src={home} alt="" className="w-6 h-8 " />
            <span className=" font-normal text-xl font-mono text-[rgba(66,107,255,1)]">
              Home
            </span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            {/* <ChartLine className="w-6 h-6" /> */}
            <img src={analytis} alt="" className="w-7 h-8" />
            <span className="text-white font-normal text-xl font-mono mt-1">
              Analysis
            </span>
          </button>
          <div className="">
            <img
              src={restartBtn}
              alt=" lỗi"
              className="border w-20 h-20 border-[rgba(66,107,255,1)] rounded-full "
            />
          </div>
          <button className="flex flex-col items-center text-gray-400">
            {/* <Bot className="w-6 h-6" /> */}
            <img src={AI} alt="" className="w-7 h-8" />
            <span className="text-white font-normal text-xl font-mono mt-1">
              AI
            </span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            {/* <Menu className="w-6 h-6" /> */}
            <img src={chatbot} alt="" className="w-6 h-8" />
            <span className="text-white font-normal text-xl font-mono mt-1">
              ChatBot
            </span>
          </button>
        </div>
      </div>
  )
}

export default Footer