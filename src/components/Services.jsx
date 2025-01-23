import React from "react";

function Services() {
  const serviceItems = [
    {
      icon: "./S1.png",
      title: "Company Formation",
      detail: "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: "./S2.png",
      title: "Company Secretarial Services",
      detail:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: "./S3.png",
      title: "Virtual Office Address",
      detail:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: "./S4.png",
      title: "Annual Compliance Services",
      detail: "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: "./S5.png",
      title: "Payroll Services",
      detail: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: "./S6.png",
      title: "Bookkeeping Services",
      detail:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] pt-10 px-6 md:px-[70px] flex justify-center flex-col">
      <div className="font-inter text-[#EB8D15] text-[14px] font-normal leading-[21px] tracking-[1.5px] text-center">
        WELCOME TO REGISTERKARO.IN
      </div>
      <div className="font-inter text-[#272D37] text-[24px] md:text-[32px] font-extrabold leading-[30px] md:leading-[38.4px] tracking-[0.16px] text-center py-[10px]">
        Explore Our Services
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {serviceItems.map((item, index) => (
          <div
            key={index}
            className="py-6 flex flex-col items-center text-center space-x-0 md:space-x-10"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
            <div className="font-inter text-[18px] md:text-[20px] font-extrabold leading-[21.6px] tracking-[0.16px] text-center text-[#272D37] mb-2">
              {item.title}
            </div>
            <div className="font-inter text-[16px] md:text-[17.6px] font-light leading-[24px] md:leading-[26.4px] tracking-[0.16px] text-center text-[#282728] mb-4 px-6 md:px-20">
              {item.detail}
            </div>
            <button className="text-[#001038] py-2 px-4 rounded-md text-sm font-medium flex flex-row items-center gap-2">
              Learn More
              <img src="./S-learn.png" alt="" />
            </button>
          </div>
        ))}
      </div>

      <button className="bg-[#1C4670] md:py-4 md:px-8 py-2 px-4 mx-auto rounded-md mb-14 text-white mt-6">
        See All Services
      </button>
    </div>
  );
}

export default Services;
