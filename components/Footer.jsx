import React from "react";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";

import { AiFillUpSquare } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#1F1D20]">
      <div className=" max-w-[89rem] px-3 mx-auto mt-[64px] pt-[36px]">
        <div className="flex sm:justify-center justify-between items-center">
          <img src="/images/logo-footer.PNG" className="sm:w-[90%]" alt="" />
          <AiFillUpSquare className="text-[#C7C6C7]  h-[42px] w-[42px] bg-[#1f1d21]" />
        </div>

        <div className="grid sm:grid-cols-1 grid-cols-4 sm:mt-[36px] mt-[48px] ">
          <div className="flex flex-col">
            {[
              "education & Reasearch",
              "bachelors",
              "minors",
              "masters",
              "professional",
              "exchange",
              "summer",
              "phd",
              "research",
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0
                      ? "text-[16px] leading-[16px] text-white font-semibold mb-[20px] flex sm:justify-between sm:pb-3 sm:pt-6  sm:border-t sm:border-t-white items-center gap-0.5 "
                      : "text-[14px] leading-[22px] text-white cursor-pointer font-normal mb-[8px] flex items-center gap-0.5 sm:hidden "
                  } `}
                >
                  <BsChevronRight
                    className={`${index === 0 ? "hidden" : ""} sm:hidden`}
                  />{" "}
                  {item} <BsChevronDown className="sm:block hidden" />
                </span>
              );
            })}
          </div>
          <div>
            {[
              "go to",
              "webmail",
              "webmail",
              "library",
              "canvas",
              "sis",
              "timetable",
              "course",
              "vacancies",
              "uvashopnl",
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0
                      ? "text-[16px] leading-[16px] text-white font-semibold mb-[20px] flex sm:justify-between sm:py-3 sm:border-t sm:border-t-white items-center gap-0.5 "
                      : "text-[14px] leading-[22px] cursor-pointer text-white font-normal mb-[8px] flex items-center gap-0.5 sm:hidden "
                  } `}
                >
                  <BsChevronRight
                    className={`${index === 0 ? "hidden" : ""} sm:hidden`}
                  />{" "}
                  {item} <BsChevronDown className="sm:block hidden" />
                </span>
              );
            })}
          </div>

          <div>
            {[
              "information for",
              "prospective",
              "current",
              "staff",
              "journalists",
              "alumni",
              "donors",
              "employers",
              "external",
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0
                      ? "text-[16px] leading-[16px] text-white font-semibold mb-[20px] flex sm:justify-between sm:py-3 sm:border-t sm:border-t-white items-center gap-0.5 "
                      : "text-[14px] leading-[22px] cursor-pointer text-white font-normal mb-[8px] flex items-center gap-0.5 sm:hidden "
                  } `}
                >
                  <BsChevronRight
                    className={`${index === 0 ? "hidden" : ""} sm:hidden`}
                  />{" "}
                  {item} <BsChevronDown className="sm:block hidden" />
                </span>
              );
            })}
          </div>

          <div>
            {[
              "contact",
              "contact information",
              "locations",
              "contact student services",
              "the uva and social media",
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0
                      ? "text-[16px] leading-[16px] text-white font-semibold mb-[20px] flex sm:justify-between sm:py-3 sm:border-t sm:border-t-white items-center gap-0.5 "
                      : "text-[14px] leading-[22px] cursor-pointer text-white font-normal mb-[8px] flex items-center gap-0.5 sm:hidden "
                  } `}
                >
                  <BsChevronRight
                    className={`${index === 0 ? "hidden" : ""} sm:hidden`}
                  />{" "}
                  {item} <BsChevronDown className="sm:block hidden" />
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" sm:border-none border-t border-t-white mt-[36px]">
        <div className="max-w-[90rem] flex justify-between sm:flex-col-reverse sm: gap-6 px-3 mx-auto py-[24px]">
          <div className="flex sm:grid sm:grid-cols-3  items-center gap-[6px]">
            {[
              "copyright uva 2023",
              "about this site",
              "privacy",
              "cookiesettings",
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0 ? "sm:col-span-4  " : " "
                  } text-[14px]  leading-[22px] cursor-pointer hover:text-white sm:text-center font-normal text-[#d6d6d6]`}
                >
                  {item}
                </span>
              );
            })}
          </div>

          <div className="flex sm:grid sm:grid-cols-6 items-center gap-[6px]">
            {[
              "Follow UvA on social media",
              <FaFacebookF />,
              <FaTwitter />,
              <FaLinkedin />,
              <FaInstagram />,
              <FaWhatsapp />,
              <FaYoutube />,
            ].map((item, index) => {
              return (
                <span
                  className={`${
                    index === 0
                      ? "text-[14px] leading-[22px] sm:mb-4 sm:col-span-6 sm:text-center font-normal text-[#d6d6d6] "
                      : "text-[#d6d6d6] w-[22px] h-[19px] cursor-pointer sm:mx-auto "
                  } `}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
