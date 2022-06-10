import React from "react";

const AmperaBackground = ({ children }) => {
  return (
    <div className="bg-[rgb(34,34,34)] bg-ampera bg-center pb-6 bg-cover bg-repeat-y md:bg-no-repeat">
      <div className="text-white w-full h-full pt-8 bg-ampera bg-center bg-cover bg-repeat-y md:bg-no-repeat">
        <div className="bg-[url('../public/background/blur.png')] bg-contain bg-repeat-y md:bg-no-repeat md:bg-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AmperaBackground;
