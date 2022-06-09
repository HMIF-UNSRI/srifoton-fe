import React from "react";

const Register = () => {
  return (
    <div className="bg-[rgb(34,34,34)] w-screen h-screen bg-ampera bg-center bg-cover bg-no-repeat">
      <div className="text-white w-full h-full pt-16 bg-ampera bg-no-repeat bg-center bg-cover">
        <div className="bg-[url('../public/background/blur.png')] bg-center bg-no-repeat bg-contain w-full h-full ">
          <div>
            <p className="text-[50px] text-center">HMIF UNSRI 2022</p>
            <h1 className="font-japanese text-center text-[160px]">SRIFOTON</h1>
          </div>
          <div className="bg-white text-black p-[40px] w-3/4 mx-auto">
            <h2 className="text-5xl font-japanese text-center bg-gradient-to-r  from-red-primary to-red-secondary bg-clip-text text-transparent">
              Register
            </h2>
            <p className="text-center">
              please fill in the data self completely{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
