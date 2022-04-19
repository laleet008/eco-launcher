import React from "react";
import { RiBatteryChargeFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-[#26331A] w-full">
      <div className="md:mx-40 py-16 mx-10">
        <div className="flex justify-center align-center">
          <h1 className="md:text-5xl text-3xl uppercase text-neutral-300 font-bold ">
            We Offer
          </h1>
        </div>
        <div className=" md:mt-24 mt-5 font-semibold">
          <div className="flex gap-60 justify-center">
            <div className="md:block hidden">
              <img
                src="assets/battery.png"
                className="md:h-[400px] md:w-[200px]"
                alt="battery optimization"
              />
            </div>
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-4">
                <RiBatteryChargeFill className="md:text-5xl text-3xl" />
                <p>Battery Optimization</p>
              </div>
              <p className="text-neutral-400 md:text-lg md:mt-6 mt-3">
                Battery life can be affected by various factors, such as device
                settings, environment, and usage patterns. We offer lots of
                features to reduce battery consumption. For instance, you can
                enable the dark mode and disable the animations to enhance the
                battery life of your smartphone. Also, the launcher app allows
                users to disable app animations, popup menu, etc. It is very
                lightweight so battery consumption is reduced.
              </p>
            </div>
          </div>
          <div className="flex md:mt-20 mt-10 gap-60 justify-center ">
            <div className="md:w-1/2  flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex gap-3 items-center">
                <MdDarkMode className="md:text-4xl text-neutral-400  text-3xl" />
                <p>Dark Mode</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Dark mode is a display setting for user interfaces.It means
                that, instead of the default dark text showing up against a
                light screen (known as ‘light mode’), a light color text (white
                or grey) is presented against a dark or black screen. Light
                mode, however, is the default setting for most phones and apps.
                Dark theme also helps you to use smartphone on low light to
                adjust your eye comfort. It is a great way to save battery.
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

          <div className="flex gap-60 md:mt-20 mt-10 justify-center">
            <div className="md:block hidden">
              <img
                src="assets/search_feature.png"
                className="md:h-[400px] md:w-[200px]"
                alt="Fast Searching"
              />
            </div>
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex  items-center gap-4">
                <FaSearch className="md:text-4xl text-3xl" />
                <p>Fast Searching</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Searching is a very important feature in any smartphone. It
                saves your time. We offer fast searching features to make your
                search or lookup faster. Typing two or three desired app or
                feature, we suggest you matching results which will be helpful,
                you don't need to type the whole thing. Well designed search bar
                helps to lookup in faster way.
              </p>
            </div>
          </div>

          <div className="flex  md:mt-20 mt-10 gap-60 justify-center">
            <div className="md:w-1/2 flex flex-col  justify-center align-center">
              <div className="text-neutral-300 md:text-4xl text-2xl font-bold flex items-center gap-3">
                <FcTodoList className="md:text-4xl text-3xl text-neutral-400" />
                <p>Include Todo</p>
              </div>
              <p className="text-neutral-400 text-lg md:mt-6 mt-3">
                Todo's a feature that allows you to create a list of tasks and
                to manage task in your own way. It increases the productivity,
                helps to track your work in daily basis. The checkboxes helps to
                mark the task as completed, and motivates to do another. If you
                keeping it as memory it also be helpful to make list and
                fulfilling it. It provides a sense of accomplishment.
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
