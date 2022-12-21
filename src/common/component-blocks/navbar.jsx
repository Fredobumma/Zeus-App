import React from "react";
import MobileView from "../navbar/mobileView";
import WiderScreens from "../navbar/widerScreens";
import HamburgerMenu from "../hamburgerMenu";
import Logo from "../logo";

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

  return (
    <nav className="mt-2 pb-3.5 laptop:pb-2">
      <div className="relative laptop:flex laptop:justify-between">
        <WiderScreens
          navLinks={navLinks}
          plansList={plansList}
          subMenuIcon={subMenuIcon}
          toggleSubMenu={toggleSubMenu}
        />
        <HamburgerMenu toggleMenu={toggleMenu} />
        <Logo
          id="logo"
          classes="absolute h-8 inset-0 mt-2 mx-auto my-0 w-121 tablet:h-10 tablet:mt-1 tablet:w-150"
        />
        {menuIcon && screenWidth < 1024 && (
          <MobileView
            navLinks={navLinks}
            plansList={plansList}
            subMenuIcon={subMenuIcon}
            toggleSubMenu={toggleSubMenu}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
