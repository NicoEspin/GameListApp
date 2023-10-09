import React, { useContext, useEffect, useState } from "react";
import { HiOutlineSearch, HiMoon, HiSun, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/Images/logo.png";
import { ThemeContext } from "../../Context/ThemeContext";
import GenreList from "../GenreList/GenreList";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {}, []);

  return (
    <header className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="logo" className="hidden md:block" />
      <div className="md:hidden">
        {!toggle ? (
          <HiOutlineMenu
            className="text-[25px] cursor-pointer dark:text-white "
            onClick={() => setToggle(true)}
          />
        ) : (
          <HiOutlineX
            className="text-[25px] cursor-pointer dark:text-white"
            onClick={() => setToggle(false)}
          />
        )}
        {toggle ? (
          <div className="absolute z-10 bg-white mt-3 dark:bg-[#121212]">
            {<GenreList />}
          </div>
        ) : null}
      </div>
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
