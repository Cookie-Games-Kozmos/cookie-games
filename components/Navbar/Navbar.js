import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const checkScrollTop = () => {
    setShadow(window.scrollY >= 90);
  };

  // Preventing memory leak from window
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div
      className={`${
        shadow ? "shadow-xl shadow-gray-700 " : ""
      } fixed w-full bg-[#242529] h-20 z-[100] duration-200 `}
    >
      <div className="flex justify-between md:pl-20 pl-10 items-center w-full h-full px-2 2xl:px-16">
        <div className=" text-[#FF7062] font-bold text-2xl ">
          <a className=" cursor-pointer" href="/">
            COOKIE GAME
          </a>
        </div>

        {/* desktop menu */}
        <div className=" text-[#FF7062] ">
          <ul className=" pr-5 md:pr-10 grid grid-cols-2 gap-8 pt-1 hidden md:flex">
            <Link href="/">
              <li className=" text-lg uppercase text-white rounded-lg hover:text-[#FF7062] duration-200 ">
                Ana sayfa
              </li>
            </Link>
            <Link href="/#about">
              <li className=" text-lg uppercase text-white rounded-lg hover:text-[#FF7062] duration-200 ">
                Hakkımızda
              </li>
            </Link>
            <Link href="/#People">
              <li className=" text-lg uppercase text-white rounded-lg hover:text-[#FF7062] duration-200 ">
                Ekip üyelerimiz
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className=" pr-5 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className=" px-5 hidden md:flex ">
          <Link href="/#contact">
            <button className=" p-2 border hover:border-red-500/90 rounded-lg hover:scale-105 duration-300 text-white ">
              <h1>Bize Ulaş</h1>
            </button>
          </Link>
        </div>
      </div>

      <DrawerNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
