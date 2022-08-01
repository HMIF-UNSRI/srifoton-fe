import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Settings from "../Pages/Settings/Settings";
import Competition from "../Pages/Competition/Competition";
import ForgotPass from "../Pages/ForgotPass/ForgotPass";
import ResetPass from "../Pages/ResetPass/ResetPass";
import FormRegister from "../Pages/FormRegister/FormRegister";
import Team from "../Pages/Team/Team";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CompDesc from "../Pages/CompDesc/CompDesc";

import RequireAuth from "../Helpers/RequireAuth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-pass" element={<ForgotPass />} />
      <Route path="/reset-pass" element={<ResetPass />} />
      <Route element={<RequireAuth />}>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/competition/:slug" element={<CompDesc />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/form-register" element={<FormRegister />} />
      </Route>
    </Routes>
  );
};

export default Router;
