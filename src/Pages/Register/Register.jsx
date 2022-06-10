import React from "react";
import { Link } from "react-router-dom";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

import uploadIcon from "../../Assets/Icons/upload.svg";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";
import Button from "../../Components/Button/Button";

const Register = () => {
  const clickUploadPhotoButton = () => {
    document.getElementById("kpm").click();
  };

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
      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20">
        <div className="relative w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
          <img src={dashTop} alt="dash-top" className="absolute top-0 left-0" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
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
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 lg:flex-row pt-8"
        >
          <div className="flex flex-col gap-4 lg:w-1/2 lg:pr-2 lg:border-r-[3px] lg:border-r-red-secondary">
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="name" className="text-lg md:text-xl lg:text-2xl">
                Name* :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="nim" className="text-lg md:text-xl lg:text-2xl">
                Nim* :
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
                placeholder="Enter Your Nim Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="email" className="text-lg md:text-xl lg:text-2xl">
                Email* :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label
                htmlFor="password"
                className="text-lg md:text-xl lg:text-2xl"
              >
                Password* :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
                placeholder="Enter Your Password Here"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2 ">
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="kpm" className="text-lg md:text-xl lg:text-2xl">
                KPM* :
              </label>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border border-slate-400 p-2 lg:py-14 rounded-xl ">
                    <div
                      onClick={clickUploadPhotoButton}
                      className="flex gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                    >
                      <img className="w-8" src={uploadIcon} alt="" />
                      <p className="lg:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                        Upload File
                      </p>
                      <input
                        id="kpm"
                        name="kpm"
                        hidden
                        type="file"
                        accept="image/*,.pdf"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Or drop a file</p>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-slate-500">maks 2 mb*</span>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label
                  htmlFor="whatsapp"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Whatsapp Number* :
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
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
    </AmperaBackground>
  );
};

export default Register;
