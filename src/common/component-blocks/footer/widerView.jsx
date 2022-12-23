import React from "react";
import { Link } from "react-router-dom";
import Toggler from "../../toggler";
import DropDown from "../../dropDown";
import Logo from "../../logo";
import { addToggler } from "../../../utilities/addToggler";

const WiderView = ({
  aboutUs,
  team,
  mobileLinks,
  widerScreenLinks,
  footerExtension,
  toggleExtension,
  scrollToSection,
}) => {
  const more = (link) => addToggler(link, widerScreenLinks[0]);
  const altLink = (link) => addToggler(link, "About Us", "Team");
  const refValues = [
    { title: "About Us", value: aboutUs },
    { title: "Team", value: team },
  ];

  return (
    <div className="border-b border-line flex justify-between pb-10 relative">
      <span className="py-3">
        <ul className="flex flex-row-reverse">
          {widerScreenLinks.slice(3).map((link, index) => (
            <li key={index}>
              <Link
                to={`/${link.toLowerCase().replaceAll(" ", "-")}`}
                className="font-medium opacity-50 px-6"
              >
                {link}
              </Link>
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
              <Link
                to={
                  !more(link) && `/${link.toLowerCase().replaceAll(" ", "-")}`
                }
                className="flex focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6"
              >
                {link}
                <Toggler
                  toggle={footerExtension}
                  open="up"
                  close="down"
                  isVisible={more(link)}
                />
              </Link>
              {more(link) && footerExtension && (
                <DropDown
                  wrapperClasses="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center"
                  linkClasses="focus:bg-white hover:bg-white"
                  refValues={refValues}
                  items={mobileLinks}
                  altLink={altLink}
                  scrollToSection={scrollToSection}
                />
              )}
            </li>
          ))}
        </ul>
      </span>
      <Logo
        id="logo"
        classes="absolute h-10 inset-0 justify-center mt-1 mx-auto w-150"
      />
    </div>
  );
};

export default WiderView;
