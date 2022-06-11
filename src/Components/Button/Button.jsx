import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-sm md:text-lg text-center w-full border-[3px]  border-red-secondary bg-red-primary hover:bg-red-primary-semibold active:bg-red-primary-bold text-white rounded-xl lg:rounded-3xl py-1 md:py-3 lg:button-shadow-primary transition">
      {children}
    </button>
  );
};

export default Button;
