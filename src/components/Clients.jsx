import React from "react";

function Clients() {
  const clientImages = [
    {
      src: "./c1.png",
      alt: "Image 1",
      className: "w-10 h-10 absolute left-0 top-18",
    },
    {
      src: "./c2.png",
      alt: "Image 2",
      className: "w-16 h-16 absolute left-6 top-[274px]",
    },
    {
      src: "./c3.png",
      alt: "Image 3",
      className: "w-22 h-22 absolute left-[46px] top-[145px]",
    },
    {
      src: "./c4.png",
      alt: "Image 4",
      className: "w-[120px] h-[120px] absolute top-[2px] left-[111px]",
    },
    {
      src: "./c5.png",
      alt: "Image 5",
      className: "w-[120px] h-[120px] absolute top-[233px] left-[163px]",
    },
    {
      src: "./c6.png",
      alt: "Image 6",
      className: "w-22 h-22 absolute top-[108px] left-[240px]",
    },
    {
      src: "./c7.png",
      alt: "Image 7",
      className: "w-16 h-16 absolute top-[23px] left-[323px]",
    },
    {
      src: "./c8.png",
      alt: "Image 8",
      className: "w-22 h-22 absolute top-[206px] left-[339px]",
    },
    {
      src: "./c9.png",
      alt: "Image 9",
      className: "w-[120px] h-[120px] absolute top-[72px] left-[415px]",
    },
    {
      src: "./c10.png",
      alt: "Image 10",
      className: "w-[120px] h-[120px] absolute top-[219px] left-[527px]",
    },
    {
      src: "./c11.png",
      alt: "Image 11",
      className: "w-22 h-22 absolute top-[0px] left-[559px]",
    },
    {
      src: "./c12.png",
      alt: "Image 12",
      className: "w-16 h-16 absolute top-[122px] left-[611px]",
    },
    {
      src: "./c13.png",
      alt: "Image 13",
      className: "w-[120px] h-[120px] absolute top-[169px] left-[692px]",
    },
    {
      src: "./c14.png",
      alt: "Image 14",
      className: "w-[120px] h-[120px] absolute top-[12px] left-[766px]",
    },
    {
      src: "./c15.png",
      alt: "Image 15",
      className: "w-22 h-22 absolute top-[234px] left-[853px]",
    },
    {
      src: "./c16.png",
      alt: "Image 16",
      className: "w-22 h-22 absolute top-[120px] left-[915px]",
    },
    {
      src: "./c17.png",
      alt: "Image 17",
      className: "w-16 h-16 absolute top-[203px] left-[1027px]",
    },
    {
      src: "./c18.png",
      alt: "Image 18",
      className: "w-[120px] h-[120px] absolute top-[23px] left-[1012px]",
    },
    {
      src: "./c19.png",
      alt: "Image 19",
      className: "w-22 h-22 absolute top-[187px] left-[1151px]",
    },
    {
      src: "./c20.png",
      alt: "Image 20",
      className: "w-16 h-16 absolute top-[23px] left-[1167px]",
    },
    {
      src: "./c21.png",
      alt: "Image 21",
      className: "w-[120px] h-[120px] absolute top-[80px] left-[1251px]",
    },
    {
      src: "./c22.png",
      alt: "Image 22",
      className: "w-16 h-16 absolute top-[245px] left-[1279px]",
    },
    {
      src: "./c23.png",
      alt: "Image 23",
      className: "w-22 h-22 absolute top-[198px] left-[1379px]",
    },
    {
      src: "./c24.png",
      alt: "Image 24",
      className: "w-22 h-22 absolute top-[12px] left-[1395px]",
    },
  ];

  return (
    <div className="py-16">
      <div className="space-y-2 px-4 sm:px-10 lg:px-20">
        <div className="text-center text-[#272D37] text-[24px] sm:text-[32px] font-bold leading-[30px] sm:leading-[40px] tracking-[-0.02em]">
          Our Happy Clients
        </div>
        <div className="text-center text-[#666666] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.1px] max-w-[800px] mx-auto">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </div>
      </div>

      <div className="mt-16 relative grid grid-cols-2 sm:grid-cols-4 lg:block lg:w-[1492px] lg:h-[353px] gap-4 lg:gap-0 mx-auto h-96 overflow-hidden ">
        {clientImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`mx-auto lg:${image.className}`}
          />
        ))}
      </div>

      <button className="w-full mt-6 text-[15px] font-semibold text-[#1C4670] leading-[22px] text-center flex flex-row justify-center gap-2 items-center">
        Show more <img src="./C-right.png" alt="Right arrow" />
      </button>
    </div>
  );
}

export default Clients;
