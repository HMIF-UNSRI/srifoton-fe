import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AmperaBackground = ({ children, className }) => {
  return (
    <div
      className={`bg-[rgb(34,34,34)] w-full min-h-screen h-full bg-ampera bg-center bg-cover bg-no-repeat ${className}`}
    >
      <Navbar />
      <div className="bg-[url('../public/background/blur.png')] min-h-screen text-white py-10 bg-contain bg-no-repeat md:bg-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AmperaBackground;
