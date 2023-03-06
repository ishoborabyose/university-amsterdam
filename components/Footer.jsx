import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiFillUpSquare } from "react-icons/ai";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div className="bg-[#1F1D20]">
      <div className=" max-w-[89rem] px-3 mx-auto mt-[64px] pt-[36px]">
        <div className="flex sm:justify-center justify-between items-center">
          <img src="/images/logo-footer.PNG" className="sm:w-[90%]" alt="" />
          <AiFillUpSquare className="text-[#C7C6C7]  h-[42px] w-[42px] bg-[#1f1d21]" />
        </div>

        <ul className="grid sm:grid-cols-1  gap-4 mt-12 mb-6  text-white grid-cols-4">
          {[
            {
              title: "Education & research",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Got to",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Infromation for",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Contact",
              list: [
                "Contact information",
                "Locations",
                "Contact Student Services",
                "The UvA and social mediaA",
              ],
            },
          ].map((e, i) => (
            <details
              key={i}
              className="space-y-4"
              open={windowWidth > 640 && true}
            >
              <summary className="flex items-center justify-between py-6 sm:border-t cursor-pointer md:py-0 sm:border-t-white ">
                <h5 className="text-base leading-[1.6] font-semibold ">
                  {e?.title}
                </h5>
                <BsChevronDown className="text-2xl text-white duration-300 ease-in-out hidden sm:block group-open:rotate-90" />
              </summary>
              <ul className="mb-6">
                {e.list.map((e, i) => (
                  <li key={i} className="pl-2 py-[.1875rem]">
                    <Link href={e} className="flex items-center gap-1">
                      <MdOutlineKeyboardArrowRight className="text-base " />
                      <p className="text-[87.5%] leading-[27px] ">{e}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </ul>
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
