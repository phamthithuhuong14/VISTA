import { useState } from "react";
import BannerPopup from "../../public/image/Banner POPUP.svg";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center  z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative p-6 rounded-lg text-center">
        <img src={BannerPopup} alt="" />
        

        {/* Nút đóng banner */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 border border-gray-400 bg-gray-200/50 text-gray-700 
             hover:bg-gray-300 hover:border-gray-500 
             backdrop-blur-lg p-2 rounded w-8 h-8 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-white stroke-2 flex items-center justify-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
