import React from "react";

export default function Manage() {
  return (
    <div className="relative px-5 md:pl-[72px] sm:px-6 flex flex-col space-y-8 bg-[#1C4670] overflow-hidden text-white py-[58px]">
      <div className="w-full sm:w-[540px] flex items-start flex-col space-y-8">
        <div className="font-inter text-[24px] sm:text-[32px] font-extrabold leading-[32px] sm:leading-[40px] tracking-[0.16px] text-left justify-start">
          Manage Your Services by your Mobile Phone
        </div>
        <div className="font-inter text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[26px] text-left text-[#AAB5CD]">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </div>
        <div>Get the App</div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center sm:justify-start">
          <a
            href="https://apps.apple.com/app/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row items-center bg-white text-black py-1 px-3 rounded space-x-2">
              <img src="./Apple.png" alt="Apple logo" />
              <div>
                <div className="font-poppins text-[10px] sm:text-[11px] font-normal leading-[19.42px] text-left">
                  Get it on
                </div>
                <div className="font-poppins text-[12px] sm:text-[14px] font-semibold leading-[22px] text-left">
                  App Store
                </div>
              </div>
            </button>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.yourapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row items-center bg-white text-black py-1 px-3 rounded space-x-2">
              <img src="Android.png" alt="Android logo" />
              <div>
                <div className="font-poppins text-[10px] sm:text-[11px] font-normal leading-[19.42px] text-left">
                  Get it on
                </div>
                <div className="font-poppins text-[12px] sm:text-[14px] font-semibold leading-[22px] text-left">
                  Android Store
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>

      <img
        src="./Manage3.png"
        className="absolute top-[194px] right-[391px] w-[308px] h-[619px] hidden md:block"
        alt="Manage App"
      />
      <img
        src="Manage3.png"
        className="absolute top-[26px] right-[52px] w-[308px] h-[619px] hidden md:block"
        alt="Manage App"
      />
    </div>
  );
}
