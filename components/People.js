import React from "react";
import Image from "next/image";

const People = () => {
  return (
    <div
      id="People"
      className="w-full md:h-screen p-2 flex items-center pt-20 pb-16"
    >
      <div className="max-w-[1240px] text-white items-center mx-auto md:grid grid-cols-4 gap-8">
        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Khaled Hazem</h1>
          </div>
          <h1 className=" pt-5 text-center">Full-Stack Developer</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Arda Tükenmez </h1>
          </div>
          <h1 className=" pt-5 text-center">Hikaye yazarı</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Muhammet Ali</h1>
          </div>
          <h1 className=" pt-5 text-center">Game Developer</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-3 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">ِAbdurrahman Şahin</h1>
          </div>
          <h1 className=" pt-5 text-center">
            Social Media Manager <br /> UI / UX Designer
          </h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Barış Sağlam</h1>
          </div>
          <h1 className=" pt-5 text-center">Muhasebe</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Ozan Tutcan</h1>
          </div>
          <h1 className=" pt-5 text-center">Grafiker</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Emir Kutlu </h1>
          </div>
          <h1 className=" pt-5 text-center">3D Tasarım</h1>
        </div>

        <div className=" h-40 w-60 rounded-2xl bg-gray-700 ">
          <div className=" flex w-full pl-5 gap-5 items-center pt-2 ">
            <img
              src="/assets/Cookie.png"
              width="40"
              height="40"
              className=" rounded-full border border-black "
            />
            <h1 className=" font-bold text-center ">Faruk Eymech</h1>
          </div>
          <h1 className=" pt-5 text-center">Software Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default People;
