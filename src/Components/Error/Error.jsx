import React from "react";
import { Link } from "react-router-dom";

const Error401 = ({ code, message }) => {
  return (
    <div>
      <h1>Error {code}</h1>
      <p>message</p>
      {+code === 401 && (
        <span>
          Click <Link to={"/login"}>Here</Link> To Log In
        </span>
      )}
    </div>
  );
};

export default Error401;
