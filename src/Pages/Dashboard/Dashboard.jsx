import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import dashWhite from "../../Assets/Objects/dash-white.svg";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";

const baseUrl =
  (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
  "https://srifoton.hmifunsri.org/api";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState();
  const [teamCompetition, setTeamCompetition] = useState();
  // eslint-disable-next-line
  const [isVerified, setIsVerified] = useState();
  // eslint-disable-next-line
  const [hasCompetition, setHasCompetition] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/teams`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data: res }) => {
        setIsLoading(false);
        const team = res.data;
        setIsVerified(team.is_verified);
        setTeamName(decodeURIComponent(team.team_name));
        setTeamCompetition(team.competition);
        if (isLoading === true) {
          setHasCompetition(true);
        }
      });
  }, [isLoading]);

  return (
    <div
      className={`bg-[rgb(34,34,34)] w-screen min-h-screen h-full bg-center bg-cover bg-no-repeat`}
    >
      <Navbar />
      <div className="bg-[url('../public/background/blur.png')] flex flex-col justify-center items-center gap-12">
        <div className="w-full flex flex-row gap-5 justify-center items-center flex-wrap px-5 my-24 md:px-24 lg:px-48 xl:px-96">
          <div className="z-[1] bg-red-primary w-full border-4 rounded-xl px-5 py-2 border-[#ff6107] shadow-lg">
            <div className="relative my-8 w-4/5 md:w-2/3 lg:w-1/2 mx-auto flex flex-col">
              <img
                src={dashWhite}
                alt="dash-top"
                className="absolute top-0 left-60"
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl  font-japanese text-center my-3 text-white">
                SELAMAT DATANG {authCtx.userData.name}
              </h2>
              <img
                src={dashWhite}
                alt="dash-bot"
                className="absolute bottom-0 right-60"
              />
            </div>
          </div>
          <img
            src="/background/ornament.png"
            alt="img"
            className="-mt-32 z-[0]"
          />
          <div className="bg-transparent w-full border-4 min-h-[250px] flex rounded-xl px-5 py-2 border-[#ff6107] mt-24 justify-center items-center">
            <div className="relative w-full flex flex-row justify-center items-center">
              {isLoading ? (
                <div className="flex flex-col gap-5">
                  <p className="text-red-secondary opacity-90">
                    Kamu belum mengikuti kompetisi
                  </p>
                  <Link
                    className="button-primary py-3 px-8 mb-10"
                    to="/competition"
                  >
                    Ikuti Kompetisi
                  </Link>
                </div>
              ) : (
                <div className="w-full p-5 rounded-xl bg-primary-dark-main flex flex-col gap-5">
                  <p className="bg-red-primary px-5 py-3 font-bold text-center uppercase text-2xl rounded-lg text-white w-full">
                    {teamName}
                  </p>
                  <p className="text-center text-white">Competition Name:</p>
                  <p className="text-center bg-[#222222] text-white rounded-xl px-5 py-3 text-xl w-full">
                    {teamCompetition}
                  </p>
                  <Link className="button-primary py-3 px-8" to="/team">
                    Lihat Detail Pembayaran
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[url('../public/background/maskg1.png')] px-12 mt-10 w-full h-fit-content py-2 text-white bg-cover bg-no-repeat md:bg-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%]">
              <img src={dashWhite} alt="dash-top" className="self-start" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                SRIFOTON WEBINAR
              </h2>
              <img src={dashWhite} alt="dash-bot" className="self-end" />
            </div>
          </div>
        </div>
        <div className="w-full py-24 flex flex-row items-center justify-center px-3 lg:px-24 xl:px-80">
          <img src="/background/placeholder.png" className="w-[700px]" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
