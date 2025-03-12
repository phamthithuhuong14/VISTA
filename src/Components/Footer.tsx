import React, { useState } from 'react'
import restartBtn from "../../public/image/restartbutton.png";
import home from "../../public/image/Home.svg";
import analytis from "../../public/image/Analytis.svg";
import AI from "../../public/image/AI.svg";
import chatbot from "../../public/image/chatbot.svg";
import { useNavigate } from 'react-router-dom';

type Props = {}

const Footer = (props: Props) => {

  const nav = useNavigate()
  const [activeTab, setActiveTab] = useState("home");
  const HandleGotoHome = () => {
    nav('/')
  }

  const HandleGotoAnalytis = () => {
    nav('/Analytic')
  }

  const HandleGotoAI = () => {
    nav('/AI')
  }

  const HandleGotoChatBot = () => {
    nav('/AIChatbot')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 border border-[rgba(86,86,86,1)] rounded-s-3xl ">
        <div className="flex justify-between items-center">
          <button onClick={HandleGotoHome} className="flex flex-col items-center ">
            {/* <Home class="w-6 h-6" /> */}
            <img src={home} alt="" className="w-6 h-8 " />
            <span className='hover:text-blue-500 focus:text-blue-500 text-blue-500 cursor-pointer' tabIndex={0}>
              Home
            </span>
          </button>
          <button onClick={HandleGotoAnalytis} className="flex flex-col items-center text-gray-400">
            {/* <ChartLine className="w-6 h-6" /> */}
            <img src={analytis} alt="" className="w-7 h-8" />
            <span className="text-white font-normal text-xl font-mono mt-1">
              Analysis
            </span>
          </button>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center">
            <img
            onClick={HandleGotoHome}
              src={restartBtn}
              alt=" lỗi"
              className="border bg-black w-24 h-24 border-[rgba(66,107,255,1)] rounded-full "
            />
          </div>
          <button onClick={HandleGotoAI} className="flex flex-col items-center text-gray-400">
            {/* <Bot className="w-6 h-6" /> */}
            <img src={AI} alt="" className="w-7 h-8" />
            <span className="text-white font-normal text-xl font-mono mt-1">
              AI
            </span>
          </button>
          <button onClick={HandleGotoChatBot} className="flex flex-col items-center text-gray-400">
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