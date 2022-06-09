import React from "react";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

const Register = () => {
  return (
    <div className="bg-[rgb(34,34,34)] w-screen h-screen bg-ampera bg-center bg-cover bg-no-repeat">
      <div className="text-white w-full h-full pt-8 bg-ampera bg-no-repeat bg-center bg-cover">
        <div className="bg-[url('../public/background/blur.png')] bg-center bg-no-repeat bg-contain w-full h-full ">
          <div className="mb-6">
            <p className="text-4xl text-center">HMIF UNSRI 2022</p>
            <h1 className="font-japanese text-center text-8xl">SRIFOTON</h1>
          </div>
          <div className="bg-white text-black p-[40px] w-3/4 mx-auto ">
            <div className="relative w-[30%] mx-auto flex flex-col">
              <img
                src={dashTop}
                alt="dash-top"
                className="absolute top-0 left-0"
              />
              <h2 className="text-5xl font-japanese text-center bg-gradient-to-r my-3  from-red-primary to-red-secondary bg-clip-text text-transparent">
                Register
              </h2>
              <img
                src={dashBot}
                alt="dash-bot"
                className="absolute bottom-0 right-0"
              />
            </div>
            <p className="text-center mt-4">
              Please Fill In Your Data Completely
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
