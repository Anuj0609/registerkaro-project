import React from "react";

export default function Why() {
  const items = [
    {
      image: "./W1.png",
      title: "Confidential & Safe",
      detail: "All your private information is safe with us",
      bgColor: "bg-[#FEF3EF]",
    },
    {
      image: "./W2.png",
      title: "No Hidden Fee",
      detail:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-[#F1FBF3]",
    },
    {
      image: "./W3.png",
      title: "Guaranteed Satisfaction",
      detail:
        "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-[#EDF3FF]",
    },
    {
      image: "./W4.png",
      title: "Expert CA/CS Assistance",
      detail: "Prompt support from our in-house expert professionals",
      bgColor: "bg-[#FBF1FB]",
    },
    {
      image: "./W1.png",
      title: "Trusted by Many",
      detail: "We have a solid reputation among our clients",
      bgColor: "bg-[#27AE600A]",
    },
  ];

  return (
    <div className="md:px-[70px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
          <div className="text-[14px] font-normal leading-[21px] tracking-[1.5px] text-[#EB8D15]">
            About Register Karo
          </div>
          <div className="text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-left text-[#0D1216] font-inter">
            Why Choose Register Karo
          </div>

          <div className="text-[15px] font-normal leading-[22.5px] text-left text-[#6B7280] font-inter">
            We are dedicated to providing exceptional business solutions
            tailored to your needs. From company formation to compliance
            services, our team ensures seamless and reliable execution of your
            business requirements.
          </div>
        </div>
        {items.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} shadow-md rounded-md p-6 flex flex-col items-center text-center`}
            style={{
              width: "288.11px",
              height: "215px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB",
            }}
          >
            <img
              src={item.image}
              alt={`Card ${index + 1}`}
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-lg font-bold text-[#272D37] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#6B7280]">{item.detail}</p>
          </div>
        ))}
        <div className="col-span-1"></div>
        {items.slice(2).map((item, index) => (
          <div
            key={index + 2}
            className={`${item.bgColor} shadow-md rounded-md p-6 flex flex-col items-center text-center`}
            style={{
              width: "288.11px",
              height: "215px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB",
            }}
          >
            <img
              src={item.image}
              alt={`Card ${index + 3}`}
              className="w-10 h-10 mb-4"
            />
            <h3 className="text-lg font-bold text-[#272D37] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#6B7280]">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
