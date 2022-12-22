import React from "react";
import Logo from "../../logo";
import Toggler from "../../toggler";
import DropDown from "../../dropDown";
import { addToggler } from "../../../utilities/addToggler";

const MobileLaptopView = ({
  mobileLinks,
  widerScreenLinks,
  footerExtension,
  toggleExtension,
}) => {
  const more = (link) => addToggler(link, widerScreenLinks[0]);

  return (
    <div className="border-line flex flex-col items-center justify-center laptop:flex-row laptop:border-b laptop:justify-between laptop:pb-10">
      <Logo id="logo" classes="inline-block h-10 mx-auto w-150 laptop:mx-0" />
      <ul className="border-b border-t border-line flex flex-wrap gap-y-6 items-center justify-center mt-8 py-8 laptop:border-b-0 laptop:border-t-0 laptop:flex-row-reverse laptop:mt-0 laptop:py-0">
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
              <Toggler
                toggle={footerExtension}
                open="up"
                close="down"
                isVisible={more(link)}
              />
            </a>
            {more(link) && footerExtension && (
              <DropDown
                items={mobileLinks}
                wrapperClasses="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center"
                linkClasses="focus:bg-white hover:bg-white"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLaptopView;
