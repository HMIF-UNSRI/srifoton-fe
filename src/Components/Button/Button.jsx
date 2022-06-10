import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-lg text-center w-full border-[3px]  border-red-secondary bg-red-primary hover:bg-red-primary-semibold active:bg-red-primary-bold text-white rounded lg:rounded-3xl py-3 lg:button-shadow-primary transition">
      {children}
    </button>
  );
};

export default Button;
