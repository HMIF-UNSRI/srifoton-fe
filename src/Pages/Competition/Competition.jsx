import { useState, useEffect } from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";
import competitiveProgramming from "../../Assets/CompetitionIcon/competitive-programming.png";
import eSport from "../../Assets/CompetitionIcon/e-sport.png";
import uiuxDesign from "../../Assets/CompetitionIcon/uiux-design.png";
import webDevelopment from "../../Assets/CompetitionIcon/web-development.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

const competitions = [
  {
    title: "Competitive Programming",
    image: competitiveProgramming,
  },
  {
    title: "Web Development",
    image: webDevelopment,
  },
  {
    title: "UI/UX Design",
    image: uiuxDesign,
  },
  {
    title: "E-Sport",
    image: eSport,
  },
];

const Competition = () => {
  // detect user screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setScreenSize(window.innerWidth);
      },
      false
    );
  }, []);

  console.log(screenSize);

  return (
    <Background>
      <div className="relative my-8 w-4/5 md:w-2/3 lg:w-1/2 mx-auto flex flex-col">
        <img
          src={dashWhite}
          alt="dash-top"
          className="absolute top-0 left-60"
        />
        <h2 className="text-xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 text-white">
          SRIFOTON 2022 COMPETITION
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-60"
        />
      </div>
      <div className="mx-auto w-3/4 py-10">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={80}
          slidesPerView={3}
          scrollbar={{}}
          loop={true}
          grabCursor={true}
          className="swiper-container"
        >
          {competitions.map((competition, index) => (
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center w-full h-[400px] gap-6">
                  <div className="w-5 h-full bg-red-primary rounded-xl"></div>
                  <div className="bg-black-light w-full h-full rounded-xl flex justify-center items-center">
                    <img src={competition.image} className="w-full" alt="cp" />
                  </div>
                </div>
                <div className="text-white w-full flex flex-col justify-start gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">Competition Branch</p>
                    <h2 className="text-xl">{competition.title}</h2>
                  </div>
                  <div>
                    <button className="button-primary py-3 px-8 mb-10">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Background>
  );
};

export default Competition;
