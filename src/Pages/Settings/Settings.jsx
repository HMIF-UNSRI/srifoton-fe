import React, { useEffect, useState } from "react";

import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import { useForm } from "react-hook-form";

import axios from "axios";

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();

  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
    "http://localhost:8000/api";

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data: res }) => {
        const { user } = res.data;
        setValue("name", user.name);
        setValue("no_wa", user.no_wa);
        setValue("university", user.university);
        setValue("nim", user.nim);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl, setValue]);

  const onSubmitHandler = (data) => {
    axios.put(`${baseUrl}/users` , data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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
      <section className="bg-white text-black p-[40px] w-full lg:w-3/4 mx-auto mb-20 rounded-xl">
        {!isLoading && (
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-4 lg:flex-row pt-8"
          >
            <div className="flex flex-col gap-4 lg:w-1/2 lg:pr-2 lg:border-r-[3px] lg:border-r-red-secondary">
              <h2 className="text-center text-lg md:text-2xl lg:text-3xl mb-4">
                Personal Data
              </h2>
              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="name" className="text-lg md:text-xl ">
                  Name* :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-slate-400 w-full  px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
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
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.name.message}
                  </p>
                )}
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
                  {...register("nim", {
                    required: {
                      value: true,
                      message: "Nim is required",
                    },
                    pattern: {
                      value: /^[0-9]{7,16}$/,
                      message: "Nim must be 7 - 16 digits",
                    },
                  })}
                />
                {errors.nim && errors.nim.message && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.nim.message}
                  </p>
                )}
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
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="university" className="text-lg md:text-xl ">
                  University* :
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
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
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.university.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="phone" className="text-lg md:text-xl ">
                  Whatsapp Number
                </label>
                <input
                  type="text"
                  id="no_wa"
                  name="no_wa"
                  className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                  {...register("no_wa", {
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
                {errors.no_wa && errors.no_wa.message && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {errors.no_wa.message}
                  </p>
                )}
              </div>
              <div className="flex gap-7 justify-center items-center">
                <button type="reset" className="button-secondary w-1/3">
                  Reset
                </button>
                <button type="submit" className="button-primary w-1/3">
                  Submit
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 ">
              <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-center text-lg md:text-2xl lg:text-3xl mb-4">
                  Change Password
                </h2>
                <div className="flex flex-col gap-2 md:gap-4">
                  <label htmlFor="oldPassword" className="text-lg md:text-xl ">
                    Old Password* :
                  </label>
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg  rounded-lg"
                    {...register("old_password", {
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
                  {errors.old_password && errors.old_password.message && (
                    <p className="text-red-500 text-xs md:text-sm">
                      {errors.old_password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <label htmlFor="newPassword" className="text-lg md:text-xl ">
                    New Password* :
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="border border-slate-400 w-full px-3 md:px-5 py-3 text-sm md:text-lg rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-7 justify-center items-center">
                <button type="reset" className="button-secondary w-1/3">
                  Reset
                </button>
                <button type="submit" className="button-primary w-1/3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </section>
    </Background>
  );
};

export default Settings;
