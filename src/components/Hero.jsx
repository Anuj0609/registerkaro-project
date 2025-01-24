import React from "react";
import { FaStar } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";

export default function Hero() {
  const stars = [1, 2, 3, 4];
  const stats = [
    {
      icon: (
        <AiTwotoneAppstore className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] bg-white" />
      ),
      value: "4.5+",
      label: "Customer Rating",
    },
    {
      icon: (
        <img
          src="./H-icon.png"
          className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] bg-white"
        />
      ),
      value: "20,000+",
      label: "Clients",
    },
    {
      icon: (
        <img
          src="./H-2icon.png"
          className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] bg-white"
        />
      ),
      value: "99.8%",
      label: "Financial Stability",
    },
  ];

  return (
    <div className="pl-5 md:pl-[70px] md:py-14 flex flex-col md:flex-row relative bg-[linear-gradient(113.91deg,_#FFFFFF_8%,_rgba(255,_240,_220,_0.67)_28%,_rgba(237,_246,_255,_0.7)_36%)] pt-10">
      <div className="md:space-y-6 w-full md:max-w-[1300px] space-y-4">
        <div className="flex flex-row items-center gap-1">
          <FaStar className="text-yellow-500" />
          <div>Google Rating</div>
          <div className="flex flex-row items-center gap-1">
            {stars.map((_, index) => (
              <FaStar key={index} className="bg-yellow-500 text-white" />
            ))}
          </div>
        </div>
        <div className="font-inter font-medium text-xl md:text-[47.85px] md:leading-[60px] tracking-[-1.5px]">
          Your trusted partner <br />
          for compliance business needs
        </div>
        <hr className="h-[1px] w-10 bg-[#F60014] border-0" />
        <div className="font-inter text-base md:text-[20px] font-normal leading-6 md:leading-[28.8px] text-[#4F4F4F] text-left max-w-full md:max-w-[678px]">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various,{" "}
          <span className="font-inter font-bold">registrations</span>,{" "}
          <span className="font-inter font-bold">tax filings</span>, and other{" "}
          <span className="font-inter font-bold">legal matters</span>.
        </div>

        <div className="flex flex-wrap md:flex-row items-center justify-start md:justify-between w-full md:w-[584px] gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-1 md:gap-3"
            >
              {stat.icon}
              <div className="flex flex-col">
                <div className="font-inter font-extrabold text-xs md:text-2xl bg-gradient-to-b from-[#FFA229] to-[#2F5795] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="font-lato font-normal text-xs md:text-sm text-[#4F4F4F]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <button className="bg-[#1C4670] py-2 px-3 md:py-4 md:px-12 font-inter font-extrabold text-xs md:text-[16px] leading-5 md:leading-[20px] tracking-[0.02] text-white rounded-[4px]">
            Talk An Expert
          </button>
          <a
            href="https://www.youtube.com/watch?v=yourvideoid" // Replace with your YouTube video or channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <img
              src="./H-youtube.png"
              className="md:w-6 md:h-6 w-3 h-3"
              alt="YouTube"
            />
            <div className="font-inter font-semibold text-xs md:text-[16px] leading-5 md:leading-[26px]">
              See how it works
            </div>
          </a>
        </div>
      </div>

      <div>
        <div className="md:absolute md:top-5 md:right-0 space-y-4 md:space-y-[18px] py-5 md:py-0">
          <div className="bg-white border px-5 py-3 md:py-4 rounded-l-xl font-inter font-semibold text-sm md:text-[14px] leading-5 md:leading-[18px] tracking-[0.4px]">
            Annual Compliance
          </div>
          <div className="bg-white border px-5 py-3 md:py-4 rounded-l-xl font-inter font-semibold text-sm md:text-[14px] leading-5 md:leading-[18px] tracking-[0.4px]">
            Payroll Services
          </div>
          <div className="bg-white border px-5 py-3 md:py-4 rounded-l-xl font-inter font-semibold text-sm md:text-[14px] leading-5 md:leading-[18px] tracking-[0.4px]">
            Company Formation
          </div>
          <div className="bg-white border px-5 py-3 md:py-4 rounded-l-xl font-inter font-semibold text-sm md:text-[14px] leading-5 md:leading-[18px] tracking-[0.4px]">
            Annual Compliance
          </div>
        </div>
        <div className="flex flex-row md:block items-center gap-2 md:gap-0 py-5 md:py-0">
          <img
            src="./H-search.png"
            className="w-[300px] h-[240px] md:w-[600px] md:h-[485px] md:absolute  md:bottom-0  md:right-10"
          />
          <img
            src="./H-arrow.png"
            className="w-[120px] h-[100px] md:w-[230px] md:h-[171px] md:absolute md:bottom-0 md:right-[11px] py-5 md:py-0"
          />
        </div>
      </div>
    </div>
  );
}
