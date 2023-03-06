import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const University = () => {
  return (
    <div className="max-w-6xl px-3 mx-auto mt-[72px] sm:pt-7 sm:mt-0 pb-[86px] relative">
      <div className="grid grid-cols-2 lg:grid-cols-1 sm:grid-cols-1">
        <div className="pt-[72px]">
          <h1 className="text-[#1f1d21] leading-[59px] text-[42px] font-semibold">
            University of Amsterdam
          </h1>
          <h2 className="text-[#1f1d21] font-normal leading-[45px] text-[28px]">
            Inspiring generations since 1632.
          </h2>
        </div>
        <div className="relative sm:mt-6">
          <img
            src="https://www.uva.nl/webfiles/1676992405662/includes/home-herobanner-en/img/Universiteit+van+Amsterdam+shoot+17012023-0176-flip-cropped-hi.jpg"
            alt="image"
            className="w-[547] h-[500px] sm:h-full object-cover"
          />
          <div className="bg-[#F7F7F7] w-[547] h-[500px] px-72  -right-[124px] -bottom-[72px]  -z-10 absolute  sm:hidden "></div>
        </div>
      </div>
      <div className=" grid sm:grid-cols-1 grid-cols-3 gap-[12px] lg:left-40 lg:top-[500px] lg:grid-cols-1 absolute left-1 sm:left-7 sm:top-[555px]  top-[334px]">
        {[
          {
            title: "Bachelor's",
            description: "20+ English-taught Bachelor's",
            link: "programmes",
          },
          {
            title: "Master's",
            description: "200+ English-taught Master's",
            link: "programmes",
          },

          {
            title: " Professional development",
            description: "MBA's, executive programmes, and",
            link: "master classes",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#ffffff] w-[315px] h-[110px] hover:shadow-hov1 cursor-pointer flex justify-between items-center rounded-sm py-[16px] px-[24px]  gap-[8px] border border-[#bc0031]"
            >
              <div>
                <h1 className="text-[#bc0031] text-[1rem] leading-[1.6] font-bold">
                  {item.title}
                </h1>
                <span className="text-[#6E6E6E] text-[1rem] leading-[1.6] font-normal">
                  {item.description}
                </span>{" "}
                <br />
                <span className="text-[#6E6E6E] text-[1rem] leading-[1.6] font-normal">
                  {item.link}
                </span>
              </div>
              <BsArrowRight className="text-[#bc0031]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
