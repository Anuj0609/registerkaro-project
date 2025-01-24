import React from "react";

export default function Video() {
  return (
    <div className="bg-[#1C4670]">
      <div className="px-4 md:px-[70px] pt-10 md:pt-14 flex flex-col md:flex-row md:space-x-[92px] space-y-8 md:space-y-0">
        <div className="flex flex-col pt-4 pb-8 md:pb-11">
          <div
            className="text-left font-inter font-bold text-[24px] md:text-[34px] leading-[32px] md:leading-[40px] tracking-[-0.015em] text-white pb-4 md:pb-5"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Our Video Introductions
          </div>
          <div
            className="font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.01em] text-left text-[#AAB5CD] pb-8 md:pb-12"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </div>

          <div className="flex flex-row space-x-3 pb-6">
            <div>
              <img src="./V1.png" className=" md:w-14 md:h-14" alt="Icon 1" />
            </div>
            <div>
              <div
                className="font-inter text-[18px] md:text-[22px] font-bold leading-[26px] md:leading-[30px] tracking-[-0.01em] text-left text-white pb-2"
                style={{
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Explore ideas together
              </div>
              <div
                className="font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.01em] text-left text-[#AAB5CD]"
                style={{
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-3">
            <div>
              <img src="./V2.png" className=" md:w-14 md:h-14" alt="Icon 2" />
            </div>
            <div>
              <div
                className="font-inter text-[18px] md:text-[22px] font-bold leading-[26px] md:leading-[30px] tracking-[-0.01em] text-left text-white pb-2"
                style={{
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Bring those ideas to life
              </div>
              <div
                className="font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.01em] text-left text-[#AAB5CD]"
                style={{
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[640px] h-auto md:h-[420px] flex justify-center md:justify-end pb-12">
          <a
            href="https://www.youtube.com/watch?v=your_video_id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./V-y.png"
              alt="Video Thumbnail"
              className="w-[90%] md:w-full h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
