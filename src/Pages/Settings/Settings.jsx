import React from "react";
import { Link } from "react-router-dom";

import Button from "../../Components/Button/Button";

import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

const Settings = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
          Pengaturan Akun
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 lg:flex-row pt-8"
        >
          <div className="flex flex-col gap-4 lg:w-1/2 lg:pr-2 lg:border-r-[3px] lg:border-r-red-secondary">
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="name" className="text-lg md:text-xl ">
                Name* :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="nim" className="text-lg md:text-xl">
                Nim* :
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                placeholder="Enter Your Nim Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="email" className="text-lg md:text-xl ">
                Email* :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="password" className="text-lg md:text-xl ">
                Password* :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                placeholder="Enter Your Password Here"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2 ">
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="whatsapp" className="text-lg md:text-xl ">
                  Whatsapp Number* :
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg rounded-lg"
                  placeholder="Enter Your Whatsapp Here"
                />
              </div>
            </div>
            <div className="mx-auto flex flex-col gap-2 md:gap-4 lg:gap-8 justify-center ">
              <Button>Sign Up</Button>
              <p>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-red-primary hover:text-red-primary-semibold active:text-red-primary-bold hover:underline font-bold text-base"
                >
                  Please Login here!
                </Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    </Background>
  );
};

export default Settings;
