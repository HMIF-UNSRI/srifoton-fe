import React, { useState } from "react";

import Background from "../../Components/Background/Background";
import dashWhite from "../../Assets/Objects/dash-white.svg";
import uploadIcon from "../../Assets/Icons/upload.svg";

import { useForm } from "react-hook-form";

import axios from "axios";

const FormRegister = () => {
  const [teamMember, setTeamMember] = useState(0);

  const { register, handleSubmit, setValue, getValues } = useForm();

  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api/users`) ||
    "http://localhost:8000/api/users";

  const onSubmitHandler = async (data) => {
    let res;
    try {
      res = await axios.post(baseUrl, {
        competition: data.competition,
        team_name: data.team_name,
        id_payment: data.id_payment,
        member_1: {
          id_kpm: getValues("id_kpm-1"),
          name: data["name-1"],
          email: data["email-1"],
          no_wa: data["wa-1"],
          nim: data["nim-1"],
          university: data["university-1"],
          id_payment: data["id_payment-1"],
        },
        member_2: {
          id_kpm: getValues("id_kpm-2"),
          name: data["name-2"],
          email: data["email-2"],
          no_wa: data["wa-2"],
          nim: data["nim-2"],
          university: data["university-2"],
          id_payment: data["id_payment-2"],
        },
      });
    } catch (error) {
      return console.log(error);
    }
    console.log(res);
  };

  const teamMemberCount = (e) => {
    setTeamMember(e.target.value);
  };

  const onChangeProofOfPaymentHandler = async (e) => {
    const formData = new FormData();
    formData.append("bp", e.target.files[0]);

    await axios
      .post(`${baseUrl}/uploads/bp`, formData)
      .then(({ data: res }) => {
        setValue("id_payment", res.data.id);
      })
      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
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

      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20 rounded-xl">
        <form onSubmit={handleSubmit(onSubmitHandler)} className="pt-3">
          <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
            Team Data*
          </p>
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
                {...register("team_name")}
              />
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
                      accept="image/*,.pdf"
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
                  <span className="text-xs md:text-sm text-slate-500">
                    jpg, jpeg, png, and pdf only
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    max 2MB*
                  </span>
                </div>
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
                      {...register("competition")}
                      hidden
                    />
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
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="team-members"
                    id="team-1"
                    value={0}
                  />
                  <label htmlFor="team-1" className="text-xl">
                    Solo
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
                    One Team Member
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
                    Two Team Member
                  </label>
                </div>
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
                    {...register("name-1")}
                  />
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
                    {...register("nim-1")}
                  />
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
                    {...register("email-1")}
                  />
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
                    {...register("university-1")}
                  />
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
                          accept="image/*,.pdf"
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
                      <span className="text-xs md:text-sm text-slate-500">
                        jpg, jpeg, png, and pdf only
                      </span>
                      <span className="text-xs md:text-sm text-slate-500">
                        max 2MB*
                      </span>
                    </div>
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
                    {...register("wa-1")}
                  />
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
                    {...register("name-2")}
                  />
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
                    {...register("nim-2")}
                  />
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
                    {...register("email-2")}
                  />
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
                    {...register("university-2")}
                  />
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
                          accept="image/*,.pdf"
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
                      <span className="text-xs md:text-sm text-slate-500">
                        jpg, jpeg, png, and pdf only
                      </span>
                      <span className="text-xs md:text-sm text-slate-500">
                        max 2MB*
                      </span>
                    </div>
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
                    {...register("wa-2")}
                  />
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
