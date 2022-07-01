import React from "react";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import axios from "axios";

import { useForm } from "react-hook-form/dist/useForm";

const ForgotPass = () => {
  const { register, handleSubmit } = useForm();

  const baseUrl =
    (process.env.REACT_API_URL &&
      `${process.env.REACT_API_URL}/api/users/forgot-password`) ||
    "http://localhost:8000/api/users/forgot-password";

  const submitHandler = (data) => {
    axios.post(baseUrl, {
      email: data.email,
    });
  };

  return (
    <AmperaBackground>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-gradient-to-r text-white">
          Forgot Password
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 md:1/2 mx-auto mb-20 gap-4 flex flex-col rounded-xl">
        <h2 className="font-bold text-center">
          Send Reset Password Link To Your Email
        </h2>
        <form
          className="flex flex-col w-full md:w-1/2 mx-auto"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-2 md:gap-4 mb-10">
            <label htmlFor="email" className="text-base md:text-xl ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
              {...register("email")}
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="button-primary w-1/2" type="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </AmperaBackground>
  );
};

export default ForgotPass;
