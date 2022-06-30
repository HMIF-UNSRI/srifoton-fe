import React from "react";

const Background = ({ children, className }) => {
  return (
    <div
      className={`bg-[rgb(34,34,34)] min-h-screen w-full h-full bg-gradient bg-center py-1 bg-cover bg-repeat-y md:bg-no-repeat ${className}`}
    >
      <div className="bg-[url('../public/background/blur.png')] min-h-screen bg-contain bg-no-repeat md:bg-center">
        {children}
      </div>
    </div>
  );
};

export default Background;
