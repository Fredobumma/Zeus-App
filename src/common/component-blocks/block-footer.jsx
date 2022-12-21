import React from "react";
import WiderView from "../footer/widerView";
import MobileLaptopView from "../footer/mobileLaptopView";
import CopyRight from "../copyright";

const Footer = ({ footerExtension, screenWidth, toggleExtension }) => {
  const mobileLinks = [
    "About Us",
    "Team",
    "Careers",
    "Socials",
    "Activity",
    "License",
  ];
  const widerScreenLinks = [
    "More",
    "Refunds",
    "Cookies",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <div className="pb-8 pt-12 tablete:pt-16 laptop:pb-10 laptop:pt-20">
      {screenWidth >= 1280 ? (
        <WiderView
          mobileLinks={mobileLinks}
          widerScreenLinks={widerScreenLinks}
          footerExtension={footerExtension}
          toggleExtension={toggleExtension}
        />
      ) : (
        <MobileLaptopView
          mobileLinks={mobileLinks}
          widerScreenLinks={widerScreenLinks}
          footerExtension={footerExtension}
          toggleExtension={toggleExtension}
        />
      )}
      <CopyRight />
    </div>
  );
};

export default Footer;
