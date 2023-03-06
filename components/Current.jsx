import React from "react";

export const Current = () => {
  return (
    <div className="bg-white max-w-[89rem] px-3 mx-auto sm:mt-[255px] mt-[64px]">
      <div className="flex justify-between">
        <h1
          className={`text-[#1f1d21]  text-[30px] leading-[48px] font-semibold mb-[24px]`}
        >
          Current
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 grid-cols-3 gap-[24px]">
        {[
          {
            img: "https://www.uva.nl/binaries/_ht_1621425617139/cardsmall/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/trap-stairs-roeterseiland.jpg",
            title: "Study in Amsterdam Week 20 - 24 Februarv",
            description:
              "Discover everything an international student needs to know about studying at the UvA.",
          },
          {
            img: "https://www.uva.nl/binaries/_ht_1674056828979/680x190-webp/content/gallery/onderzoek/uva-corporate/impact-stories/de-slimme-stad-donker-2.png",
            title: "The UVA and the smart city",
            description:
              "Find out how our cities are becoming smarter every day. UVA researchers are examining the pitfalls and the potential.",
          },
          {
            img: "https://www.uva.nl/binaries/_ht_1674029674329/680x190-webp/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg",
            title: "Bachelor's Week 17 - 25 March",
            description: "Discover your Bachelor's at the UvA.",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="border group hover:shadow-hov3 hover:duration-300  cursor-pointer"
            >
              <img
                src={item.img}
                className=" w-full object-cover h-[190px] sm:h-[159px]"
              />

              <div className="px-[1rem] pt-[1rem] pb-[1.5rem]">
                <h3 className="text-[#1f1d21] group-hover:text-[#bc0031] group-hover:underline sm:text-[20px]  text-[24px] leading-[27.6px]  mb-4  font-semibold ">
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
    </div>
  );
};
