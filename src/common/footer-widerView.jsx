import React from "react";
import Toggler from "./toggler";
import DropDown from "./dropDown";
import Logo from "./logo";

const WiderView = ({
  mobileLinks,
  widerScreenLinks,
  footerExtension,
  more,
  toggleExtension,
}) => {
  return (
    <div className="border-b border-line flex justify-between pb-10 relative">
      <span className="py-3">
        <ul className="flex flex-row-reverse">
          {widerScreenLinks.slice(3).map((link, index) => (
            <li key={index}>
              <a href="#empty" className="font-medium opacity-50 px-6">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </span>
      <span className="py-3">
        <ul className="flex flex-row-reverse">
          {widerScreenLinks.slice(0, 3).map((link, index) => (
            <li
              key={index}
              className={more(link) ? "relative" : ""}
              title={more(link) ? "Click for more" : null}
              onClick={more(link) ? toggleExtension : null}
            >
              <a
                href="#empty"
                className="flex focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6"
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
      </span>
      <Logo classes="absolute h-10 inset-0 justify-center mt-1 mx-auto w-150" />
    </div>
  );
};

export default WiderView;
