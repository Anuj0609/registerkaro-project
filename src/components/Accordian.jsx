import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faq = [
    {
      id: 1,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from desktop with this software.",
    },
    {
      id: 2,
      question: "How does the recovery process work?",
      answer:
        "The recovery process scans your device and retrieves files that have not been overwritten.",
    },
    {
      id: 3,
      question: "Is this software compatible with Mac and Windows?",
      answer: "Yes, the software is compatible with both Mac and Windows.",
    },
    {
      id: 4,
      question: "Does it support recovery from external drives?",
      answer:
        "Absolutely! You can recover data from external drives, USBs, and memory cards.",
    },
    {
      id: 5,
      question: "Is the data recovery process secure?",
      answer:
        "Yes, the recovery process ensures that your data remains private and secure.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-6 sm:px-10 md:px-20 pt-8 pb-10 space-y-6">
      <div className="font-inter text-[14px] font-normal leading-[21px] tracking-[1.5px] text-center text-[#EB8D15]">
        FAQ
      </div>
      <div className="font-inter text-[24px] sm:text-[32px] font-bold leading-[38.4px] tracking-[0.16px] text-center text-[#3C2109] mb-6">
        Frequent Ask Questions
      </div>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className="flex border border-gray-300 rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-1 bg-gradient-to-b from-[#FFA229] to-[#2F5795]"></div>
            <div className="flex-1">
              <div
                className="flex justify-between items-center p-3 sm:p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="font-inter text-[14px] sm:text-[16px] font-medium text-[#1C4670]">
                  {item.question}
                </div>
                <div className="text-black font-bold text-[20px] sm:text-[24px]">
                  {activeIndex === index ? "-" : ">"}
                </div>
              </div>

              {activeIndex === index && (
                <div className="p-3 sm:p-4 font-inter text-[12px] sm:text-[14px] text-[#3C2109] bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#1C4670] flex flex-row px-5 py-3 items-center text-white rounded gap-1 justify-center mx-auto mt-12">
        Show more <img src="./W-arrow.png" alt="" />
      </button>
    </div>
  );
}
