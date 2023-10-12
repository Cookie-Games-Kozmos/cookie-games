import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function DrawerNav(props) {
  const { nav, handleNav } = props;

  return (
    <div
      className={
        nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/50" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#4A4C54] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 h-full w-[75%] p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link onClick={handleNav} href="">
              <Image src="/assets/Cookie.png" alt="" width="100" height="50" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-2xl bg-[#242529] text-[#FF7062] shadow-lg shadow-gray-500 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b pb-1 border-gray-300 my-4">
            <a className="w-[85%] md:[90%] text-bold text-[#FF7062] py-4">
              Small Team But Strong.
            </a>
          </div>
          <div className="">
            <ul className="py-5 flex-col">
              <Link href="">
                <li
                  onClick={handleNav}
                  className=" text-[#FF7062] py-4 text-md"
                >
                  {" "}
                  Ana sayfa
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={handleNav}
                  className=" text-[#FF7062] py-4 text-md"
                >
                  {" "}
                  Hakkımızda
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={handleNav}
                  className=" text-[#FF7062] py-4 text-md"
                >
                  {" "}
                  Ekip üyelerimiz
                </li>
              </Link>
            </ul>
            <div className=" pt-20 mt-10">
              <p className="uppercase tracking-widest text-[#FF7062]">
                Sosyal Medya
              </p>
              <div className="flex items-center justify-between text-white my-4 w-full sm:w[80%] ">
                <div className="rounded-2xl bg-[#242529] shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-2xl bg-[#242529] shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="/">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-2xl bg-[#242529] shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="/">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-2xl bg-[#242529] shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="/">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerNav;
