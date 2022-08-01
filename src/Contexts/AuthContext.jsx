import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  register: (email, name, nim, password, confirmPassword) => {},
  login: (email, password) => {},
  logout: () => {},
  loadUser: () => {},
  userData: {},
  apiResponseMessage: {},
  SetApiResponseMessage: (message) => {},
});

const BASE_URL =
  (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
  "http://localhost:8000/api";

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [apiResponseMessage, SetApiResponseMessage] = useState(null);
  const navigate = useNavigate();

  const register = async (
    idKpm,
    name,
    nim,
    email,
    password,
    whatsappNumber,
    university
  ) => {
    let data;
    try {
      const response = await axios.post(`${BASE_URL}/users`, {
        id_kpm: idKpm,
        name,
        nim,
        university,
        email,
        password,
        no_wa: whatsappNumber,
      });
      data = response.data;
    } catch (error) {
      SetApiResponseMessage(error.response.data);
      return error;
    }

    return {
      error: data.errors,
      message: data.message,
      code: data.code,
    };
  };

  const login = async (email, password) => {
    let response;
    let data;
    try {
      response = await axios.post(`${BASE_URL}/auth`, {
        email,
        password,
      });
      data = response.data;
    } catch (error) {
      SetApiResponseMessage(error.response.data)
      console.log("Exist")
      return error;
    }

    localStorage.setItem("token", data.data.access_token);
    setUserData(jwtDecode(data.data.access_token));
    return {
      error: data.errors,
      message: data.message,
      code: data.code,
    };
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/");
  };

  const loadUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return logout();
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        loadUser,
        userData,
        apiResponseMessage,
        SetApiResponseMessage
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
