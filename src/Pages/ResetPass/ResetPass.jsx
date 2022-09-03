import React from "react";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import { useForm } from "react-hook-form";
import axios from "axios";

import dashWhite from "../../Assets/Objects/dash-white.svg";

const ForgotPass = () => {
  const { register, handleSubmit } = useForm();

  //check for query params
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  const baseUrl =
    (process.env.REACT_API_URL &&
      `${process.env.REACT_API_URL}/api/users/reset-password`) ||
    "https://srifoton.hmifunsri.org/api/users/reset-password";

  const onSubmitHandler = async (data) => {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return alert("Password and Confirm Password must be the same");
    }

    try {
      await axios.post(
        baseUrl,
        {
          new_password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      return error;
    }

    return {
      error: data.errors,
      message: data.message,
      code: data.code,
    };
  };

  return (
    <AmperaBackground>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-gradient-to-r text-white">
          Reset Password
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <section className="bg-white text-black p-[40px] w-3/4 md:1/2 mx-auto mb-20 gap-4 flex flex-col rounded-xl">
        <h2 className="font-bold text-center text-xl">Reset Your Password</h2>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col w-full md:w-1/2 mx-auto"
        >
          <div className="flex flex-col gap-2 md:gap-4 mb-10">
            <label htmlFor="email" className="text-base md:text-xl ">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg rounded-lg"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },

                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,20}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 mb-10">
            <label htmlFor="email" className="text-base md:text-xl ">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },

                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,20}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                },
              })}
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
