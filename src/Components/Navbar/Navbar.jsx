const Navbar = () => {
  return (
    <nav className="bg-black-light z-10 w-full py-2 flex flex-row items-center sticky top-0 justify-between shadow-md">
      <a href="/" className="bg-red-primary block no-underline rounded-r-full w-fit pl-12 pr-6 py-2">
        <img src="/background/headericon.png" className="h-[30px] w-auto"/>
      </a>
      <div className="flex flex-row gap-12 pr-12 items-center">
        <div className="flex flex-row gap-5">
          <a className="text-gray-300 hover:text-white hover:underline transition-all duration-150" href="/">Beranda</a>
          <a className="text-gray-300 hover:text-white hover:underline transition-all duration-150" href="/competition">Kompetisi</a>
          <a className="text-gray-300 hover:text-white hover:underline transition-all duration-150" href="/team">Tim</a>
          <a className="text-gray-300 hover:text-white hover:underline transition-all duration-150" href="/settings">Setting</a>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <a className="font-bold text-white hover:underline transition-all duration-150" href="/">Akun</a>
          <a className="font-bold transition-all duration-150 bg-red-primary text-white border-2 border-transparent hover:bg-red-700 hover:border-red-primary-semibold block px-5 py-1 rounded-full" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;