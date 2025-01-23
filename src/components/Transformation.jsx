import React from "react";

export default function Transformation() {
  const blogPosts = [
    {
      image: "./T1.png",
      date: "Prabhash Mishra • 1 Jan 2023 • Today",
      title: "Small business & Startup",
      detail:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      buttons: [
        { label: "Learn More", bgColor: "#F9F5FF", textColor: "#6941C6" },
        { label: "Contact Us", bgColor: "#EEF4FF", textColor: "#363F72" },
      ],
    },
    {
      image: "./T2.png",
      date: "Mahesh Kumar • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      detail:
        "Mental models are simple expressions of complex processes or relationships.",
      buttons: [
        { label: "Read More", bgColor: "#F0F9FF", textColor: "#026AA2" },
        { label: "Get Started", bgColor: "#EEF4FF", textColor: "#3538CD" },
        { label: "Contact", bgColor: "#FFF6ED", textColor: "#C4320A" },
      ],
    },
    {
      image: "./T3.png",
      date: "Rakhi Verma • 1 Jan 2023",
      title: "Growing Business Package",
      detail:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      buttons: [
        { label: "Join Now", bgColor: "#F9F5FF", textColor: "#6941C6" },
        { label: "See Details", bgColor: "#EEF4FF", textColor: "#3538CD" },
      ],
    },
    {
      image: "./T4.png",
      date: "Karan Kumar • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      detail:
        "Collaboration can make our teams stronger, and our individual designs better.",
      buttons: [
        { label: "Learn More", bgColor: "#F9F5FF", textColor: "#6941C6" },
        { label: "Get in Touch", bgColor: "#EEF4FF", textColor: "#363F72" },
      ],
    },
    {
      image: "./T5.png",
      date: "Richa Singh • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      detail:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      buttons: [
        { label: "Read More", bgColor: "#ECFDF3", textColor: "#027A48" },
        { label: "Get Started", bgColor: "#FDF2FA", textColor: "#C11574" },
        { label: "Contact Us", bgColor: "#FFF1F3", textColor: "#C01048" },
      ],
    },
    {
      image: "./T6.png",
      date: "Miss Nora • 1 Jan 2023",
      title: "Scale-Up Company Offer",
      detail:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      buttons: [
        { label: "Contact Us", bgColor: "#F9F5FF", textColor: "#6941C6" },
        { label: "Get Involved", bgColor: "#F8F9FC", textColor: "#363F72" },
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-9">
      <div className="space-y-[10px]">
        <div
          className="text-center text-[14px] font-normal leading-[21px] tracking-[1.5px]"
          style={{
            fontFamily: "Inter",
            color: "#EB8D15",
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
        >
          EXPLORE OUR BLOGS
        </div>
        <div
          className="text-center text-[32px] font-bold leading-[38.4px] tracking-[0.16px]"
          style={{
            fontFamily: "Inter",
            color: "#3C2109",
            textDecorationSkipInk: "none",
            textUnderlinePosition: "from-font",
          }}
        >
          Accelerate Digital Transformation
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-[16px] flex flex-col gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[240px] object-cover"
            />
            <div
              className="text-[14px] font-semibold leading-[20px] text-left text-[#667085]"
              style={{
                fontFamily: "Inter",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              {post.date}
            </div>

            <div
              className="text-[18px] sm:text-[22px] font-bold leading-[32px] text-left text-[#1A1A1A]"
              style={{
                fontFamily: "Inter",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              {post.title}
            </div>

            <div
              className="text-[14px] sm:text-[15px] font-normal leading-[24px] text-left text-[#667085]"
              style={{
                fontFamily: "Inter",
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              {post.detail}
            </div>

            <div className="flex gap-4">
              {post.buttons.map((button, buttonIndex) => (
                <button
                  key={buttonIndex}
                  className="py-[2px] px-[10px] rounded-2xl"
                  style={{
                    backgroundColor: button.bgColor,
                    color: button.textColor,
                  }}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#1C4670] flex flex-row px-5 py-3 items-center text-white rounded gap-1 justify-center mx-auto mt-9">
        Show more blogs <img src="./W-arrow.png" alt="" />
      </button>
    </div>
  );
}
