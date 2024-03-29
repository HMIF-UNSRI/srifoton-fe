import React, { useState, useEffect } from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";
import { competitions } from "../../StaticData/Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css/bundle";

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
  }, [screenSize]);

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
      <div className="mx-auto w-3/4 py-5">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={
            (screenSize <= 650 && 10) || (screenSize <= 1080 && 40) || 80
          }
          slidesPerView={
            (screenSize <= 650 && 1) || (screenSize <= 1080 && 2) || 3
          }
          scrollbar={{}}
          loop={true}
          grabCursor={true}
          className="swiper-container"
        >
          {competitions.map((competition, index) => (
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-4 py-6">
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
                    <Link
                      className="button-primary py-3 px-8 mb-10"
                      to={`/competition/${competition.link}`}
                    >
                      Competition Detail
                    </Link>
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
