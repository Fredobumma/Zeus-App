import React from "react";
import { SVG } from "./svg";

const Logo = ({ id, classes, onClick }) => {
  return (
    <span className={classes} onClick={onClick}>
      <SVG id={id} height="100%" width="100%" />
    </span>
  );
};

export default Logo;
