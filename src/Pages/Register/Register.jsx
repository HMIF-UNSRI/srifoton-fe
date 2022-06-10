import React from "react";
import { Link } from "react-router-dom";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

import uploadIcon from "../../Assets/Icons/upload.svg";

const Register = () => {
  const clickUploadPhotoButton = () => {
    document.getElementById("kpm").click();
  };

  return (
    <div className="bg-[rgb(34,34,34)] bg-ampera bg-center bg-cover bg-repeat-y md:bg-no-repeat w-screen h-full">
      <div className="text-white w-full h-full pt-8 bg-ampera bg-center bg-cover bg-repeat-y md:bg-no-repeat">
        <div className="bg-[url('../public/background/blur.png')] bg-contain w-full h-full bg-repeat-y md:bg-no-repeat md:bg-center">
          <div className="mb-6">
            <p className="text-2xl md:text-4xl text-center">HMIF UNSRI 2022</p>
            <h1 className="text-6xl font-japanese text-center md:text-8xl">
              SRIFOTON
            </h1>
          </div>
          <section className="bg-white text-black p-[40px] w-3/4 mx-auto  ">
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
            <form className="flex flex-col gap-4">
              <div className="flex flex-col w-full gap-4">
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
                    className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg lg:text-xl rounded-lg"
                    placeholder="Enter Your Name Here"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <label
                    htmlFor="nim"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
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
                  <label
                    htmlFor="email"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 md:gap-4">
                  <label
                    htmlFor="kpm"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    KPM* :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div>
                      <div
                        onClick={clickUploadPhotoButton}
                        className="cursor-pointer flex justify-center items-center border border-slate-400 p-2 rounded-xl hover:bg-slate-100 active:bg-slate-200"
                      >
                        <img src={uploadIcon} alt="" />
                        <p className="">Upload Photo</p>
                        <input
                          id="kpm"
                          name="kpm"
                          hidden
                          type="file"
                          accept="image/*,.pdf"
                        />
                        <p></p>
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
                <div className="mx-auto flex flex-col gap-2 md:gap-4">
                  <button className="text-lg text-center bg-red-primary text-white rounded-lg py-3">
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-red-primary font-bold text-base"
                    >
                      Please Login here!
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
