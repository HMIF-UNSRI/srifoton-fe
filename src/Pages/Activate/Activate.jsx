import React, { useEffect, useState, useContext } from "react";

import AmperaBackground from "../../Components/AmperaBackground/AmperaBackground";

import dashWhite from "../../Assets/Objects/dash-white.svg";

import AuthContext from "../../Contexts/AuthContext";

import axios from "axios";

const ForgotPass = () => {
  // eslint-disable-next-line
  const authCtx = useContext(AuthContext);

  //check for query params
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");

  const baseUrl = "https://srifoton.hmifunsri.org/api/users/activate";

  useEffect(() => {
    axios
      .get(`${baseUrl}/Bearer ${token}`)
      .then(() => {
          authCtx.EmailActivationSuccess();
        })
      .catch(() => "");
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
      <section className="bg-white  p-[40px] w-3/4 md:1/2 mx-auto mb-20 gap-4 flex flex-col rounded-xl">
        <h2 className="font-bold text-center text-[#dd0000] text-lg lg:text-xl">
          This activation link is no longer valid.
        </h2>
      </section>
    </AmperaBackground>
  );
};

export default ForgotPass;
