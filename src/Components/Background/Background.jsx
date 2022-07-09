import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Background = ({ children, className }) => {
  return (
    <div
      className={`bg-[rgb(34,34,34)] min-h-screen w-full h-full bg-gradient bg-center bg-cover bg-repeat-y md:bg-no-repeat ${className}`}
    >
      <Navbar />
      <div className="bg-[url('../public/background/blur.png')] min-h-screen py-10 bg-contain bg-no-repeat md:bg-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Background;
