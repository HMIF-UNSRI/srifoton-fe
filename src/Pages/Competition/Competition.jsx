import React from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Competition = () => {
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
      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <p className="text-white">Hemlo</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-white">Hemlo</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-white">Hemlo</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-white">Hemlo</p>
        </SwiperSlide>
      </Swiper>
    </Background>
  );
};

export default Competition;
