import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Says() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = new Array(15).fill(null).map((_, index) => ({
    id: index + 1,
    content: {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: `Chris ${index + 1}`,
      position: `President and CEO, PrintReach, USA`,
    },
  }));

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const handleNext = () => {
    if (currentIndex + 3 < cards.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  return (
    <div className="bg-[#1C4670] text-white py-11 px-[70px]">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row justify-between py-5">
          <div className="font-inter text-[32px] font-bold leading-[38.4px] tracking-[0.16px] text-left">
            What people say about us
          </div>
          <div className="flex flex-row space-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`${
                currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-[#FFA229]"
              } hover:text-white text-blue-800 rounded-full w-10 h-10 flex items-center justify-center`}
            >
              <GrPrevious />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex + 3 >= cards.length}
              className={`${
                currentIndex + 3 >= cards.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-[#FFA229]"
              } hover:text-white text-blue-800 rounded-full w-10 h-10 flex items-center justify-center`}
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap overflow-x-auto">
          {cards
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((card) => (
              <div
                key={card.id}
                className="flex flex-col w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%+20px)] bg-white rounded-lg px-4 py-5 space-y-6 mb-6"
              >
                <div className="flex flex-row justify-between">
                  <img src="./SaysP3.png" className="w-[32px]" alt="SaysP3" />
                  <img src="./SaysP4.png" className="w-[120px]" alt="SaysP4" />
                </div>
                <div className="font-inter text-[14px] font-normal leading-[24px] text-left text-[#667085]">
                  {card.content.text}
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <img
                    src="./SaysP5.png"
                    className="w-[60px] h-[60px]"
                    alt="SaysP5"
                  />
                  <div className="flex flex-col space-y-1">
                    <div className="font-inter text-[14px] font-bold leading-[22px] tracking-[0.16px] text-left text-[#3C2109]">
                      {card.content.name}
                    </div>
                    <div className="font-inter text-[12px] font-normal leading-[18px] tracking-[0.16px] text-left text-[#282728]">
                      {card.content.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex / 3 === index
                  ? "bg-[#FFA229]"
                  : "bg-[#D1D1D1] hover:bg-[#FFA229]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
