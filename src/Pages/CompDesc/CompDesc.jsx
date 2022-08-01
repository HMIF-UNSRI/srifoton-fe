import React from "react";
import Background from "../../Components/Background/Background";

import dashWhite from "../../Assets/Objects/dash-white.svg";
import { competitions } from "../../StaticData/Data";

import { Link, useParams } from "react-router-dom";

const CompDesc = () => {
  const params = useParams();
  const getSlug = competitions.filter((el) => {
    return el.link === params.slug
  })[0];
  return (
    <Background>
      <div className="relative my-8 w-4/5 md:w-2/3 lg:w-1/2 mx-auto flex flex-col">
        <img
          src={dashWhite}
          alt="dash-top"
          className="absolute top-0 left-60"
        />
        <h2 className="text-xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 text-white">
          {getSlug.title}
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-60"
        />
      </div>
      <div className="mx-auto w-3/4 py-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center w-full h-[400px] gap-6 mb-6">
            <div className="w-5 h-full bg-red-primary rounded-xl"></div>
            <div className="bg-black-light w-fit h-full rounded-xl flex justify-center items-center">
              <img src={getSlug.image} className="w-[400px]" alt="cp" />
            </div>
          </div>
          <div className="text-white w-full flex flex-col justify-center items-center lg:px-48 mt-6 gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-center">{getSlug.desc}</h2>
            </div>
            <div className="my-6 flex flex-col md:flex-row gap-2 md:gap-8">
              <Link
                className="button-primary py-3 px-8"
                to={getSlug.guidebook}
              >
                Download Guidebook
              </Link>
              <Link
                className="button-secondary-alt py-3 px-8"
                to="/form-register"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-6 font-japanese text-center my-12 text-white">
          PROCESS TIMELINE
        </h2>
        <ol class="items-center lg:flex w-full justify-center bg-primary-dark-main p-5 rounded-xl my-12">
          <li class="relative w-full mb-6 lg:mb-0">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-red-primary lg:ring-8 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-red-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="hidden lg:flex w-full bg-red-primary h-0.5"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg border-r-2 border-red-secondary font-semibold text-white">Registration</h3>
              <time class="block mb-2 text-sm border-r-2 border-red-primary font-normal leading-none text-white">1 s/d 30 Agustus 2022</time>
            </div>
          </li>
          <li class="relative w-full mb-6 lg:mb-0">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-red-primary lg:ring-8 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-red-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="hidden lg:flex w-full bg-red-primary h-0.5"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg border-r-2 border-red-secondary font-semibold text-white">Verification</h3>
              <time class="block mb-2 text-sm border-r-2 border-red-primary font-normal leading-none text-white">1 s/d 10 September 2022</time>
            </div>
          </li>
          <li class="relative w-full mb-6 lg:mb-0">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-red-primary lg:ring-8 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-red-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="hidden lg:flex w-full bg-red-primary h-0.5"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg border-r-2 border-red-secondary font-semibold text-white">Competition</h3>
              <time class="block mb-2 text-sm border-r-2 border-red-primary font-normal leading-none text-white">12 September 2022</time>
            </div>
          </li>
          <li class="relative w-full mb-6 lg:mb-0">
            <div class="flex items-center">
              <div class="flex justify-center items-center w-6 h-6 bg-white rounded-full ring-0 ring-red-primary lg:ring-8 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-red-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="hidden lg:flex w-full bg-red-primary h-0.5"></div>
            </div>
            <div class="mt-3 sm:pr-8">
              <h3 class="text-lg border-r-2 border-red-secondary font-semibold text-white">Announcement</h3>
              <time class="block mb-2 text-sm border-r-2 border-red-primary font-normal leading-none text-white">15 September 2022</time>
            </div>
          </li>
        </ol>
        <h2 className="text-xl md:text-3xl lg:text-4xl  font-japanese text-center my-3 text-white">
          CONTACT PERSON
        </h2>
        <ol class="items-center lg:flex w-full justify-center rounded-xl my-12 lg:gap-6">
          {getSlug.contacts.map((el, idx) => (
            <li key={idx} className="relative bg-white rounded-xl w-full p-5 mb-6 lg:mb-0">
              <div className="flex w-full flex-row items-start gap-5">
                <img src="https://via.placeholder.com/100/000000/FFFFFF?text=Placeholder" className="rounded-xl" alt="img" />
                <div className="flex flex-col w-full">
                  <p className="text-[1.35rem] font-semibold text-red-primary">
                    {el.name}
                  </p>
                  <div class="flex w-full bg-red-primary h-1 mb-2"></div>
                  <p className="text-black">
                    Whatsapp: {el.wa}
                  </p>
                  <p className="text-black">
                    Line: {el.line}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Background>
  );
};

export default CompDesc;