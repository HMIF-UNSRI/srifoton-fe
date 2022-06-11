import React from "react";
import { Link } from "react-router-dom";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-top.svg";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

const Login = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <AmperaBackground>
      <div className="mb-6">
        <p className="text-2xl md:text-4xl lg:text-6xl text-center">
          HMIF UNSRI 2022
        </p>
        <h1 className="text-6xl font-japanese text-center md:text-8xl lg:text-9xl">
          SRIFOTON
        </h1>
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 md:1/2 mx-auto mb-20">
        <div className="relative w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
          <img src={dashTop} alt="dash-top" className="absolute top-0 left-0" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
            Login
          </h2>
          <img
            src={dashBot}
            alt="dash-bot"
            className="absolute bottom-0 right-0"
          />
        </div>
        <p className="text-sm md:text-base text-center mt-4">
          To participate in the competition, please login.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-2 w-full md:gap-4 pt-8 justify-center items-center"
        >
          <div className="flex flex-col gap-2 md:gap-4 w-full lg:w-3/4 lg:px-0">
            <label htmlFor="name" className="text-base md:text-xl ">
              Email* :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
              placeholder="Enter Your Email Here"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full lg:w-3/4 lg:px-0">
            <label htmlFor="password" className="text-base md:text-xl ">
              Password* :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
              placeholder="Enter Your Password Here"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full px-2 lg:w-3/4 lg:px-0">
            <Link
              to={"/forgot-password"}
              className="text-sm md:text-base text-red-primary text-right hover:underline"
            >
              Forget password ?
            </Link>
          </div>
          <div className="px-2 w-full lg:w-1/2 mx-auto mt-2 md:mt-6">
            <button className="button-primary">Log In</button>
          </div>
        </form>
        <div className="mt-2 md:mt-8">
          <p className="text-center text-xs md:text-base">
            Don't have an account yet?{" "}
            <Link
              className="text-red-primary hover:text-red-primary-semibold active:text-red-primary-bold hover:underline font-bold text-xs md:text-base"
              to={"/register"}
            >
              Register here!
            </Link>
          </p>
        </div>
      </section>
    </AmperaBackground>
  );
};

export default Login;
