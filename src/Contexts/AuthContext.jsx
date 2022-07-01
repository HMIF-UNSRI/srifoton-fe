import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  register: (email, name, nim, password, confirmPassword) => {},
  login: (email, password) => {},
  logout: () => {},
  loadUser: () => {},
  adminLogin: (username, password) => {},
  userData: {},
});

const BASE_URL =
  (process.env.REACT_API_URL && `${process.env.REACT_API_URL}/api`) ||
  "http://localhost:8000/api";

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState(null);
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
      if (response.data.error) {
        return { error: response.data.error };
      }
    } catch (error) {
      return { error: error };
    }

    return {
      error: null,
      message: "Successfully Registered, redirecting...",
    };
  };

  const login = async (email, password) => {
    let response;
    try {
      response = await axios.post(`${BASE_URL}/auth`, {
        email,
        password,
      });
      if (response.data.error) {
        return { error: response.data.error };
      }
    } catch (error) {
      return { error: error };
    }

    localStorage.setItem("token", response.data.token);
    setUserData(jwtDecode(response.data.token));

    return {
      error: null,
      message: "Successfully Logged In, redirecting...",
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
      setUserData(decoded);
    }
  };

  const adminLogin = async (username, password) => {
    let response;
    try {
      response = await axios.post(`${BASE_URL}/admin`, {
        username,
        password,
      });
      if (response.data.error) {
        return { error: response.data.error };
      }
    } catch (error) {
      return { error: error };
    }

    localStorage.setItem("token", response.data.token);
    setUserData(jwtDecode(response.data.token));

    return {
      error: null,
      message: "Successfully Logged In, redirecting...",
    };
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        loadUser,
        userData,
        adminLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
