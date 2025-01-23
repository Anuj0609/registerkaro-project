import React from "react";

function About() {
  return (
    <div className="pl-1 md:pl-[70px] py-[40px] md:py-[68px] flex flex-col md:flex-row relative">
      <div className="flex-1">
        <div className="font-inter text-[12px] md:text-[14px] font-normal leading-[21px] tracking-[1.5px] text-left text-[#EB8D15]">
          WELCOME TO REGISTERKARO.IN
        </div>
        <div className="font-inter text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[40px] tracking-[-0.02em] text-[#272D37] mt-2">
          About <span className="text-[#FFA229]">Register Karo</span>
        </div>
        <p className="mt-4 md:mt-6 w-full md:w-[644px] h-auto gap-[15px] md:pr-[70px] font-inter font-normal text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[0.16px] text-left text-[#000000]">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
          <br />I would strongly recommend their services to any organization
          that is looking for solid, reliable, and predictable outcomes.
        </p>

        <button className="bg-[#1C4670] py-3 md:py-4 px-4 md:px-5 mt-6 items-center rounded-md text-white flex flex-row gap-1">
          Learn More <img src="./A-learn.png" alt="Learn More Icon" />
        </button>
      </div>

      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          src="./A-group.png"
          className="w-[90%] md:w-[584px] h-auto md:h-[422px] rounded-lg pt-[6px]"
          alt="About Us"
        />
      </div>

      <img
        src="./A-border2.png"
        className="hidden md:block absolute bottom-[70px] right-0"
        alt="Decorative Border 2"
      />
      <img
        src="./A-border1.png"
        className="hidden md:block absolute right-0"
        alt="Decorative Border 1"
      />
    </div>
  );
}

export default About;
