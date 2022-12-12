import React from "react";

const FaqCollapsible = ({ text, collapsible, handleCollapse }) => {
  const toggle = collapsible.find((c) => c.id === text);

  return (
    <div className="h-fit mb-4 mx-auto p-4 rounded-xl shadow-custom1 w-full tablet:p-5 laptop:p-6">
      <div className="flex items-center justify-between">
        <p className="font-medium leading-5 text-base tablet:text-xl">{text}</p>
        <span
          className={`fa-solid fa-angle-${
            toggle && toggle.click ? "up" : "down"
          } ml-5 mt-0.5 p-2 text-secondary`}
          title="Click to expand/collapse"
          onClick={() => handleCollapse(text)}
        ></span>
      </div>
      {toggle && toggle.click && (
        <p className="mt-3 text-secondary text-xs tablet:text-sm">
          This FAQ section is now in the expanded state, so you see how it
          looks. Rhoncus sed facilisi sed amet. Tristique commodo sodales.
        </p>
      )}
    </div>
  );
};

export default FaqCollapsible;
