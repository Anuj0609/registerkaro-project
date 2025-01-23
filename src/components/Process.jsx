import React from "react";

export default function Process() {
  const items = [
    {
      image: "./P1.png",
      title: "Fill up Application Form",
      bgColor: "#EB5757",
    },
    {
      image: "./P2.png",
      title: "Make Online Payment",
      bgColor: "#27AE60",
    },
    {
      image: "./P3.png",
      title: "Executive will Process Application",
      bgColor: "#F2994A",
    },
    {
      image: "./P4.png",
      title: "Get Confirm Mail",
      bgColor: "#828282",
    },
  ];

  return (
    <div className="bg-[#FFA229] px-4 sm:px-10 lg:px-[70px] py-[52px]">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-[14px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-[14px] sm:gap-[14px]"
          >
            <div
              className={`flex justify-center items-center w-[52px] h-[52px] rounded-full`}
              style={{ backgroundColor: item.bgColor }}
            >
              <img src={item.image} alt={item.title} className="w-6 h-6" />
            </div>
            <h3
              className="text-[16px] sm:text-[18px] font-semibold leading-[28px] text-center"
              style={{
                fontFamily: "Inter",
                color: "#3C2109",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
