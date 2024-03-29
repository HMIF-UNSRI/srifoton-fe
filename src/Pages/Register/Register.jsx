import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import dashTop from "../../Assets/Objects/dash-top.svg";
import dashBot from "../../Assets/Objects/dash-bot.svg";

import uploadIcon from "../../Assets/Icons/upload.svg";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import { useForm } from "react-hook-form";

import AuthContext from "../../Contexts/AuthContext";

const Register = () => {
  const [fileName, setFileName] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (authCtx.apiResponseMessage) {
      const intervalID = setInterval(() => {
        authCtx.SetApiResponseMessage(null);
      }, 5000);
      return () => clearInterval(intervalID);
    }
  }, [authCtx]);
  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
    "https://srifoton.hmifunsri.org/api";

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
        setFileName(e.target.files[0].name);
      })
      .catch((err) => {
        errors.kpm = {
          message: "Failed to upload KPM",
        };
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
      <section className="bg-white text-black p-[40px] w-[90%] lg:w-3/4 mx-auto mb-20 rounded-xl">
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
        <p className="text-sm md:text-base  text-center mt-4">
          please fill this form
        </p>
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
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Name must be alphabetical",
                  },
                })}
              />
              {errors.name && errors.name.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.name.message}
                </p>
              )}
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
                {...register("nim", {
                  required: {
                    value: true,
                    message: "Nim is required",
                  },
                  pattern: {
                    value: /^[0-9]{6,20}$/,
                    message: "Nim must be 6 - 20 digits",
                  },
                })}
              />
              {errors.nim && errors.nim.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.nim.message}
                </p>
              )}
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
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email must be valid",
                  },
                })}
              />
              {errors.email && errors.email.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.email.message}
                </p>
              )}
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
                placeholder="8-16 characters. Must contain one uppercase and one number."
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
                    value: 16,
                    message: "Password must be less than 16 characters",
                  },
                })}
              />
              {errors.password && errors.password.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.password.message}
                </p>
              )}
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
                {...register("university", {
                  required: {
                    value: true,
                    message: "University is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "University must be alphabetical",
                  },
                })}
              />
              {errors.university && errors.university.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.university.message}
                </p>
              )}
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
                        accept="image/*"
                        onChange={onChangeUploadHandler}
                      />
                    </div>
                    <div>
                      <p className="hidden md:block text-sm text-slate-500">
                        Upload File Here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-red-500 font-bold">
                    jpg, jpeg, and png only
                  </span>
                  <span className="text-xs md:text-sm text-red-500 font-bold">
                    max 2MB*
                  </span>
                </div>
              </div>
              {fileName && (
                <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {fileName}
                </p>
              )}
              {errors.kpm && errors.kpm.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.kpm.message}
                </p>
              )}
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
                {...register("whatsappNumber", {
                  required: {
                    value: true,
                    message: "Whatsapp Number is required",
                  },
                  pattern: {
                    value: /^[0-9]{10,20}$/,
                    message: "Whatsapp Number must be 10 digits",
                  },
                })}
              />
              {errors.whatsappNumber && errors.whatsappNumber.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.whatsappNumber.message}
                </p>
              )}
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
