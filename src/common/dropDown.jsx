import React from "react";

const DropDown = ({ mobileLinks }) => {
  return (
    <span className="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center">
      <ul
        className="py-1 text-sm text-secondary"
        aria-labelledby="dropdownLargeButton"
      >
        {mobileLinks.map((link, index) => (
          <li key={index}>
            <a
              href="#empty"
              className="active:text-white active:bg-secondary block focus:bg-white focus:font-medium hover:bg-white hover:font-semibold outline-0 px-4 py-2"
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
