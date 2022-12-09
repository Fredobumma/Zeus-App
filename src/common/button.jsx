import React from "react";

const Button = ({ label, ...rest }) => {
  const getClasses = Object.keys(rest)
    .map((c) => c)
    .toString()
    .replaceAll(",", " ");

  return (
    <button
      className={`bg-secondary font-bold font-heading font-lg leading-5 rounded-15 text-white px-5 py-3 tablet:py-4 ${getClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;
