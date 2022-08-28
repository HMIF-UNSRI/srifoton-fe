import { useContext, useEffect } from "react";

import Router from "./Router/Router";

import AuthContext from "./Contexts/AuthContext";

require("dotenv").config();

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    authCtx.loadUser();
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
