import React, { useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

import uploadIcon from "../../Assets/Icons/upload.svg";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import { useForm } from "react-hook-form";

import AuthContext from "../../Contexts/AuthContext";

const Register = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const authCtx = useContext(AuthContext);

  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api/users`) ||
    "http://localhost:8000/api/users";

  const onChangeUploadHandler = (e) => {
    const formData = new FormData();

    formData.append("kpm", e.target.files[0]);

    axios
      .post(`${baseUrl}/uploads/kpm`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setValue("kpm", res.data.data.id);
      });
  };

  const clickUploadPhotoButton = () => {
    document.getElementById("kpm").click();
  };

  const onSubmitHandler = (data) => {
    authCtx.register(
      getValues("kpm"),
      data.name,
      data.nim,
      data.email,
      data.password,
      data.whatsappNumber,
      data.university
    );
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
      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20 rounded-xl">
        <div className="relative w-full md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
          <img src={dashTop} alt="dash-top" className="absolute top-0 left-0" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
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
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-4 lg:flex-row pt-8"
        >
          <div className="flex flex-col gap-4 lg:w-1/2 lg:pr-2 lg:border-r-[3px] lg:border-r-red-secondary">
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="name" className="text-base md:text-xl ">
                Name* :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Name"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="nim" className="text-base md:text-xl">
                Nim* :
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Nim"
                {...register("nim")}
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="email" className="text-base md:text-xl ">
                Email* :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Email"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="password" className="text-base md:text-xl ">
                Password* :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Password"
                {...register("password")}
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="password" className="text-base md:text-xl ">
                Universitas* :
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Password"
                {...register("university")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2 ">
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="kpm" className="text-base md:text-xl ">
                KPM* :
              </label>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                    <div
                      onClick={clickUploadPhotoButton}
                      className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                    >
                      <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                      <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                        Upload File
                      </p>
                      <input
                        id="kpm"
                        name="kpm"
                        hidden
                        type="file"
                        accept="image/*,.pdf"
                        onChange={onChangeUploadHandler}
                      />
                    </div>
                    <div>
                      <p className="hidden md:block text-sm text-slate-500">
                        Or drop a file
                      </p>
                    </div>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-slate-500">
                  maks 2 mb*
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label htmlFor="whatsapp" className="text-base md:text-xl ">
                Whatsapp Number* :
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Whatsapp Here"
                {...register("whatsappNumber")}
              />
            </div>
            <div className="mx-auto flex flex-col md:mt-[4.5rem] gap-2 md:gap-4 lg:gap-8 justify-center ">
              <button className="button-primary md:text-lg w-full">
                Sign Up
              </button>
              <p className="text-xs md:text-base">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-red-primary hover:text-red-primary-semibold active:text-red-primary-bold hover:underline font-bold text-xs md:text-base"
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
