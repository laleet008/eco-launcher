import React from "react";
import { RiBatteryChargeFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#26331A] w-full">
      <div className="md:mx-36 py-16 mx-10">
        <div className="flex justify-center align-center">
          <h1 className="md:text-4xl text-2xl uppercase text-neutral-400 font-bold ">
            We Offer
          </h1>
        </div>
        <div className="md:px-36 md:mt-24 mt-5">
          <div className="flex gap-40 ">
            <div className="md:block hidden">
              <img
                src="assets/battery.png"
                className="md:h-[400px] md:w-[200px]"
                alt="battery optimization"
              />
            </div>
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-4">
                <RiBatteryChargeFill className="md:text-5xl text-3xl mt-1" />
                <p>Battery Optimization</p>
              </div>
              <p className="text-neutral-400 md:text-lg md:mt-6 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate in molestias ut, ratione dolorem unde? Earum mollitia
                tempore esse officiis qui provident maiores temporibus excepturi
                maxime vero dicta sequi cupiditate inventore veritatis
                exercitationem, molestias dignissimos praesentium nulla tempora
                perspiciatis quaerat.
              </p>
            </div>
          </div>
          <div className="flex md:mt-20 mt-10 gap-40 ">
            <div className="md:w-1/2  flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-3">
                <MdDarkMode className="md:text-4xl text-neutral-400  text-3xl mt-1" />
                <p>Dark Mode</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate in molestias ut, ratione dolorem unde? Earum mollitia
                tempore esse officiis qui provident maiores temporibus excepturi
                maxime vero dicta sequi cupiditate inventore veritatis
                exercitationem, molestias dignissimos praesentium nulla tempora
                perspiciatis quaerat.
              </p>
            </div>
            <div className="md:block hidden">
              <img
                src="assets/dark_mode.png"
                className="md:h-[400px] md:w-[200px]"
                alt="dark mode"
              />
            </div>
          </div>

          <div className="flex gap-40 md:mt-20 mt-10">
            <div className="md:block hidden">
              <img
                src="assets/search_feature.png"
                className="md:h-[400px] md:w-[200px]"
                alt="Fast Searching"
              />
            </div>
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-4">
                <FaSearch className="md:text-5xl text-3xl" />
                <p>Fast Searching</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate in molestias ut, ratione dolorem unde? Earum mollitia
                tempore esse officiis qui provident maiores temporibus excepturi
                maxime vero dicta sequi cupiditate inventore veritatis
                exercitationem, molestias dignissimos praesentium nulla tempora
                perspiciatis quaerat.
              </p>
            </div>
          </div>

          <div className="flex  md:mt-20 mt-10 gap-40 ">
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-3">
                <FcTodoList className="md:text-4xl text-3xl text-neutral-400 mt-1" />
                <p>Include Todo</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate in molestias ut, ratione dolorem unde? Earum mollitia
                tempore esse officiis qui provident maiores temporibus excepturi
                maxime vero dicta sequi cupiditate inventore veritatis
                exercitationem, molestias dignissimos praesentium nulla tempora
                perspiciatis quaerat.
              </p>
            </div>
            <div className="md:block hidden">
              <img
                src="assets/tasks.png"
                className="md:h-[400px] md:w-[200px]"
                alt="Todos "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
