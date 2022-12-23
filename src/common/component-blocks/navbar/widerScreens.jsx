import React from "react";
import { Link } from "react-router-dom";
import NavDropDown from "../../navDropDown";
import Toggler from "../../toggler";
import SignOut from "../../signOut";
import { addToggler } from "../../../utilities/addToggler";

const WiderScreens = ({ navLinks, plansList, subMenuIcon, toggleSubMenu }) => {
  const isVisible = (link) => addToggler(link, "Plans");

  return (
    <React.Fragment>
      <ul className="hidden py-3 laptop:inline-flex">
        {navLinks.slice(0, 3).map((link, index) => (
          <li key={index}>
            <Link
              to={`/${link.toLowerCase().replaceAll(" ", "-")}`}
              className="active:opacity-100 active:text-secondary focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden py-3 laptop:inline-flex">
        {navLinks.slice(3).map((link, index) => (
          <li
            key={index}
            className={isVisible(link) ? "relative" : ""}
            title={isVisible(link) ? "Click for more" : null}
            onClick={isVisible(link) ? toggleSubMenu : null}
          >
            <Link
              to={
                !isVisible(link) &&
                `/${link.toLowerCase().replaceAll(" ", "-")}`
              }
              className={`active:opacity-100 active:text-secondary focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3 ${
                isVisible(link) && "flex mt-[-12px]"
              }`}
            >
              {link}
              <Toggler
                toggle={subMenuIcon}
                open="up"
                close="down"
                isVisible={isVisible(link)}
              />
            </Link>
            {isVisible(link) && subMenuIcon && (
              <span
                id="sub-navbar-dropdown"
                className="absolute bg-white divide-y-2 divide-gray-100 font-normal inset-x-0 max-w-90% mt-2 mx-auto rounded shadow text-center top-[50%] z-20"
              >
                <NavDropDown
                  items={plansList}
                  linkClasses="focus:bg-gray-100 hover:bg-gray-100"
                />
                <SignOut />
              </span>
            )}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default WiderScreens;
