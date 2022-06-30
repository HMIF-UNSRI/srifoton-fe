import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Settings from "../Pages/Settings/Settings";
import Competition from "../Pages/Competition/Competition";
import ForgotPass from "../Pages/ForgotPass/ForgotPass";
import FormRegister from "../Pages/FormRegister/FormRegister";
import Team from "../Pages/Team/Team";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/competition" element={<Competition />} />
      <Route path="/forgot-pass" element={<ForgotPass />} />
      <Route path="/form-register" element={<FormRegister />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default Router;
