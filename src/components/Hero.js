import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#26331A] ">
      <div className="flex md:flex-row flex-col md:gap-0 gap-12 md:mx-36 md:py-16 py-10 mx-10 justify-between ">
        <div className="flex flex-col gap-6 md:w-1/2  md:items-center  md:justify-center">
          <div className="flex md:gap-6 gap-4 items-center">
            <img
              src="assets/eco-logo.png"
              alt="hero logo"
              className="md:h-16 md:w-16 h-12 w-12"
            />
            <h1 className="hero-heading md:text-5xl text-3xl">ECO Launcher.</h1>
          </div>
          <p className="capitalize md:text-3xl text-xl text-[#98b66e] ">
            protect the world by keeping your actions ecological
          </p>
          <button className="border hover:scale(1.2) border-green-600 bg-transparent py-2 md:px-6 rounded-2xl text-[#98b66e]">
            Get Quickly
          </button>
        </div>
        <div className="md:relative flex justify-center  md:mb-14" mb-0>
          <div className="md: md:ml-72 ml-0">
            <img src="/assets/image3.png" alt="" />
          </div>
          <div className="md:absolute md:block hidden top-0 ml-36 mt-8  h-full">
            <img src="/assets/image2.png" alt="" />
          </div>
          <div className="absolute md:block hidden top-0 mt-16 h-full">
            <img src="/assets/image1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
