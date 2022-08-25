import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import HamburgerMenu from "../../Assets/Icons/hamburger-menu.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

import AuthContext from "../../Contexts/AuthContext";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu &&
        ReactDOM.createPortal(
          <MobileMenu setShowMenu={setShowMenu} />,
          document.getElementById("mobile-menu")
        )}
      <nav className="bg-black-light z-10 w-full py-2 flex flex-row items-center sticky top-0 justify-between shadow-md">
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className="bg-red-primary no-underline cursor-pointer rounded-r-full w-fit pl-4 xs:pl-12 pr-6 py-2 block sm:hidden"
        >
          <img src={HamburgerMenu} alt="menu" className="w-8 h-auto" />
        </div>
        <Link
          to="/"
          className="bg-red-primary no-underline rounded-r-full w-fit pl-4 xs:pl-12 pr-6 py-2 hidden sm:block"
        >
          <img
            src="/background/headericon.png"
            className="h-[30px] w-auto"
            alt="icon"
          />
        </Link>
        <div className="flex flex-row gap-12 pr-12 items-center ">
          <div className="hidden sm:flex flex-row gap-5 ">
            <Link
              className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
              to="/"
            >
              Beranda
            </Link>
            {authCtx.userData && (
              <Link
                className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
                to="/dashboard"
              >
                Dashboard
              </Link>
            )}
            <Link
              className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
              to="/competition"
            >
              Kompetisi
            </Link>
            {authCtx.userData && (
            <Link
              className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
              to="/team"
            >
              Tim
            </Link>
            )}
            {authCtx.userData && (
            <Link
              className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
              to="/settings"
            >
              Pengaturan
            </Link>
            )}
          </div>
          <div className="hidden sm:flex flex-row gap-5 items-center">
            {authCtx.userData ? (
              <>
                <Link
                  className="font-bold text-white hover:underline transition-all duration-150"
                  to="/settings"
                >
                  {authCtx.userData.name}
                </Link>
                <Link
                  className="font-bold transition-all duration-150 bg-red-primary text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-5 py-1 rounded-full"
                  onClick={() => authCtx.logout()}
                  to="/"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="font-bold text-white hover:underline transition-all duration-150"
                  to="/"
                >
                  Akun
                </Link>
                <Link
                  className="font-bold transition-all duration-150 bg-red-primary text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-5 py-1 rounded-full"
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
