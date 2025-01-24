import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#1C4670]">
      <div className="text-white flex flex-row space-x-5 items-center md:justify-end container mx-auto justify-between py-2">
        <div className="flex flex-row space-x-1 items-center">
          <img
            src="/N-MailSymbol.png"
            alt="Mail Symbol"
            className="w-[15px] h-[11px]"
          />
          <a
            href="mailto:support@registerkaro.in"
            className="font-inter text-sm font-normal leading-[17.14px]"
          >
            www.registerkaro.in
          </a>
        </div>

        <img src="/before.png" alt="Before Icon" className="md:block hidden" />

        <a
          href="tel:+918447746183"
          className="flex flex-row items-center space-x-1"
        >
          <img
            src="/N-CallSymbol.png"
            alt="Call Symbol"
            className="w-[15px] h-[11px]"
          />
          <div className="font-inter text-sm font-normal leading-[17.14px]">
            +918447746183
          </div>
        </a>

        <img src="/before.png" alt="Before Icon" className="md:block hidden" />

        <div className="flex flex-row space-x-2">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Insta.svg"
              className="w-[17.09px] h-[16.46px]"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Fb.svg"
              className="w-[17.09px] h-[16.36px]"
              alt="Facebook"
            />
          </a>
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Twiter.svg"
              className="w-[18.31px] h-[14.65px]"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.pinterest.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Pintrest.svg"
              className="w-[17.36px] h-[17.36px]"
              alt="Pinterest"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
