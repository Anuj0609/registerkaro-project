import React from "react";

function Footer() {
  const sections = [
    {
      title: null,
      description:
        "Design outstanding interfaces with advanced Figma features in a matter of minutes.",
      images: ["./Foot1.png", "./Foot2.png", "./Foot3.png", "./Foot4.png"],
    },
    {
      title: "START A BUSINESS",
      links: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ],
    },
    {
      title: "GOVERNMENT",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <div className="bg-[#011B5B] text-white py-16 px-6 sm:px-[112px]">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/3 flex flex-col items-center text-center space-y-4">
          <div className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-[#AAB5CD]">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </div>
          <div className="flex justify-center gap-4">
            {sections[0].images.map((src, imgIndex) => (
              <img key={imgIndex} src={src} alt="" className="h-6 w-6" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:w-2/3">
          {sections.slice(1).map((section, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {section.title && (
                <div className="text-[16px] font-bold leading-[24px] tracking-[-0.01em] text-[#FFA229]">
                  {section.title}
                </div>
              )}
              {section.links &&
                section.links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="text-[16px] font-medium leading-[24px] tracking-[-0.01em] text-[#AAB5CD]"
                  >
                    {link}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <img src="./Foot-arrow.png" className="mx-auto py-10" />
      <div className="text-center text-[#AAB5CD] text-[16px] font-medium leading-[24px] tracking-[-0.01em]">
        © 2024 Registerkaro. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
