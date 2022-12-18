import React, { createElement } from "react";

const Header = ({
  header,
  type,
  heading,
  headingClasses,
  text,
  textClasses,
}) => {
  return (
    <header className={header}>
      {createElement(type, { className: headingClasses }, heading)}
      <p className={textClasses}>{text}</p>
    </header>
  );
};

export default Header;
