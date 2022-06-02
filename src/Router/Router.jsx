import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
