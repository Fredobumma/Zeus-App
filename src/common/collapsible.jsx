import React from "react";

const collapsible = ({ toggle, handleCollapsible }) => {
  return (
    <div className="max-w-415 p-4 rounded-xl shadow-custom1 w-fit tablet:p-5 laptop:p-6">
      <div className="flex items-center">
        <p className="font-medium leading-5 text-base tablet:text-xl">
          Is that easy to design a website with Zeus UI?
        </p>
        <span
          className="fa-solid fa-angle-down ml-8 mt-0.5 text-secondary"
          title="Click to expand/collapse"
          onClick={() => handleCollapsible()}
        ></span>
      </div>
      {toggle && (
        <p className="mt-3 text-secondary text-xs tablet:text-sm">
          This FAQ section is now in the expanded state, so you see how it
          looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales.
        </p>
      )}
    </div>
  );
};

export default collapsible;
