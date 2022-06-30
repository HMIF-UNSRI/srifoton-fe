import React from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

const Team = () => {
  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
          Profil Tim
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20 rounded-xl">
        <form className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
          <div className="flex flex-col gap-2 md:gap-4 mb-10">
            <label htmlFor="name" className="text-base md:text-xl ">
              Team Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border text-center  focus:outline-red-primary border-red-secondary bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
              placeholder="Enter Your Tim Name Here"
              disabled
              value={"Melza Team"}
            />
          </div>
          <div>
            <label htmlFor="name" className="text-base md:text-xl ">
              Status :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled
              value={"Active"}
              className="border text-center focus:outline-red-primary border-red-secondary bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
            />
          </div>
        </form>
      </section>
    </Background>
  );
};

export default Team;
