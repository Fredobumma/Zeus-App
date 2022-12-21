import React from "react";
import { SVG } from "./svg";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <button
      aria-controls="navbar-dropdown"
      aria-expanded="false"
      className="inline-flex items-center mt-1 px-minmax-2 py-2 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 laptop:hidden"
      data-collapse-toggle="navbar-dropdown"
      title="Click to expand/collapse"
      type="button"
      onClick={toggleMenu}
    >
      <SVG id="hamburger-menu" />
    </button>
  );
};

export default HamburgerMenu;
