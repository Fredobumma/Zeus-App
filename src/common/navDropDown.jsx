import React from "react";
import { Link } from "react-router-dom";

const NavDropDown = ({ items, wrapperClasses, linkClasses }) => {
  return (
    <span className={wrapperClasses}>
      <ul
        className="py-1 text-sm text-secondary"
        aria-labelledby="dropdownLargeButton"
      >
        {items.map((link, index) => (
          <li key={index}>
            <Link
              to={`/Plans/${link.replaceAll(" ", "")}`}
              className={`active:text-white active:bg-secondary block focus:font-semibold hover:font-semibold outline-0 px-4 py-2 ${linkClasses}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </span>
  );
};

export default NavDropDown;
