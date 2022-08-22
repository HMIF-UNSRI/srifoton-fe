import React, { useEffect, useState } from "react";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import axios from "axios";

const ForgotPass = () => {
  const [isLoading, setIsLoading] = useState(false);

  //check for query params
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  const baseUrl = "https://srifoton.hmifunsri.org/api/users/activate/";

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baseUrl}/${token}`).then(() => setIsLoading(false));
  }, [token]);

  return (
    <AmperaBackground>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-japanese text-center my-3 bg-gradient-to-r text-white">
          Email Activation
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>
      {!isLoading && (
        <section className="bg-white text-black p-[40px] w-3/4 md:1/2 mx-auto mb-20 gap-4 flex flex-col rounded-xl">
          <h2 className="font-bold text-center text-lg lg:text-xl">
            Your Email has Been Successfully Activated
          </h2>
          <p className="font-bold text-center text-base lg:text-lg">
            Redirecting...
          </p>
        </section>
      )}
    </AmperaBackground>
  );
};

export default ForgotPass;
