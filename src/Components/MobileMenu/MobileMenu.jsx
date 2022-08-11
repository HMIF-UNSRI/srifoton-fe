import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../Contexts/AuthContext";

const MobileMenu = ({ setShowMenu }) => {
  const authCtx = useContext(AuthContext);

  return (
    <nav
      onClick={() => setShowMenu(false)}
      className="bg-[rgba(20,20,20,0.95)] z-20 fixed justify-center items-center w-full h-full flex gap-5 flex-col sm:hidden"
    >
      <Link className="text-red-primary font-bold text-center text-lg" to="/">
        Beranda
      </Link>
      <Link
        className="text-red-primary font-bold text-center text-lg"
        to="/competition"
      >
        Kompetisi
      </Link>
      <Link
        className="text-red-primary font-bold text-center text-lg"
        to="/team"
      >
        Tim
      </Link>
      <Link
        className="text-red-primary font-bold text-center text-lg"
        to="/settings"
      >
        Settings
      </Link>
      {authCtx.userData ? (
        <>
          <Link
            className="text-red-primary font-bold text-center text-lg"
            to="/settings"
          >
            {authCtx.userData.name}
          </Link>
          <p
            className="text-red-primary font-bold text-center text-lg"
            onClick={() => authCtx.logout()}
          >
            Logout
          </p>
        </>
      ) : (
        <>
          <Link
            className="text-red-primary font-bold text-center text-lg"
            to="/"
          >
            Akun
          </Link>
          <Link
            className="text-red-primary font-bold text-center text-lg"
            to="/login"
          >
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default MobileMenu;
