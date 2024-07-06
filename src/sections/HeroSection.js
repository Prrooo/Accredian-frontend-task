import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Popup from "../components/Popup";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="flex justify-between relative bg-primary-color-bg rounded-3xl w-3/4 h-[36vw] m-auto overflow-hidden shadow-2xl ">
        <div className="ml-[3vw] w-[26vw] mt-[7vw]">
          <h1 className="font-[700] text-[4.5vw]/[4.5vw] mb-[3vw]">
            Let's Learn & Earn
          </h1>
          <p className="text-[2vw]/[2.6vw] w-[21vw]">
            Get a chance to win up-to{" "}
            <span className=" text-primary-color font-[700] text-[2.8vw]">
              Rs.15,000
            </span>{" "}
          </p>
          <button
            onClick={handleOpenPopup}
            className="text-white bg-primary-color mt-[3.5vw] rounded-lg px-[2.5vw] py-[0.7vw] text-[1.1vw]"
          >
            Refer Now
          </button>
        </div>
        <div>
          <img
            className="w-[53vw] absolute -right-[6vw] -bottom-[7.6vw] z-20"
            src="/images/heroMain.png"
            alt="heroMain"
          />
          <img
            className=" absolute w-[8.3vw] rotate-180 scale-x-[-1] left-0 -top-[3vw]"
            src="/images/cash1.png"
            alt="cashImg"
          />
          <img
            src="/images/cash1.png"
            className="absolute w-[8.3vw] rotate-180 -top-[3vw] right-0"
            alt="cashImg"
          />
          <img
            src="/images/cash1.png"
            className="absolute w-[8.3vw] rotate-180 left-[42vw] top-[1.5vw] "
            alt="cashImg"
          />
          <img
            src="/images/cash1.png"
            className="absolute w-[8.3vw] rotate-180 scale-x-[-1] right-0 top-[15vw]"
            alt="cashImg"
          />
          <img
            src="/images/cash1.png"
            className="absolute w-[8.3vw] scale-x-[-1] bottom-[2vw] left-[34vw] z-20"
            alt="cashImg"
          />
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default HeroSection;
