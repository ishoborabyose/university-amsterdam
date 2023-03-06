import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  return (
    <div
      className={` bg-[#F5F5F5]  pt-[85px] shadow-shadow2 sm:hidden duration-500`}
    >
      <div className="flex  mx-auto max-w-[89rem] px-3">
        <div className="flex items-center ">
          {[
            "education",
            "research",
            "news & Events",
            "about the Uva",
            "library",
          ].map((items, index) => {
            return (
              <div key={index} className="group ">
                <Link
                  href=""
                  className="text-[#1f1d21] group-hover:text-[#bc0031] group-hover:border-b-2 group-hover:border-b-[#bc0031]  text-[20px] leading-[32px] flex font-normal mr-[48px] pb-[8.4px] border-transparent border-b-2 pt-[12px]"
                >
                  {items}
                </Link>

                <div
                  className={`absolute top-[140px] p-4 z-10 ${
                    items == "education" ? "hidden group-hover:block" : "hidden"
                  } w-[300px]  bg-[#f5f5f5] pt-[12px] px-[20px] pb-[16px] text-[#1f1d21]`}
                >
                  <div className="grid text-[16px] leading-[25px]  font-normal grid-cols-1 gap-2 ">
                    {[
                      "bachelors",
                      "masters",
                      "professional",
                      "summer",
                      "open",
                      "exchange",
                    ].map((items, index) => {
                      return (
                        <div key={index} className="">
                          <Link
                            href=""
                            className="hover:text-[#bc0031] hover:border-b-2 hover:border-b-[#bc0031]"
                          >
                            {items}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`absolute  top-[140px] p-4 z-10  ${
                    items == "research" ? "hidden group-hover:block" : "hidden"
                  }   w-[300px]  bg-[#f5f5f5] pt-[12px] px-[20px] pb-[16px] text-[#1f1d21]`}
                >
                  <div className="grid grid-cols-1 font-normal  gap-2 ">
                    {["Research at the UvA", "PhD"].map((items, index) => {
                      return (
                        <div key={index} className="">
                          <Link
                            href=""
                            className=" text-[16px] leading-[25px] hover:text-[#bc0031] hover:border-b-2 hover:border-b-[#bc0031]"
                          >
                            {items}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`absolute  top-[140px] z-10 p-4  ${
                    items == "news & Events"
                      ? "hidden group-hover:block"
                      : "hidden"
                  }  w-[300px]  bg-[#f5f5f5] pt-[12px] px-[20px] pb-[16px] text-[#1f1d21]`}
                >
                  <div className="font-normal grid grid-cols-1  gap-2 ">
                    {[
                      "News",
                      "Events",
                      "Press Office",
                      "Coronavirus information",
                      "Ukraine information and support",
                    ].map((items, index) => {
                      return (
                        <div key={index} className="">
                          <Link
                            href=""
                            className="text-[16px] leading-[25px] hover:text-[#bc0031] hover:border-b-2 hover:border-b-[#bc0031] "
                          >
                            {items}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`absolute  top-[140px] z-10 p-4  ${
                    items == "about the Uva"
                      ? "hidden group-hover:block"
                      : "hidden"
                  }  w-[300px] bg-[#f5f5f5] pt-[12px] px-[20px] pb-[16px] text-[#1f1d21]`}
                >
                  <div className="grid grid-cols-1 gap-2 font-normal">
                    {[
                      "About the University",
                      "alumni",
                      "contact and locations",
                      "organisation",
                      "Policy and regulations",
                      "Working at the UvA",
                    ].map((items, index) => {
                      return (
                        <div key={index} className="">
                          <Link
                            href=""
                            className=" text-[16px] leading-[25px] hover:text-[#bc0031] hover:border-b-2 hover:border-b-[#bc0031]"
                          >
                            {items}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
