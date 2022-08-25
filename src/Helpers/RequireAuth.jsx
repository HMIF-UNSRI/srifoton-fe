import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";

const RequireAuth = () => {
  const authCtx = useContext(AuthContext);

  return authCtx.userData ? (
    <Outlet />
  ) : (
    // <Error401 code="401" message="You're Not Authorized" />
    authCtx.authRedirect()
  );
};

export default RequireAuth;
