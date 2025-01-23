import React from "react";

export default function Numbers() {
  const stats = [
    {
      number: "1M",
      label: "Customers",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
    {
      number: "12",
      label: "Years of Excellence",
      gradient: "from-[#F53843] to-[#2F5795]",
    },
    {
      number: "41",
      label: "R&D Engineers",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
    {
      number: "71",
      label: "Countries",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
    {
      number: "3287",
      label: "PARTNERS",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
    {
      number: "41",
      label: "Awards Received",
      gradient: "from-[#FFA229] to-[#2F5795]",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-8 pt-12 pb-[83px] px-[20px] sm:px-[75px]">
      <div className="space-y-2 flex flex-col justify-center items-center">
        <div className="font-inter text-[14px] sm:text-[16px] font-normal leading-[21px] sm:leading-[26px] tracking-[1.5px] text-center text-[#EB8D15]">
          Why Register karo
        </div>
        <div className="font-inter text-[24px] sm:text-[32px] font-bold leading-[32px] sm:leading-[38.4px] tracking-[0.16px] text-center text-[#3C2109]">
          Some Numbers are important
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-[89px] sm:space-y-0 space-y-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row items-center space-x-0">
              <div
                className={`font-inter text-[32px] sm:text-[42px] font-bold leading-[1.2] text-center ${
                  stat.gradient
                    ? `bg-gradient-to-t ${stat.gradient} bg-clip-text text-transparent`
                    : ""
                } pt-1`}
              >
                {stat.number}
              </div>
              {stat.gradient && (
                <div className="font-montserrat text-[20px] sm:text-[25.2px] font-extrabold text-center bg-gradient-to-r from-[#FFA229] to-[#2F5795] bg-clip-text text-transparent -mt-4">
                  +
                </div>
              )}
            </div>
            <div className="font-inter text-[14px] sm:text-[16px] font-bold leading-[21px] sm:leading-[21px] text-center text-[#181617]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
