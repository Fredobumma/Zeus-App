import React from "react";
import DropDown from "../../dropDown";
import Toggler from "../../toggler";
import SignOut from "../../signOut";
import { addToggler } from "../../../utilities/addToggler";

const MobileView = ({ navLinks, plansList, subMenuIcon, toggleSubMenu }) => {
  const isVisible = (link) => addToggler(link, "Plans");

  return (
    <div className="mx-auto w-4/5" id="navbar-dropdown">
      <ul className="flex flex-col border border-gray-100 bg-gray-50 gap-y-1.5 hover:bg-gray-100 rounded-lg mt-4 p-4">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="pl-0.5"
            title={isVisible(link) ? "Click for more" : null}
            onClick={isVisible(link) ? toggleSubMenu : null}
          >
            <a
              href="#empty"
              className={`active:text-white active:bg-secondary block focus:bg-white focus:font-medium focus:text-secondary hover:bg-white hover:font-medium hover:text-secondary py-2 pl-3 pr-4 text-gray-700 rounded outline-0 ${
                isVisible(link) && "flex items-center justify-between w-full"
              }`}
              aria-current="page"
            >
              {link}
              <Toggler
                toggle={subMenuIcon}
                open="up"
                close="down"
                isVisible={isVisible(link)}
              />
            </a>
            {isVisible(link) && subMenuIcon && (
              <div
                id="sub-navbar-dropdown"
                className="font-normal bg-white divide-y-2 divide-gray-100 rounded shadow my-2 mx-auto max-w-90%"
              >
                <DropDown
                  items={plansList}
                  linkClasses="focus:bg-gray-100 hover:bg-gray-100"
                />
                <SignOut />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileView;
