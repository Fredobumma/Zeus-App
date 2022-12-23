import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo";
import Toggler from "../../toggler";
import DropDown from "../../dropDown";
import { addToggler } from "../../../utilities/addToggler";

const MobileLaptopView = ({
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
    <div className="border-line flex flex-col items-center justify-center laptop:flex-row laptop:border-b laptop:justify-between laptop:pb-10">
      <Logo id="logo" classes="inline-block h-10 mx-auto w-150 laptop:mx-0" />
      <ul className="border-b border-t border-line flex flex-wrap gap-y-6 items-center justify-center mt-8 py-8 laptop:border-b-0 laptop:border-t-0 laptop:flex-row-reverse laptop:mt-0 laptop:py-0">
        {mobileLinks.concat(widerScreenLinks).map((link, index) => (
          <li
            key={index}
            className={more(link) ? "relative" : ""}
            title={more(link) ? "Click for more" : null}
            onClick={
              more(link)
                ? toggleExtension
                : altLink(link)
                ? () =>
                    scrollToSection(
                      refValues
                        .filter((rf) => link === rf.title)
                        .map((rf) => rf.value)
                    )
                : null
            }
          >
            <Link
              to={
                !more(link) &&
                !altLink(link) &&
                `/${link.toLowerCase().replaceAll(" ", "-")}`
              }
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
    </div>
  );
};

export default MobileLaptopView;
