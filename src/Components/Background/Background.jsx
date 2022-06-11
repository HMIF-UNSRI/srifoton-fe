import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-[rgb(34,34,34)] w-full h-full bg-gradient bg-center py-1 bg-cover bg-repeat-y md:bg-no-repeat">
      <div className="bg-[url('../public/background/blur.png')] bg-contain bg-repeat-y md:bg-no-repeat md:bg-center">
        {children}
      </div>
    </div>
  );
};

export default Background;
