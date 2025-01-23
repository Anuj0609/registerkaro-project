import React from "react";

export default function Industry() {
  return (
    <div className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] justify-center items-center flex flex-col text-white px-[20px] sm:px-[232px] py-[32px] sm:py-[64px] space-y-8">
      <div className="space-y-2 flex flex-col justify-center items-center">
        <div
          className="text-[14px] sm:text-[16px] font-semibold leading-[20px] tracking-[-0.1px] text-center"
          style={{
            fontFamily: "Inter",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          1% OF THE INDUSTRY
        </div>
        <div
          className="text-[24px] sm:text-[32px] font-bold leading-[32px] sm:leading-[40px] tracking-[-0.015em] text-center"
          style={{
            fontFamily: "Inter",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Welcome to your new digital reality. Now.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-y-0 sm:space-x-0 w-full sm:w-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-[420px] h-[46px] px-5 py-3 gap-2 text-black 
             rounded-t-md sm:rounded-l-md sm:rounded-r-none"
        />

        <button
          className="bg-[#FFA229] text-[15px] font-semibold leading-[22px] px-5 py-3 
                     w-full sm:w-auto text-center
                     rounded-b-md sm:rounded-r-md sm:rounded-l-none sm:rounded-b-none"
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-10">
        <div className="flex flex-row gap-4 justify-center sm:justify-start">
          <img src="./Industry1.png" className="w-5 h-5" />
          <div
            className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-left"
            style={{
              fontFamily: "Inter",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Instant results
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center sm:justify-start">
          <img src="./Industry1.png" className="w-5 h-5" />
          <div
            className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-left"
            style={{
              fontFamily: "Inter",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            User-friendly interface
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center sm:justify-start">
          <img src="./Industry1.png" className="w-5 h-5" />
          <div
            className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-left"
            style={{
              fontFamily: "Inter",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Personalized customization
          </div>
        </div>
      </div>
    </div>
  );
}
