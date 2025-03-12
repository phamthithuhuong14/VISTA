"use client";
import TopBanner from "../../public/image/AIChatbot.svg";
import Footer from "./Footer";
import logoViata from "../../public/image/logoVista.svg";


const Chatbot = () => {
  return (
    <div className="relative mx-auto flex h-screen flex-col justify-between pb-4 bg-[linear-gradient(70deg,#39007A_0%,#380043_8%,#002153_100%)]">
      <img src={TopBanner} alt="" />

      <div className="absolute left-1/3 right-1/3 top-8 grid justify-center text-center">
        <img src={logoViata} alt="" className=" w-22" />
        <h1 className="pt-3 font-bold text-white text-xl font-mono">
          AI Chatbot
        </h1>
      </div>
      {/* {!hasUserMessage && (
                <div className="p-4 text-center text-gray-500">
                    Visita&apos;s AI Chatbotprovides AI-powered trading tools and real-time insights
                    to enhance <br /> your crypto management.
                </div>
            )} */}

      <div className="relative bottom-[23%]">
        <div className=" border border-none w-4 h-4 rounded-full bg-gradient-to-r from-[#3F5EFB] to-[#FFF200] ml-12 blur-sm"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[radial-gradient(circle,_rgba(238,174,202,1)_0%,_rgba(148,187,233,1)_100%)] blur-sm ml-44 "></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_8%,_rgba(251,236,226,0.35)_70%)] blur-sm ml-[10%] mt-5"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_8%,_rgba(251,236,226,0.35)_70%)] blur-sm ml-[76%]"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[radial-gradient(circle,_rgba(63,94,251,1)_0%,_rgba(186,16,0,1)_100%)] mt-[50%] blur-sm"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_29%,_rgba(186,96,0,1)_70%)] ml-[90%] blur-sm"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_29%,_rgba(142,122,255,1)_70%)] ml-[70%] blur-sm"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_29%,_rgba(0,146,0,1)_70%)] ml-16 blur-sm"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)] blur-sm ml-[50%] -mt-20"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_29%,_rgba(226,230,251,0.1)_70%)] ml-[30%] blur-sm mt-[30%]"></div>
        <div className="border border-none w-4 h-4 rounded-full bg-[linear-gradient(0deg,_rgba(57,0,122,1)_8%,_rgba(251,236,226,0.35)_70%)] blur-sm ml-[50%] -mt-16"></div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Chatbot;
