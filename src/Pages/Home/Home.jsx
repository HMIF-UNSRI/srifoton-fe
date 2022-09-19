import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import dashTop from "../../Assets/Objects/dash-white.svg";
import dashBot from "../../Assets/Objects/dash-white.svg";
import { competitions } from "../../StaticData/Data";
import { sponsors } from "../../StaticData/Data";

const Home = () => {
  return (
    <div
      className={`bg-[rgb(34,34,34)] w-screen min-h-screen h-full bg-center bg-cover bg-no-repeat`}
    >
      <Navbar />
      <div className="bg-ampera">
        <div className="bg-[url('../public/background/blur.png')] flex flex-col items-center min-h-screen text-white py-10 bg-contain bg-no-repeat md:bg-center shadow-inner">
          <p className="text-white font-bold text-center mt-24 mb-0 text-3xl">
            HMIF UNSRI 2022
          </p>
          <p className="text-6xl md:text-7xl lg:text-8xl font-japanese text-center mb-3 text-white">
            SRIFOTON
          </p>
          <p className="text-xl text-center px-2 w-full md:w-3/4 text-white">
            Sriwijaya Informatics Exhibition atau yang biasa dikenali dengan
            Srifoton adalah forum kompetitif berskala nasional yang mewadahi
            mahasiswa untuk menyalurkan minat dan bakat mereka dalam dunia
            industri teknologi. Event ini memiliki dua acara yaitu Perlombaan
            dan Seminar
          </p>
          <a
            className="font-bold transition-all duration-150 bg-red-primary mt-12 z-10 border-[#ff6107] shadow-lg shadow-[#ff610769] text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-7 py-3 rounded-full"
            href="/competition"
          >
            View the Competition
          </a>
          <img
            src="/background/maskot.png"
            alt="Mascot"
            className="mt-4 md:mt-0 xl:-mt-24 mb-12 z-0"
          />
        </div>
      </div>
      <div className="bg-[url('../public/background/maskg2.png')] px-12 py-24 w-full h-fit-content text-white bg-cover bg-no-repeat md:bg-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[20%] pb-2 md:pb-12">
            <img src={dashTop} alt="dash-top" className="self-start" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
              ABOUT US
            </h2>
            <img src={dashBot} alt="dash-bot" className="self-end" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:px-52 xl:px-72">
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            Sriwijaya Informatics Exhibiion atau yang biasa dikenali dengan
            Srifoton adalah forum kompetitif berskala nasional yang mewadahi
            mahasiswa untuk menyalurkan minat dan bakat mereka dalam dunia
            industri teknologi. Event ini memiliki dua acara yaitu Perlombaan
            dan Seminar
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            Ajang kompetitif yang disediakan adalah Competitive Programming,
            UI/UX Competition, Web Development, dan E-Sport Competition. Seminar
            yang diadakan membawa topik utama di bidang teknologi dan kesehatan
            mental.
          </p>
        </div>
      </div>
      <div className="bg-[url('../public/background/blur.png')] min-h-screen py-10 bg-contain bg-no-repeat md:bg-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[25%] mt-12 pt-5 pb-2 md:pt-24 md:pb-12">
            <img src={dashTop} alt="dash-top" className="self-start" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
              COMPETITION
            </h2>
            <img src={dashBot} alt="dash-bot" className="self-end" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-full gap-12 px-12 lg:px-60 xl:px-80 pb-10">
          {competitions.map((competition) => {
            return (
              <div className="group flex flex-col justify-center items-center gap-4">
                <div className="flex justify-start items-end w-full h-[400px] gap-6">
                  <div className="bg-[linear-gradient(0.41deg,_#1B1919_-8.48%,_#1B1919_185.48%)] group-hover:bg-[linear-gradient(0.41deg,_#1B1919_-8.48%,_#C40018_185.48%)] w-full h-full rounded-xl flex justify-center items-center">
                    <img
                      src={competition.image}
                      className="w-[400px]"
                      alt="cp"
                    />
                  </div>
                </div>
                <div className="text-white w-full flex flex-col justify-start gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-[#ff6107]">Race Branch</p>
                    <h2 className="text-2xl text-red-primary-semibold">
                      {competition.title}
                    </h2>
                    <p className="text-lg text-white">{competition.desc}</p>
                  </div>
                  <div>
                    <a
                      className="font-bold transition-all duration-150 bg-red-primary w-fit z-10 border-[#ff6107] shadow-lg shadow-[#ff610769] text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-7 py-3 rounded-full"
                      // href={authCtx.userData ? `/competition/${competition.link}` : "/login"}
                      href={`/competition/${competition.link}`}
                    >
                      View the Competition
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[25%] mt-12 pt-5 pb-2 md:pt-24 md:pb-12">
            <img src={dashTop} alt="dash-top" className="self-start" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
              SPONSORSHIP
            </h2>
            <img src={dashBot} alt="dash-bot" className="self-end" />
          </div>
        </div>
        <div className="w-full px-3 lg:px-24 xl:px-80 flex flex-col gap-5">
          <div className="w-full flex flex-row gap-5 justify-center items-center flex-wrap border-4 rounded-xl p-4 md:p-12 border-[#ff6107]">
            {sponsors.xl.length !== 0 &&
              sponsors.xl.map((str) => (
                <div className="relative bg-white overflow-clip h-[190px] rounded-xl p-3">
                  <img src={str} alt="" className="h-[150px] w-auto" />
                  {/* <p className="absolute bottom-2 right-2 rounded-full w-fit bg-red-primary text-white font-redrose font-bold px-4 py-1 text-xs">
                    XL
                  </p> */}
                </div>
              ))}
            {sponsors.lg.length !== 0 &&
              sponsors.lg.map((str) => (
                <div className="relative bg-white overflow-clip h-[165px] rounded-xl p-3">
                  <img src={str} alt="" className="h-[125px] w-auto" />
                  {/* <p className="absolute bottom-2 right-2 rounded-full w-fit bg-red-primary text-white font-redrose font-bold px-4 py-1 text-xs">
                    LG
                  </p> */}
                </div>
              ))}
            {sponsors.md.length !== 0 &&
              sponsors.md.map((str) => (
                <div className="relative bg-white overflow-clip h-[140px] rounded-xl p-3">
                  <img src={str} alt="" className="h-[100px] w-auto" />
                  {/* <p className="absolute bottom-2 right-2 rounded-full w-fit bg-red-primary text-white font-redrose font-bold px-4 py-1 text-xs">
                    MD
                  </p> */}
                </div>
              ))}
            {sponsors.sm.length !== 0 &&
              sponsors.sm.map((str) => (
                <div className="relative bg-white overflow-clip h-[120px] rounded-xl p-3">
                  <img src={str} alt="" className="h-[80px] w-auto" />
                  {/* <p className="absolute bottom-2 right-2 rounded-full w-fit bg-red-primary text-white font-redrose font-bold px-4 py-1 text-xs">
                    SM
                  </p> */}
                </div>
              ))}
            {sponsors.xs.length !== 0 &&
              sponsors.xs.map((str) => (
                <div className="relative bg-white overflow-clip h-[100px] rounded-xl p-3">
                  <img src={str} alt="" className="h-[60px] w-auto" />
                  {/* <p className="absolute bottom-2 right-2 rounded-full w-fit bg-red-primary text-white font-redrose font-bold px-4 py-1 text-xs">
                    XS
                  </p> */}
                </div>
              ))}
          </div>
        </div>
        <div className="bg-[url('../public/background/maskg1.png')] px-12 mt-[120px] w-full h-fit-content py-2 text-white bg-cover bg-no-repeat md:bg-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[30%]">
              <img src={dashTop} alt="dash-top" className="self-start" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                SRIFOTON WEBINAR
              </h2>
              <img src={dashBot} alt="dash-bot" className="self-end" />
            </div>
          </div>
        </div>
        <div className="w-full py-24 flex flex-row items-center justify-center px-3 lg:px-24 xl:px-80">
          <img src="/background/speakers.png" className="w-[700px]" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
