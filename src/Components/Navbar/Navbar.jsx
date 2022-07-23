import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../Contexts/AuthContext";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className="bg-black-light z-10 w-full py-2 flex flex-row items-center sticky top-0 justify-between shadow-md">
      <Link
        to="/"
        className="bg-red-primary block no-underline rounded-r-full w-fit pl-12 pr-6 py-2"
      >
        <img
          src="/background/headericon.png"
          className="h-[30px] w-auto"
          alt="icon"
        />
      </Link>
      <div className="flex flex-row gap-12 pr-12 items-center">
        <div className="flex flex-row gap-5">
          <Link
            className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
            to="/"
          >
            Beranda
          </Link>
          <Link
            className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
            to="/competition"
          >
            Kompetisi
          </Link>
          <Link
            className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
            to="/team"
          >
            Tim
          </Link>
          <Link
            className="text-gray-300 hover:text-white hover:underline transition-all duration-150"
            to="/settings"
          >
            Setting
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          {authCtx.userData ? (
            <>
              <Link
                className="font-bold text-white hover:underline transition-all duration-150"
                to="/settings"
              >
                {authCtx.userData.name}
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
  );
};

export default Navbar;
