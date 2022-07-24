import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";
import Error401 from "../Components/Error/Error";

const RequireAuth = () => {
  const authCtx = useContext(AuthContext);

  return authCtx.userData ? (
    <Outlet />
  ) : (
    <Error401 code="401" message="You're Not Authorized" />
  );
};

export default RequireAuth;
