import React from "react";
import WiderView from "./footer/widerView";
import MobileLaptopView from "./footer/mobileLaptopView";
import CopyRight from "../copyright";

const Footer = ({ screenWidth, ...rest }) => {
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
    <footer className="pb-8 pt-12 tablete:pt-16 laptop:pb-10 laptop:pt-20">
      {screenWidth >= 1280 ? (
        <WiderView
          mobileLinks={mobileLinks}
          widerScreenLinks={widerScreenLinks}
          {...rest}
        />
      ) : (
        <MobileLaptopView
          mobileLinks={mobileLinks}
          widerScreenLinks={widerScreenLinks}
          {...rest}
        />
      )}
      <CopyRight />
    </footer>
  );
};

export default Footer;
