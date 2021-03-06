import React, { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import dashTop from "../../Assets/Objects/dash-white.svg";
import dashBot from "../../Assets/Objects/dash-white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { competitions } from "../../StaticData/Data";
import { sponsors } from "../../StaticData/Data";

const Home = () => {
  const authCtx = useContext(AuthContext);
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            laborum voluptate aut laudantium tempora accusamus atque illum
            ipsum, ipsam quasi, at explicabo itaque! Veritatis rem magnam hic?
            Cum, delectus deserunt? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab debitis inventore quaerat voluptatibus beatae a
            libero error omnis? Dolor provident cum similique hic molestias,
            reprehenderit culpa vitae ducimus suscipit error.
          </p>
          <a
            className="font-bold transition-all duration-150 bg-red-primary mt-12 z-10 border-[#ff6107] shadow-lg shadow-[#ff610769] text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-7 py-3 rounded-full"
            href={authCtx.userData ? "/competition" : "/login"}
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            laborum quidem eveniet quibusdam, non adipisci saepe facere
            voluptatum natus nostrum ipsum eum quia fuga magnam ea, enim
            accusamus ut reiciendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit facere modi obcaecati! Doloribus,
            reprehenderit quas tenetur minima rerum voluptas deleniti sapiente
            alias obcaecati. Optio fugiat sapiente molestiae cumque, eligendi
            exercitationem.
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            laborum quidem eveniet quibusdam, non adipisci saepe facere
            voluptatum natus nostrum ipsum eum quia fuga magnam ea, enim
            accusamus ut reiciendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit facere modi obcaecati! Doloribus,
            reprehenderit quas tenetur minima rerum voluptas deleniti sapiente
            alias obcaecati. Optio fugiat sapiente molestiae cumque, eligendi
            exercitationem.
          </p>
        </div>
      </div>
      <div className="bg-[url('../public/background/blur.png')] min-h-screen py-10 bg-contain bg-no-repeat md:bg-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[20%] mt-12 pt-5 pb-2 md:pt-24 md:pb-12">
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
                      href={authCtx.userData ? `/competition/${competition.link}` : "/login"}
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
          <div className="flex flex-col w-[80%] md:w-[50%] lg:w-[20%] mt-12 pt-5 pb-2 md:pt-24 md:pb-12">
            <img src={dashTop} alt="dash-top" className="self-start" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
              SPONSORSHIP
            </h2>
            <img src={dashBot} alt="dash-bot" className="self-end" />
          </div>
        </div>
        <div className="w-full px-3 lg:px-24 xl:px-80">
          <div className="w-full flex flex-row gap-5 justify-center items-center flex-wrap border-4 rounded-xl px-12 py-12 border-[#ff6107]">
            <img src="/sponsors/sp3.png" alt="sp1" />
            <img src="/sponsors/sp2.png" alt="sp1" />
            <img src="/sponsors/sp1.png" alt="sp1" />
          </div>
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={80}
            slidesPerView={4.5}
            scrollbar={{}}
            loop={true}
            grabCursor={true}
            className="swiper-container h-[300px] flex flex-row justify-center items-center"
          >
            {sponsors.map((sponsor) => {
              return (
                <SwiperSlide>
                  <div className="flex justify-center items-center h-full">
                    <img src={sponsor.src} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="bg-[url('../public/background/maskg1.png')] px-12 mt-10 w-full h-fit-content py-2 text-white bg-cover bg-no-repeat md:bg-center">
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
          <img src="/background/placeholder.png" className="w-[700px]" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
