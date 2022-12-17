import React from "react";
import { SVG } from "../svg";

const Navbar = ({
  menuIcon,
  subMenuIcon,
  screenWidth,
  toggleMenu,
  toggleSubMenu,
}) => {
  return (
    <nav className="mt-2 pb-3.5 laptop:pb-2">
      <div className="relative laptop:flex laptop:justify-between">
        <ul className="hidden py-3 laptop:inline-flex">
          <li>
            <a
              href="#empty"
              className="active:opacity-100 active:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#empty"
              className="active:opacity-100 active:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              University
            </a>
          </li>
          <li>
            <a
              href="#empty"
              className="active:opacity-100 active:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              Courses
            </a>
          </li>
        </ul>
        <ul className="hidden py-3 laptop:inline-flex">
          <li>
            <a
              href="#empty"
              className="active:opacity-100 active:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              Use cases
            </a>
          </li>
          <li className="relative">
            <span
              className="active:opacity-100 active:text-secondary cursor-pointer hover:opacity-100 hover:text-secondary flex item font-medium opacity-50 pt-0 px-6 py-3"
              onClick={() => toggleSubMenu()}
            >
              Plans
              <span className="pl-1" title="Click to expand/collapse">
                <SVG id={`angle-${(subMenuIcon && "up") || "down"}`} />
              </span>
            </span>
            {subMenuIcon && (
              <div
                id="sub-navbar-dropdown"
                className="absolute bg-white divide-y-2 divide-gray-100 font-normal inset-x-0 max-w-90% mt-2 mx-auto rounded shadow text-center z-20"
              >
                <ul
                  className="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#empty"
                      className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#empty"
                      className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#empty"
                      className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#empty"
                    className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2 text-sm text-gray-700"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </li>
          <li>
            <a
              href="#empty"
              className="active:opacity-100 active:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 py-3"
            >
              Resources
            </a>
          </li>
        </ul>
        <button
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          className="inline-flex items-center mt-1 px-minmax-2 py-2 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 laptop:hidden"
          data-collapse-toggle="navbar-dropdown"
          title="Click to expand/collapse"
          type="button"
          onClick={() => toggleMenu()}
        >
          <SVG id="hamburger-menu" />
        </button>
        <span className="absolute h-8 inset-0 mt-2 mx-auto my-0 w-121 tablet:h-10 tablet:mt-1 tablet:w-150">
          <SVG id="logo" height="100%" width="100%" />
        </span>
        {menuIcon && screenWidth < 1024 && (
          <div className="mx-auto w-4/5" id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100">
              <li className="pl-0.5">
                <a
                  href="#empty"
                  className="active:text-white active:bg-secondary block focus:bg-white focus:text-secondary hover:bg-white hover:text-secondary py-2 pl-3 pr-4 text-gray-700 rounded outline-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pl-0.5">
                <a
                  href="#empty"
                  className="active:text-white active:bg-secondary block focus:bg-white focus:text-secondary hover:bg-white hover:text-secondary py-2 pl-3 pr-4 text-gray-700 rounded outline-0"
                >
                  University
                </a>
              </li>
              <li className="pl-0.5">
                <a
                  href="#empty"
                  className="active:text-white active:bg-secondary block focus:bg-white focus:text-secondary hover:bg-white hover:text-secondary py-2 pl-3 pr-4 text-gray-700 rounded outline-0"
                >
                  Courses
                </a>
              </li>
              <li className="pl-0.5">
                <a
                  href="#empty"
                  className="active:text-white active:bg-secondary block focus:bg-white focus:text-secondary hover:bg-white hover:text-secondary py-2 pl-3 pr-4 text-gray-700 rounded outline-0"
                >
                  Use cases
                </a>
              </li>
              <li className="pl-0.5">
                <span
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="active:text-white active:bg-secondary cursor-pointer focus:bg-white focus:text-secondary font-medium hover:bg-white hover:text-secondary flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded outline-0"
                  onClick={() => toggleSubMenu()}
                >
                  Plans
                  <span title="Click to expand/collapse">
                    <SVG id={`angle-${(subMenuIcon && "up") || "down"}`} />
                  </span>
                </span>
                {subMenuIcon && (
                  <div
                    id="sub-navbar-dropdown"
                    className="z-10 font-normal bg-white divide-y-2 divide-gray-100 rounded shadow my-2 mx-auto max-w-90%"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#empty"
                          className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#empty"
                          className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#empty"
                          className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#empty"
                        className="active:text-white active:bg-secondary block focus:bg-gray-100 hover:bg-gray-100 outline-0 px-4 py-2 text-sm text-gray-700"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </li>
              <li className="pl-0.5">
                <a
                  href="#empty"
                  className="active:text-white active:bg-secondary block focus:bg-white focus:text-secondary hover:bg-white hover:text-secondary outline-0 py-2 pl-3 pr-4 text-gray-700 rounded"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
