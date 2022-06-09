import React from "react";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

const Register = () => {
  return (
    <div className="bg-[rgb(34,34,34)] w-screen h-screen bg-ampera bg-center bg-cover bg-no-repeat">
      <div className="text-white w-full h-full pt-8 bg-ampera bg-no-repeat bg-center bg-cover">
        <div className="bg-[url('../public/background/blur.png')] bg-center bg-no-repeat bg-contain w-full h-full ">
          <div className="mb-6">
            <p className="text-3xl md:text-4xl text-center">HMIF UNSRI 2022</p>
            <h1 className="text-7xl font-japanese text-center md:text-8xl">
              SRIFOTON
            </h1>
          </div>
          <section className="bg-white text-black p-[40px] w-3/4 mx-auto ">
            <div className="relative w-3/4 md:w-1/2 lg:w-[30%] mx-auto flex flex-col">
              <img
                src={dashTop}
                alt="dash-top"
                className="absolute top-0 left-0"
              />
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-japanese text-center bg-gradient-to-r my-3  from-red-primary to-red-secondary bg-clip-text text-transparent">
                Register
              </h2>
              <img
                src={dashBot}
                alt="dash-bot"
                className="absolute bottom-0 right-0"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4">
              Please Fill In Your Data Completely
            </p>
            <form className="flex md:flex-col">
              <div className="flex flex-col w-full">
                <div className="flex flex-col gap-2 md:gap-4">
                  <label
                    htmlFor="name"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    Name* :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-5 py-3 text-sm md:text-lg lg:text-xl"
                    placeholder="Enter Your Name Here"
                  />
                </div>
              </div>
              <div></div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
