import React from "react";

import Background from "../../Components/Background/Background";
import dashWhite from "../../Assets/Objects/dash-white.svg";
import uploadIcon from "../../Assets/Icons/upload.svg";
const FormRegister = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const clickUploadPhotoButton = () => {
    document.getElementById("kpm").click();
  };

  return (
    <Background>
      <div className="relative my-8 w-3/4 md:w-1/2 lg:w-[40%] mx-auto flex flex-col">
        <img src={dashWhite} alt="dash-top" className="absolute top-0 left-0" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-japanese text-center my-3 bg-white bg-clip-text text-transparent">
          Form Register
        </h2>
        <img
          src={dashWhite}
          alt="dash-bot"
          className="absolute bottom-0 right-0"
        />
      </div>

      <section className="bg-white text-black p-[40px] w-3/4 mx-auto mb-20 rounded-xl">
        <form onSubmit={onSubmitHandler} className="pt-3">
          <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
            Team Data*
          </p>
          <section className="bg-gray-100 text-black p-[20px] mb-20">
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Team Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Tim Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="kpm" className="text-base md:text-xl ">
                Proof of Payment :
              </label>
              <div className="flex flex-col gap-2">
                <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                  <div
                    onClick={clickUploadPhotoButton}
                    className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                  >
                    <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                    <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                      Upload File
                    </p>
                    <input
                      id="kpm"
                      name="kpm"
                      hidden
                      type="file"
                      accept="image/*,.pdf"
                    />
                  </div>
                  <div>
                    <p className="hidden md:block text-sm text-slate-500">
                      Or drop a file
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    jpg, jpeg, png, and pdf only
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    max 2MB*
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Competition :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Tim Name Here"
              />
            </div>
          </section>

          <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
            First Member Data*
          </p>
          <section className="bg-gray-100 text-black p-[20px] mb-20">
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                NIM :
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your NIM Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Email :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="University" className="text-base md:text-xl ">
                University :
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your University Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="kpm" className="text-base md:text-xl ">
                KPM :
              </label>
              <div className="flex flex-col gap-2">
                <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                  <div
                    onClick={clickUploadPhotoButton}
                    className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                  >
                    <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                    <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                      Upload File
                    </p>
                    <input
                      id="kpm"
                      name="kpm"
                      hidden
                      type="file"
                      accept="image/*,.pdf"
                    />
                  </div>
                  <div>
                    <p className="hidden md:block text-sm text-slate-500">
                      Or drop a file
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    jpg, jpeg, png, and pdf only
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    max 2MB*
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="University" className="text-base md:text-xl ">
                No Wa :
              </label>
              <input
                type="text"
                id="wa"
                name="wa"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your WhatsApp Number Here"
              />
            </div>
          </section>
          <p className="text-xs md:text-sm bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent mb-5">
            Second Member Data*
          </p>
          <section className="bg-gray-100 text-black p-[20px] mb-20">
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                NIM :
              </label>
              <input
                type="text"
                id="nim"
                name="nim"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your NIM Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="name" className="text-base md:text-xl ">
                Email :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="University" className="text-base md:text-xl ">
                University :
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your University Name Here"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="kpm" className="text-base md:text-xl ">
                KPM :
              </label>
              <div className="flex flex-col gap-2">
                <div className="gap-2 lg:w-1/2 flex flex-col justify-center items-center border-0 md:border border-slate-400 md:p-2 lg:py-4 rounded-xl ">
                  <div
                    onClick={clickUploadPhotoButton}
                    className="flex w-full gap-2 justify-center items-center border-2 border-slate-300 px-4 py-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200 rounded-lg"
                  >
                    <img className="w-4 md:w-6" src={uploadIcon} alt="" />
                    <p className="text-xs md:text-sm font-bold bg-gradient-to-r from-red-primary to-red-secondary bg-clip-text text-transparent">
                      Upload File
                    </p>
                    <input
                      id="kpm"
                      name="kpm"
                      hidden
                      type="file"
                      accept="image/*,.pdf"
                    />
                  </div>
                  <div>
                    <p className="hidden md:block text-sm text-slate-500">
                      Or drop a file
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between lg:w-1/2">
                  <span className="text-xs md:text-sm text-slate-500">
                    jpg, jpeg, png, and pdf only
                  </span>
                  <span className="text-xs md:text-sm text-slate-500">
                    max 2MB*
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mb-10">
              <label htmlFor="University" className="text-base md:text-xl ">
                No Wa :
              </label>
              <input
                type="text"
                id="wa"
                name="wa"
                className="border border-slate-400 w-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-xl rounded-lg"
                placeholder="Enter Your WhatsApp Number Here"
              />
            </div>
          </section>
        </form>
      </section>
    </Background>
  );
};

export default FormRegister;
