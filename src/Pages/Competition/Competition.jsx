import React from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";

const Competition = () => {
  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 text-white">
          SRIFOTON 2022 COMPETITION
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      <div>
        <h2>Hemlo</h2>
      </div>
      <div>
        <h3>Yahoo</h3>
      </div>
    </Background>
  );
};

export default Competition;
