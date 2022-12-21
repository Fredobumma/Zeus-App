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
      <Logo id="logo" classes="inline-block h-10 mx-auto w-150 laptop:mx-0" />
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
                <DropDown
                  items={mobileLinks}
                  wrapperClasses="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center"
                  listClasses="py-1 text-sm text-secondary"
                  linkClasses="active:text-white active:bg-secondary block focus:bg-white focus:font-medium hover:bg-white hover:font-semibold outline-0 px-4 py-2"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLaptopView;
