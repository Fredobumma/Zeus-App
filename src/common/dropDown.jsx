import React from "react";

const DropDown = ({ items, wrapperClasses, listClasses, linkClasses }) => {
  return (
    <span className={wrapperClasses}>
      <ul className={listClasses} aria-labelledby="dropdownLargeButton">
        {items.map((link, index) => (
          <li key={index}>
            <a href="#empty" className={linkClasses}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
};

export default DropDown;
