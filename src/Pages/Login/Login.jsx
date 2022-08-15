import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import AuthContext from "../../Contexts/AuthContext";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-top.svg";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    if(authCtx.apiResponseMessage){
      const intervalID = setInterval(() => {
        authCtx.SetApiResponseMessage(null)
      }, 5000);
      return () => clearInterval(intervalID)
    }
  }, [authCtx])

  const onSubmitHandler = (data) => {
    authCtx.login(data.email, data.password);
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
      <section className="bg-white text-black p-[40px] w-full lg:w-3/4 mx-auto mb-20 rounded-xl">
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
          Please fill this form
        </p>

        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-2 w-full md:gap-4 pt-8 justify-center items-center"
        >
          {authCtx.apiResponseMessage && (
          <>
            {authCtx.apiResponseMessage.errors && (
              <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                {authCtx.apiResponseMessage.message.split(":")[2]}
              </p>
            )}

            {!authCtx.apiResponseMessage.errors && (
              <>
              {authCtx.apiResponseMessage.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {authCtx.apiResponseMessage.message}
                </p>
              )}

              {!authCtx.apiResponseMessage.message && (
                <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  Success. Please check your email
                </p>
              )}

              </>
            )}
          </>
        )}
          <div className="flex flex-col gap-2 md:gap-4 w-full lg:w-3/4 lg:px-0">
            <label htmlFor="name" className="text-base md:text-xl ">
              Email* :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg rounded-lg"
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
          <div className="flex flex-col gap-2 md:gap-4 w-full lg:w-3/4 lg:px-0">
            <label htmlFor="password" className="text-base md:text-xl ">
              Password* :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-slate-400 w-full px-3 md:px-5 py-3 text-xs md:text-lg  rounded-lg"
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
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                },
              })}
            />
            {errors.password && errors.password.message && (
              <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full px-2 lg:w-3/4 lg:px-0">
            <Link
              to={"/forgot-pass"}
              className="text-sm md:text-base text-red-primary text-right hover:underline"
            >
              Forget password ?
            </Link>
          </div>
          <div className="px-2 w-full lg:w-1/2 mx-auto mt-2 md:mt-6">
            <button className="button-primary md:text-lg w-full ">
              Log In
            </button>
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
