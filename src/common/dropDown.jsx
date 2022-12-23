import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({
  items,
  wrapperClasses,
  linkClasses,
  refValues,
  altLink,
  scrollToSection,
}) => {
  return (
    <span className={wrapperClasses}>
      <ul
        className="py-1 text-sm text-secondary"
        aria-labelledby="dropdownLargeButton"
      >
        {items.map((link, index) => (
          <li
            key={index}
            onClick={
              altLink(link)
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
                !altLink(link) && `/${link.toLowerCase().replaceAll(" ", "-")}`
              }
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

export default DropDown;
