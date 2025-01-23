import React from "react";

function TrustedBySection() {
  return (
    <div className="flex flex-col items-center justify-between py-[70px] px-3  md:px-[70px]">
      <div className="font-inter font-extrabold text-[#272D37] text-center text-base md:text-[22px] md:leading-[26.63px] sm:text-[18px] sm:leading-[24px]">
        Trusted By Over 100+ Startups and freelance businesses
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
        <img
          src="./T-oracle.png"
          className="w-auto h-auto sm:w-[150px] sm:mb-4"
        />
        <img
          src="./T-morpheus.png"
          className="w-auto h-auto sm:w-[150px] sm:mb-4"
        />
        <img
          src="./T-morpheus.png"
          className="w-auto h-auto sm:w-[150px] sm:mb-4"
        />
        <img
          src="./T-monday.png"
          className="w-auto h-auto sm:w-[150px] sm:mb-4"
        />
        <img
          src="./T-segment.png"
          className="w-auto h-auto sm:w-[150px] sm:mb-4"
        />
      </div>
    </div>
  );
}

export default TrustedBySection;
