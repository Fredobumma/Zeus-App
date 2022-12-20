import React from "react";
import Logo from "./logo";
import Toggler from "./toggler";
import DropDown from "./dropDown";

const MobileLaptopView = ({
  mobileLinks,
  widerScreenLinks,
  footerExtension,
  more,
  toggleExtension,
}) => {
  return (
    <div className="border-line flex flex-col items-center justify-center laptop:flex-row laptop:border-b laptop:justify-between laptop:pb-10">
      <Logo classes="inline-block h-10 mx-auto w-150 laptop:mx-0" />
      <ul className="border-b border-t border-line flex flex-wrap gap-y-4 items-center justify-center mt-8 py-5 laptop:border-b-0 laptop:border-t-0 laptop:flex-row-reverse laptop:mt-0 laptop:py-0">
        {mobileLinks.concat(widerScreenLinks).map((link, index) => (
          <li
            key={index}
            className={more(link) ? "relative" : ""}
            title={more(link) ? "Click for more" : null}
            onClick={more(link) ? toggleExtension : null}
          >
            <a
              href="#empty"
              className={`${
                more(link) && "hidden laptop:inline-flex"
              } focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 ${
                mobileLinks.find((lk) => lk === link) && "laptop:hidden"
              }`}
            >
              {link}
              {more(link) && (
                <Toggler toggle={footerExtension} open="up" close="down" />
              )}
              {more(link) && footerExtension && (
                <DropDown mobileLinks={mobileLinks} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLaptopView;
