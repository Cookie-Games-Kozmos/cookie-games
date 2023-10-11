import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed w-full bg-[#242529] h-20 z-[100] ">
      <div className="flex justify-between md:pl-20 pl-10 items-center w-full h-full px-2 2xl:px-16">
        <div className=" text-[#FF7062] font-bold text-2xl ">
          <a className=" cursor-pointer" href="/">
            COOKIE GAME
          </a>
        </div>

        {/* desktop menu */}
        <div className=" text-[#FF7062] ">
          <ul className=" pr-5 md:pr-10 grid grid-cols-2 gap-4 hidden md:flex">
            <Link href="/">
              <li className=" text-lg uppercase text-white hover:rounded-3xl p-1 hover:p-1 hover:bg-[#FF7062] ">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className=" text-lg uppercase text-white hover:rounded-3xl p-1 hover:p-1 hover:bg-[#FF7062] ">
                About
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className=" pr-5 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <DrawerNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
