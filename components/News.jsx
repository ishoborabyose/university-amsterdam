import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

export const News = () => {
  return (
    <div className="bg-[#E6E6E6] ">
      {/* <div className=" pl-[60px]  pb-[60px] sm:pb-[100px] mt-[64px]"> */}
      <div className=" pb-[60px] sm:pb-[100px] mt-[64px] pl-3 max-w-[89rem] mx-auto">
        <div className="flex justify-between items-center">
          <h1
            className={`text-[#1f1d21] mt-[64px]  text-[30px] leading-[48px] font-semibold mb-[36px]`}
          >
            News
          </h1>
          <MdKeyboardArrowRight className="text-[#1f1d21] w-8 h-8 " />
        </div>

        {/* <div className="flex justify-center gap-[24px] h-[470px] scrollHidden  overflow-x-scroll"> */}
        <div className="flex justify-center- flex-nowrap h-[470px] sm:scrollHidden sm:overflow-x-scroll scrollHidden  overflow-x-scroll gap-[24px]">
          {[
            {
              img: "https://www.uva.nl/binaries/_ht_1674029772447/680x190-jpg/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg",
              title: "Teflon is so slippery be-cause it slides on itself",
              description:
                "The surface of Teflon - the non-stick coat-  ing in your pan - is incredibly slippery Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where thi slipperiness",
            },
            {
              img: "https://www.uva.nl/binaries/_ht_1675939518244/680x190-jpg/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/nieuws/2023/uva_fnwi_flaviadealmeidadias_ld_lr_20210413-4331.jpg",
              title: "  The richest people don't turn out to be the smartest",
              description:
                "Are the highest-paid jobs with the highest prestige performed by the smartest peo-ple? No, say sociologists who used unique information about 59,000 men to uncover  the connection between intelligence and wealth.",
            },

            {
              img: "https://www.uva.nl/binaries/_ht_1675766876631/680x190-jpg/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/group-violence.jpg",
              title: " Why are our brains so huge?",
              description:
                "are human brains three times larger  than those of our closest living relatives? A diverse, high-quality diet and a long child- hood in which we learn complex ways to acquire and gather food could be a major.",
            },

            {
              img: "https://www.uva.nl/binaries/_ht_1675160334954/680x190-jpg/content/gallery/onderzoek/hims/nieuws/plasticbottles_tonywebster_wikimediacommons.jpg",
              title: "    Moratorium on research with Shell",
              description:
                "The UVA will not enter into research collab-orations with Shell or similar companies for the time being. A discussion with stu-dents and staff needs to be concluded first according to the Executive Board. In recent",
            },
            {
              img: "https://www.uva.nl/binaries/_ht_1676632421291/680x190-webp/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg",
              title: "    Moratorium on research with Shell",
              description:
                "The UVA will not enter into research collab-orations with Shell or similar companies for the time being. A discussion with stu-dents and staff needs to be concluded first according to the Executive Board. In recent",
            },
            {
              img: "https://www.uva.nl/binaries/_ht_1676632421291/680x190-webp/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg",
              title: "    Moratorium on research with Shell",
              description:
                "The UVA will not enter into research collab-orations with Shell or similar companies for the time being. A discussion with stu-dents and staff needs to be concluded first according to the Executive Board. In recent",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className={`  bg-white cursor-pointer w-[320px] sm:w-[309px] h-[457px] flex-shrink-0 group hover:shadow-hov3 hover:duration-300`}
              >
                <img
                  src={item.img}
                  alt="image"
                  className="object-cover h-[140px]  w-full"
                />

                <div className="px-[1rem] pt-[1rem] pb-[1.5rem]">
                  <h3 className="text-[#1f1d21] group-hover:text-[#bc0031] group-hover:underline  text-[24px] leading-[27.6px]  mb-4  font-semibold  ">
                    {item.title}
                  </h3>
                  <p className=" text-[#1f1d21] text-[16px] leading-[28px] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <span className="text-[#bd0032] text-[16px] cursor-pointer  pr-3 font-normal leading-[19px] mt-[16px]  underline ml-auto flex items-center justify-end">
          More News <IoIosArrowRoundForward />{" "}
        </span>
      </div>
    </div>
  );
};
