import React from "react";

function SubHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-1 container mx-auto">
      <div className="mb-4 md:mb-0">
        <img src="./S-brand.png" className="w-[222px] h-[56.8px]" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around font-semibold md:text-[16px] text-[12px] leading-6 md:gap-8 w-full md:w-auto gap-2">
        <div className="text-center md:text-left">Home</div>
        <div className="flex flex-row items-center justify-center md:justify-start">
          <div>Our Services</div>
          <img src="./S-Icon-Angle.png" className="w-[10px] h-[6px]" />
        </div>
        <div className="text-center md:text-left">Blog</div>
        <div className="text-center md:text-left">Contact Us</div>
        <div className="text-center md:text-left">About us</div>
        <img src="./S-search.png" className="my-2 md:my-0" />
        <button className="text-sm bg-[#FFA229] md:px-4 md:py-2 mt-2 md:mt-0 px-2 py-1 rounded text-white">
          Talk An Expert
        </button>
      </div>
    </div>
  );
}

export default SubHeader;
