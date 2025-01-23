import React from "react";

export default function Manage() {
  return (
    <div className="px-5 md:pl-[72px] sm:px-6 md:px-[72px] flex flex-col space-y-8 relative w-full h-[491px] bg-[#1C4670] overflow-hidden text-white">
      <div className="max-w-[540px] flex items-center flex-col space-y-8 justify-center h-full">
        <div className="font-inter text-[24px] sm:text-[32px] font-extrabold leading-[32px] sm:leading-[40px] tracking-[0.16px] text-left">
          Manage Your Services by your Mobile Phone
        </div>
        <div className="font-inter text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[26px] text-left text-[#AAB5CD]">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.
        </div>

        <div className="text-center sm:text-left">Get the App</div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center sm:justify-start">
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
        </div>
      </div>

      <img
        src="./Manage1.png"
        className="absolute top-[190px] left-[740px] sm:left-[60%] sm:top-[120px] sm:w-[50%] md:left-[740px]"
        alt="Manage App"
      />
      <img
        src="Manage1.png"
        className="absolute top-[26px] left-[1079px] sm:left-[70%] sm:top-[20px] sm:w-[50%] md:left-[1079px]"
        alt="Manage App"
      />
    </div>
  );
}
