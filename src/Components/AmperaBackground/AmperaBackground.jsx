import React from "react";

const AmperaBackground = ({ children }) => {
  return (
    <div className="bg-[rgb(34,34,34)] w-full h-full bg-ampera bg-center py-1 bg-cover bg-no-repeat">
      <div className="bg-[url('../public/background/blur.png')] text-white bg-contain bg-no-repeat md:bg-center">
        {children}
      </div>
    </div>
  );
};

export default AmperaBackground;
