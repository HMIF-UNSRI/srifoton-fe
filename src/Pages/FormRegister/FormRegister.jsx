import React, { useState } from "react";

import Background from "../../Components/Background/Background";
import dashWhite from "../../Assets/Objects/dash-white.svg";
import uploadIcon from "../../Assets/Icons/upload.svg";

import { useForm } from "react-hook-form";

import axios from "axios";

const FormRegister = () => {
  const [teamMember, setTeamMember] = useState(0);
  const [apiResponseMessage, SetApiResponseMessage] = useState(null);

  const [pop, setPop] = useState(null);
  const [kpm1, setKpm1] = useState(null);
  const [kpm2, setKpm2] = useState(null);
  const [kpm3, setKpm3] = useState(null);
  const [kpm4, setKpm4] = useState(null);
  const [kpm5, setKpm5] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
    "https://srifoton.hmifunsri.org/api";

  const onSubmitHandler = async (data) => {
    let responseData;
    try {
      let competition_name = data.competition;
      if (competition_name === "Competitive Programming") {
        competition_name = "CP";
      } else if (competition_name === "Web Development") {
        competition_name = "WEB";
      } else if (competition_name === "UI/UX Design") {
        competition_name = "UI/UX";
      } else {
        competition_name = "ESPORT";
      }

      const response = await axios.post(
        `${baseUrl}/teams`,
        {
          competition: competition_name,
          team_name: encodeURIComponent(data.team_name),
          id_payment: data.id_payment,
          member_1:
            teamMember > 0
              ? {
                  id_kpm: getValues("id_kpm-1"),
                  name: data["name1"],
                  email: data["email1"],
                  no_wa: data["wa1"],
                  nim: data["nim1"],
                  university: data["university1"],
                }
              : null,
          member_2:
            teamMember > 1
              ? {
                  id_kpm: getValues("id_kpm-2"),
                  name: data["name2"],
                  email: data["email2"],
                  no_wa: data["wa2"],
                  nim: data["nim2"],
                  university: data["university2"],
                }
              : null,
          member_3:
            teamMember > 2
              ? {
                  id_kpm: getValues("id_kpm-3"),
                  name: data["name3"],
                  email: data["email3"],
                  no_wa: data["wa3"],
                  nim: data["nim3"],
                  university: data["university3"],
                }
              : null,
          member_4:
            teamMember > 3
              ? {
                  id_kpm: getValues("id_kpm-4"),
                  name: data["name4"],
                  email: data["email4"],
                  no_wa: data["wa4"],
                  nim: data["nim4"],
                  university: data["university4"],
                }
              : null,
          member_5:
            teamMember > 4
              ? {
                  id_kpm: getValues("id_kpm-5"),
                  name: data["name5"],
                  email: data["email5"],
                  no_wa: data["wa5"],
                  nim: data["nim5"],
                  university: data["university5"],
                }
              : null,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      responseData = response.data;
    } catch (error) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      SetApiResponseMessage(error.response.data);
      return error;
    }
    SetApiResponseMessage(responseData);
    return {
      error: data.errors,
      message: data.message,
      code: data.code,
    };
  };

  const teamMemberCount = (e) => {
    setTeamMember(e.target.value);
  };

  const onChangeProofOfPaymentHandler = async (e) => {
    const formData = new FormData();

    formData.append("bp", e.target.files[0]);

    await axios
      .post(`${baseUrl}/uploads/payments`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "multipart/form-data",
        },
      })
      .then(({ data: res }) => {
        setValue("id_payment", res.data.id);
        setPop(e.target.files[0].name);
      })
      .catch((err) => {
      });
  };

  const onChangeCompetitionHandler = (compNumber, e) => {
    document.getElementById(`comp-${compNumber}`).click();
  };

  const onChangeKpmHandler = async (memberNumber, e) => {
    const formData = new FormData();
    formData.append("kpm", e.target.files[0]);

    await axios
      .post(`${baseUrl}/uploads/kpm`, formData)
      .then(({ data: res }) => {
        setValue(`id_kpm-${+memberNumber}`, res.data.id);
        switch (memberNumber) {
          case 1:
            setKpm1(e.target.files[0].name);
            break;
          case 2:
            setKpm2(e.target.files[0].name);
            break;
          case 3:
            setKpm3(e.target.files[0].name);
            break;
          case 4:
            setKpm4(e.target.files[0].name);
            break;
          case 5:
            setKpm5(e.target.files[0].name);
            break;
          default:
            break;
        }
      })
      .catch((err) => {
      });
  };

  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col ">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-white bg-clip-text text-transparent">
          Form Register
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>

      <section className="bg-white text-black w-[90%] lg:w-4/5 mx-auto mb-20 rounded-xl py-8">
        <form onSubmit={handleSubmit(onSubmitHandler)} className="pt-3 w-full w-[90%] lg:w-4/5 mx-auto">
          <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
            Team Data*
          </p>
          {apiResponseMessage && (
            <>
              {apiResponseMessage.errors && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {apiResponseMessage.message.split(":")[2]}
                </p>
              )}

              {!apiResponseMessage.errors && (
                <>
                  {apiResponseMessage.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {apiResponseMessage.message}
                    </p>
                  )}

                  {!apiResponseMessage.message && (
                    <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      Success. Please check your email
                    </p>
                  )}
                </>
              )}
            </>
          )}
          <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Team Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                {...register("team_name", {
                  required: {
                    value: true,
                    message: "Team name is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Team name must be alphabetical",
                  },
                })}
              />
              {errors.email && errors.email.message && (
                <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="kpm" className="text-base md:text-xl ">
                Proof of Payment :
              </label>
              <div className="flex flex-col gap-2">
                <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                  <div
                    onClick={() => document.getElementById("payment").click()}
                    className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                  >
                    <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                    <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                      Upload File
                    </p>
                    <input
                      id="payment"
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={onChangeProofOfPaymentHandler}
                    />
                  </div>
                  <div>
                    <p className="hidden md:block text-sm text-slate-500">
                      Or drop a file
                    </p>
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
                <br></br>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    <b>Account Name</b>
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    <b>Bank Name</b>
                  </span>
                  <span className="text-bold text-xs md:text-sm text-slate-500">
                    <b>Account Number</b>
                  </span>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    DELLIN IRAWAN
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    Bank Mandiri
                  </span>
                  <span className="text-bold text-xs md:text-sm text-slate-500">
                    1100015397265
                  </span>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    LIDIA NURHALIZA
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    Bank Rakyat Indonesia
                  </span>
                  <span className="text-bold text-xs md:text-sm text-slate-500">
                    339001048915534
                  </span>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    FEBIYANTI W
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    Bank Central Asia
                  </span>
                  <span className="text-bold text-xs md:text-sm text-slate-500">
                    1150650875
                  </span>
                </div>
                {pop && (
                  <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                    {pop}
                  </p>
                )}
                {errors.id_payment && errors.id_payment.message && (
                  <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                    {errors.id_payment.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Competition :
              </label>
              <div className="flex flex-col gap-4" onChange={teamMemberCount}>
                {[
                  "Competitive Programming",
                  "Web Development",
                  "UI/UX Design",
                  "E-Sport",
                ].map((value, index) => (
                  <div className="flex gap-2 items-center ">
                    <div
                      className={`w-4 h-4 rounded-full ring-1 ring-red-primary flex justify-center items-center outline-1 outline-blue-400 ${
                        getValues("competition") === value &&
                        `border-4 border-white bg-red-primary transition-all duration-500 ease-in-out`
                      }`}
                      onClick={onChangeCompetitionHandler.bind(null, index)}
                      id={`comp-${index}-buffer`}
                    ></div>
                    <input
                      type="radio"
                      id={`comp-${index}`}
                      value={value}
                      {...register("competition", {
                        required: {
                          value: true,
                          message: "Competition is required",
                        },
                      })}
                      hidden
                    />
                    {errors.competition && errors.competition.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.competition.message}
                      </p>
                    )}
                    <label
                      htmlFor={`comp-${index}`}
                      className="text-xl cursor-pointer"
                    >
                      {value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="team-members" className="text-base md:text-xl">
                Team Member
              </label>
              <div className="flex flex-col gap-4" onChange={teamMemberCount}>
                {getValues("competition") === "E-Sport" ? (<>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-5"
                    value={4}
                  />
                  <label htmlFor="team-5" className="text-xl">
                    Four Member (E-Sport Only)
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-6"
                    value={5}
                  />
                  <label htmlFor="team-6" className="text-xl">
                    Four Member + Substitute Member (E-Sport Only)
                  </label>
                </div>
                </>) : (
                  <>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-1"
                    value={0}
                  />
                  <label htmlFor="team-1" className="text-xl">
                    Solo (Not For E-Sport)
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-2"
                    value={1}
                  />
                  <label htmlFor="team-2" className="text-xl">
                    One Member (Not For E-Sport)
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-3"
                    value={2}
                  />
                  <label htmlFor="team-3" className="text-xl">
                    Two Member (Not For E-Sport)
                  </label>
                </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {teamMember > 0 && (
            <>
              <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
                First Member Data*
              </p>
              <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("name1", {
                      required: {
                        value: true,
                        message: "Member name is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Member name must be alphabetical",
                      },
                    })}
                  />
                  {errors.name1 && errors.name1.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.name1.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    NIM :
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("nim1", {
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
                  {errors.nim1 && errors.nim1.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.nim1.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("email1", {
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
                  {errors.email1 && errors.email1.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.email1.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    University :
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("university1", {
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
                  {errors.university1 && errors.university1.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.university1.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="kpm" className="text-base md:text-xl ">
                    KPM :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                      <div
                        onClick={() => document.getElementById("kpm-1").click()}
                        className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                      >
                        <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                        <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                          Upload File
                        </p>
                        <input
                          id="kpm-1"
                          name="kpm-1"
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={onChangeKpmHandler.bind(null, 1)}
                        />
                      </div>
                      <div>
                        <p className="hidden md:block text-sm text-slate-500">
                          Or drop a file
                        </p>
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
                    {kpm1 && (
                      <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {kpm1}
                      </p>
                    )}
                    {errors.kpm1 && errors.kpm1.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.kpm1.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    No Wa :
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("wa1", {
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
                  {errors.wa1 && errors.wa1.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.wa1.message}
                    </p>
                  )}
                </div>
              </section>
            </>
          )}

          {teamMember > 1 && (
            <>
              <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
                Second Member Data*
              </p>
              <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("name2", {
                      required: {
                        value: true,
                        message: "Member name is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Member name must be alphabetical",
                      },
                    })}
                  />
                  {errors.name2 && errors.name2.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.name2.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    NIM :
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("nim2", {
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
                  {errors.nim2 && errors.nim2.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.nim2.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("email2", {
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
                  {errors.email2 && errors.email2.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.email2.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    University :
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("university2", {
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
                  {errors.university2 && errors.university2.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.university2.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="kpm" className="text-base md:text-xl ">
                    KPM :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => document.getElementById("kpm-2").click()}
                      className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl "
                    >
                      <div className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg">
                        <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                        <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                          Upload File
                        </p>
                        <input
                          id="kpm-2"
                          name="kpm-2"
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={onChangeKpmHandler.bind(null, 2)}
                        />
                      </div>
                      <div>
                        <p className="hidden md:block text-sm text-slate-500">
                          Or drop a file
                        </p>
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
                    {kpm2 && (
                      <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {kpm2}
                      </p>
                    )}
                    {errors.kpm2 && errors.kpm2.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.kpm2.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    No Wa :
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("wa2", {
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
                  {errors.wa2 && errors.wa2.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.wa2.message}
                    </p>
                  )}
                </div>
              </section>
            </>
          )}

          {teamMember > 2 && (
            <>
              <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
                Third Member Data*
              </p>
              <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("name3", {
                      required: {
                        value: true,
                        message: "Member name is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Member name must be alphabetical",
                      },
                    })}
                  />
                  {errors.name3 && errors.name3.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.name3.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    NIM :
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("nim3", {
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
                  {errors.nim3 && errors.nim3.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.nim3.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("email3", {
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
                  {errors.email3 && errors.email3.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.email3.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    University :
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("university3", {
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
                  {errors.university3 && errors.university3.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.university3.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="kpm" className="text-base md:text-xl ">
                    KPM :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => document.getElementById("kpm-3").click()}
                      className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl "
                    >
                      <div className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg">
                        <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                        <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                          Upload File
                        </p>
                        <input
                          id="kpm-3"
                          name="kpm-3"
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={onChangeKpmHandler.bind(null, 3)}
                        />
                      </div>
                      <div>
                        <p className="hidden md:block text-sm text-slate-500">
                          Or drop a file
                        </p>
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
                    {kpm3 && (
                      <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {kpm3}
                      </p>
                    )}
                    {errors.kpm3 && errors.kpm3.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.kpm3.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    No Wa :
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("wa3", {
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
                  {errors.wa3 && errors.wa3.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.wa3.message}
                    </p>
                  )}
                </div>
              </section>
              <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
                Fourth Member Data*
              </p>
              <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("name4", {
                      required: {
                        value: true,
                        message: "Member name is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Member name must be alphabetical",
                      },
                    })}
                  />
                  {errors.name4 && errors.name4.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.name4.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    NIM :
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("nim4", {
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
                  {errors.nim4 && errors.nim4.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.nim4.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("email4", {
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
                  {errors.email4 && errors.email4.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.email4.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    University :
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("university4", {
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
                  {errors.university4 && errors.university4.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.university4.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="kpm" className="text-base md:text-xl ">
                    KPM :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => document.getElementById("kpm-4").click()}
                      className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl "
                    >
                      <div className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg">
                        <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                        <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                          Upload File
                        </p>
                        <input
                          id="kpm-4"
                          name="kpm-4"
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={onChangeKpmHandler.bind(null, 4)}
                        />
                      </div>
                      <div>
                        <p className="hidden md:block text-sm text-slate-500">
                          Or drop a file
                        </p>
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
                    {kpm4 && (
                      <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {kpm4}
                      </p>
                    )}
                    {errors.kpm4 && errors.kpm4.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.kpm4.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    No Wa :
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("wa4", {
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
                  {errors.wa4 && errors.wa4.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.wa4.message}
                    </p>
                  )}
                </div>
              </section>
            </>
          )}

          {teamMember > 4 && (
            <>
              <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
                Substitute Member Data*
              </p>
              <section className="bg-gray-100 text-black p-[20px] mb-20 rounded-xl">
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("name5", {
                      required: {
                        value: true,
                        message: "Member name is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: "Member name must be alphabetical",
                      },
                    })}
                  />
                  {errors.name5 && errors.name5.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.name5.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    NIM :
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("nim5", {
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
                  {errors.nim5 && errors.nim5.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.nim5.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="name" className="text-base md:text-xl ">
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("email5", {
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
                  {errors.email5 && errors.email5.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.email5.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    University :
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("university5", {
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
                  {errors.university5 && errors.university5.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.university5.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="kpm" className="text-base md:text-xl ">
                    KPM :
                  </label>
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => document.getElementById("kpm-5").click()}
                      className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl "
                    >
                      <div className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg">
                        <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                        <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                          Upload File
                        </p>
                        <input
                          id="kpm-5"
                          name="kpm-5"
                          hidden
                          type="file"
                          accept="image/*"
                          onChange={onChangeKpmHandler.bind(null, 5)}
                        />
                      </div>
                      <div>
                        <p className="hidden md:block text-sm text-slate-500">
                          Or drop a file
                        </p>
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
                    {kpm5 && (
                      <p className="text-white bg-green-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {kpm5}
                      </p>
                    )}
                    {errors.kpm5 && errors.kpm5.message && (
                      <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                        {errors.kpm5.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 mb-10">
                  <label htmlFor="University" className="text-base md:text-xl ">
                    No Wa :
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    {...register("wa5", {
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
                  {errors.wa5 && errors.wa5.message && (
                    <p className="text-white bg-red-600 px-2 py-1 rounded-lg text-xs md:text-lg">
                      {errors.wa5.message}
                    </p>
                  )}
                </div>
              </section>
            </>
          )}

          <div>
            <button className="button-primary mx-auto w-full">Save</button>
          </div>
        </form>
      </section>
    </Background>
  );
};

export default FormRegister;
