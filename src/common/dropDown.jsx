import React from "react";

const DropDown = ({ items, wrapperClasses, listClasses, linkClasses }) => {
  return (
    <span className={wrapperClasses}>
      <ul
        className="py-1 text-sm text-secondary"
        aria-labelledby="dropdownLargeButton"
      >
        {items.map((link, index) => (
          <li key={index}>
            <a
              href="#empty"
              className={`active:text-white active:bg-secondary block focus:font-semibold hover:font-semibold outline-0 px-4 py-2 ${linkClasses}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
};

export default DropDown;
