import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full md:h-screen p-2 px-10 flex items-center pt-40 pb-16">
      <div className="max-w-[1240px] items-center m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-center px-8 md:items-start ">
          <a className="py-2 uppercase text-gray-300 text-3xl md:text-6xl text-mono">
            <span className=" text-[#FF7062] ">Cookie</span> gamese hoşgeldiniz
          </a>

          <br />
          <br />

          <a className=" text-gray-300 md:text-2xl ">
            Small Team, <span className=" text-[#E1BD9C] "> Sweet </span>{" "}
            Success.
          </a>

          <div className=" py-10">
            <a href="#contact" className=" p-5 bg-red-500 uppercase rounded-xl">
              Iletişim
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-sm md:scale-100 scale-90 flex item-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className=""
            src="/assets/Logo.png"
            alt="Logo pic"
            width={443}
            height={316}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
