import React from "react";
import DropDown from "../dropDown";
import HamburgerMenu from "../hamburgerMenu";
import Logo from "../logo";
import Toggler from "../toggler";
import SignOut from "../signOut";
import { addToggler } from "./../../utilities/addToggler";

const Navbar = ({
  menuIcon,
  subMenuIcon,
  screenWidth,
  toggleMenu,
  toggleSubMenu,
}) => {
  const navLinks = [
    "Home",
    "University",
    "Courses",
    "Use Cases",
    "Plans",
    "Resources",
  ];
  const plansList = ["Dashboard", "Settings", "Earnings"];
  const isVisible = (link) => addToggler(link, "Plans");

  return (
    <nav className="mt-2 pb-3.5 laptop:pb-2">
      <div className="relative laptop:flex laptop:justify-between">
        <ul className="hidden py-3 laptop:inline-flex">
          {navLinks.slice(0, 3).map((link, index) => (
            <li key={index}>
              <a
                href="#empty"
                className="active:opacity-100 active:text-secondary focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
              >
                {link}
              </a>
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
              <a
                href="#empty"
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
              </a>
              {isVisible(link) && subMenuIcon && (
                <span
                  id="sub-navbar-dropdown"
                  className="absolute bg-white divide-y-2 divide-gray-100 font-normal inset-x-0 max-w-90% mt-2 mx-auto rounded shadow text-center top-[50%] z-20"
                >
                  <DropDown
                    items={plansList}
                    linkClasses="focus:bg-gray-100 hover:bg-gray-100"
                  />
                  <SignOut />
                </span>
              )}
            </li>
          ))}
        </ul>
        <HamburgerMenu toggleMenu={toggleMenu} />
        <Logo
          id="logo"
          classes="absolute h-8 inset-0 mt-2 mx-auto my-0 w-121 tablet:h-10 tablet:mt-1 tablet:w-150"
        />
        {menuIcon && screenWidth < 1024 && (
          <div className="mx-auto w-4/5" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100">
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
                      isVisible(link) &&
                      "flex items-center justify-between w-full"
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
