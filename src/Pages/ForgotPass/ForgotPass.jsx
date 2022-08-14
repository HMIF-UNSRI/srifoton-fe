import React from "react";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import axios from "axios";

import { useForm } from "react-hook-form";
import { useState } from "react";

const ForgotPass = () => {
  const [apiResponseMessage, SetApiResponseMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseUrl =
    (process.env.REACT_API_URL &&
      `${process.env.REACT_API_URL}/api/users/forgot-password`) ||
      "http://103.82.242.239/api/users/forgot-password";

  const submitHandler = async (data) => {
    try {
      const res = await axios.post(baseUrl, {
        email: data.email,
      });
      SetApiResponseMessage(res.data)
    } catch (error) {
      SetApiResponseMessage(error.response.data)
      return error;
    }
  };

  return (
    <AmperaBackground>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r text-white">
          Forgot Password
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 md:1/2 mx-auto mb-20 gap-4 flex flex-col rounded-xl">
        <h2 className="font-bold text-center text-xl">
          Send Reset Password Link To Your Email
        </h2>
        <form
          className="flex flex-col w-full md:w-1/2 mx-auto"
          onSubmit={handleSubmit(submitHandler)}
        >
        {apiResponseMessage && (
          <>
            {apiResponseMessage.errors && (
              <p className="text-white bg-red-600 px-2 py-1 my-2 rounded-lg text-xs md:text-lg">
                {apiResponseMessage.message.split(":")[2]}
              </p>
            )}

            {apiResponseMessage.errors ? (
              <p className="text-white bg-red-600 px-2 py-1 my-2 rounded-lg text-xs md:text-lg">
                {apiResponseMessage.message}
              </p>
            ) : (
              <p className="text-white bg-green-600 px-2 py-1 my-2 rounded-lg text-xs md:text-lg text-center">
                we have send the forgot password email
              </p>
            )}
          </>
        )}
          <div className="flex flex-col gap-2 md:gap-4 mb-10">
            <label htmlFor="email" className="text-base md:text-xl ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && errors.email.message && (
              <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                {errors.email.message}
              </p>
            )}
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
