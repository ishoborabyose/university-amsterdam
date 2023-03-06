import React from "react";

export const Goto = () => {
  return (
    <div className="bg-white max-w-[89rem] px-3 mx-auto pb-[64px] mt-[64px]">
      <h1
        className={`text-[#1f1d21]  text-[30px] leading-[48px] font-semibold mb-[24px]`}
      >
        Go to:
      </h1>

      <div className=" grid grid-cols-3 sm:grid-cols-1 gap-[24px] ">
        {[
          "Alumni",
          "UVA Experts",
          "PhD",
          "Staff website",
          "Working at the UVA",
          "Student website",
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#ffffff] cursor-pointer  group hover:shadow-hov3 hover:duration-300 ease-in-out rounded-sm py-[16px] px-[24px]  gap-[8px] border"
            >
              <div>
                <h1 className=" text-[24px] sm:text-[18px] mb-[20px] group-hover:text-[#bc0031] group-hover:underline leading-[27.6px] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
