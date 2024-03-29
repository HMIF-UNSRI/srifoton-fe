import React, { useEffect, useState } from "react";

import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import activeIcon from "../../Assets/Icons/active.svg";

import axios from "axios";

const Team = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState();
  const [teamCompetition, setTeamCompetition] = useState();
  const [isVerified, setIsVerified] = useState();
  const [members, setMembers] = useState();
  const [isHaveTeam, SetIsHaveTeam] = useState(true);

  const baseUrl =
    (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
    "https://srifoton.hmifunsri.org/api";

  useEffect(() => {
    setIsLoading(true);
    SetIsHaveTeam(true);
    axios
      .get(`${baseUrl}/teams`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data: res }) => {
        const team = res.data;
        setIsVerified(team.is_verified);
        setTeamName(decodeURIComponent(team.team_name));
        setTeamCompetition(team.competition);
        setMembers(team.members);
        setIsLoading(false);
      })
      .catch(() => {
        SetIsHaveTeam(false);
      });
  }, [baseUrl]);

  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 text-white">
          Profil Tim
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      {!isLoading ? (
        <form className="w-full lg:w-3/4 mx-auto rounded-xl bg-white ">
          <section className="text-black p-[40px] w-full mx-auto rounded-xl">
            <div className="bg-gray-100 text-black p-[20px] rounded-xl">
              <div className="flex flex-col gap-2 md:gap-4 mb-10">
                <label htmlFor="name" className="text-base md:text-xl ">
                  Team Name :
                </label>
                <div
                  type="text"
                  id="name"
                  name="name"
                  className="border text-center flex justify-center items-center focus:outline-red-primary border-red-secondary bg-gradient-to-br from-red-primary to-red-secondary bg-clip-text text-base md:text-2xl text-transparent w-full px-3 md:px-4 py-1 md:py-2 rounded-lg"
                  disabled
                >
                  {teamName}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 mb-10">
                <label htmlFor="name" className="text-base md:text-xl ">
                  Competition Participated :
                </label>
                <div
                  type="text"
                  id="name"
                  name="name"
                  className="border text-center flex justify-center items-center focus:outline-red-primary border-red-secondary bg-gradient-to-br from-red-primary to-red-secondary bg-clip-text text-base md:text-2xl text-transparent w-full px-3 md:px-4 py-1 md:py-2 rounded-lg"
                  disabled
                >
                  {teamCompetition}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 mb-10">
                <label htmlFor="name" className="text-base md:text-xl ">
                  Status :
                </label>
                <div
                  type="text"
                  id="name"
                  name="name"
                  disabled
                  className={`border flex gap-2 justify-center items-center text-center focus:outline-red-primary border-red-secondary ${
                    isVerified ? "text-green-700" : "text-red-700"
                  } font-bold w-full px-3 md:px-4 py-1 md:py-2 text-base md:text-2xl rounded-lg`}
                >
                  <p>{isVerified ? "Verified" : "Unverified"}</p>
                  {isVerified && (
                    <img src={activeIcon} alt="active" className="w-4 md:w-6" />
                  )}
                </div>
              </div>
            </div>
          </section>
          {members &&
            members.map((member, index) => (
              <section className="text-black p-[40px] w-full mx-auto rounded-xl">
                <p className="focus:outline-red-primary border-red-secondary bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-4 text-xl">
                  {`${
                    index === 0
                      ? "First"
                      : index === 1
                      ? "Second"
                      : index === 2
                      ? "Third"
                      : index === 3
                      ? "Fourth"
                      : "Substitute"
                  }`}{" "}
                  Member data
                </p>
                <div className="bg-gray-100 text-black p-[20px] rounded-xl">
                  <div className="flex flex-col gap-2 md:gap-4 mb-10">
                    <label htmlFor="name" className="text-base md:text-xl ">
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={member.name}
                      disabled
                      className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 mb-10">
                    <label htmlFor="nim" className="text-base md:text-xl ">
                      NIM :
                    </label>
                    <input
                      type="text"
                      id="nim"
                      name="nim"
                      value={member.nim}
                      disabled
                      className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 mb-10">
                    <label htmlFor="email" className="text-base md:text-xl ">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={member.email}
                      disabled
                      className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 mb-10">
                    <label
                      htmlFor="university"
                      className="text-base md:text-xl "
                    >
                      University :
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={member.university}
                      disabled
                      className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 mb-10">
                    <label htmlFor="phone" className="text-base md:text-xl ">
                      No Wa :
                    </label>
                    <input
                      type="text"
                      id="no_wa"
                      name="np_wa"
                      value={member.no_wa}
                      disabled
                      className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                    />
                  </div>
                </div>
              </section>
            ))}
        </form>
      ) : isHaveTeam ? (
        <>
          <p className="bg-white text-center mx-auto w-1/2">Loading...</p>
        </>
      ) : (
        <>
          <p className="bg-white text-center mx-auto w-1/2">
            You Don't Have A Team
          </p>
        </>
      )}
    </Background>
  );
};

export default Team;
