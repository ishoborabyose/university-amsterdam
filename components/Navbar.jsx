import React from "react";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiFillRightSquare } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="shadow-shadow1 bg-white fixed z-10 w-full">
      <div
        className={`flex justify-between duration-500 ease-in-out  items-center sm:py-1  max-w-[89rem] px-3 mx-auto ${
          scrolled ? "py-1" : "py-[21px]"
        }`}
      >
        {" "}
        {scrolled ? (
          <img
            className="object-cover w-[32px] cursor-pointer h-[45px] sm:hidden "
            src="/images/small.PNG"
          />
        ) : (
          <img
            className="w-[381px] object-cover cursor-pointer h-[42px] sm:hidden"
            src="/images/full.PNG"
          />
        )}
        <img className="object-cover sm:block hidden" src="/images/small.PNG" />
        <div className="flex items-center gap-[12px] sm:hidden ">
          <div className=" relative   flex mr-[1px] ">
            <div className=" absolute top-[30%] border-l pl-2 left-[360px]">
              <CiSearch className="w-5 h-5  cursor-pointer" />
            </div>
            <input
              placeholder="Search..."
              className="w-[400px] h-[42px] rounded-[4px] text-[#1f1d20] leading-[40px] pr-[54px]  pl-[12px]  border"
            />
          </div>
          <button className="flex group  items-center  px-[0.3rem] w-fit">
            <span className="py-[0.3rem] group-hover:underline ">
              Compare programmes
            </span>{" "}
            <CiHeart className="w-[42px] h-[42px] group-hover:bg-transparent group-hover:shadow-hov group-hover:duration-300 " />
          </button>
          <button className="py-[8.4px]  px-[4px] w-[42px] h-[42px] text-center items-center leading-[16px] hover:duration-300 hover:shadow-hov justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px] bg-white border border-[#1f1d21]">
            NL
          </button>
        </div>
        <div className="hidden  sm:flex gap-3">
          <button className="flex items-center gap-[5px] px-[0.3rem] w-fit">
            <CiHeart className="w-[42px] h-[42px] " />
          </button>
          <button className="py-[8.4px]  px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px] bg-white border border-[#1f1d21]">
            <CiSearch className="w-5 h-5  cursor-pointer" />
          </button>
          <button className="py-[8.4px] px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px] bg-white border border-[#1f1d21]">
            NL
          </button>
          {show ? (
            <button
              onClick={() => setShow(!show)}
              className="py-[8.4px]  px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px]  border border-[#1f1d21] bg-[#1f1d21]"
            >
              <VscClose className="w-5 h-5 text-white  cursor-pointer" />
            </button>
          ) : (
            <button
              onClick={() => setShow(!show)}
              className="py-[8.4px]  px-[10px]  leading-[16px] justify-center gap-[8px] flex font-bold text-[#1f1d21] rounded-[2px]  border border-[#1f1d21] bg-[#1f1d21]"
            >
              <FiMenu className="w-5 h-5 text-white  cursor-pointer" />
            </button>
          )}

          {show && (
            <div className="absolute left-0 top-20  w-full h-[224px] bg-[#f5f5f5] pt-[12px] px-[20px] pb-[16px] text-[#1f1d21]">
              <span className="text-[#bc0031]">Home</span>
              <div className="grid grid-cols-1 font-normal mt-3  gap-2 ">
                {["education", "research", "news", "about", "library"].map(
                  (item, index) => {
                    return (
                      <span className="border-t-2 flex items-center gap-1 border-t-white text-[16px] leading-[25px] hover:text-[#bc0031] hover:border-b-2 hover:border-b-[#bc0031]">
                        <AiFillRightSquare className="bg-black text-white" />{" "}
                        {item}
                      </span>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
