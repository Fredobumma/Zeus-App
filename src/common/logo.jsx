import React from "react";
import { SVG } from "./svg";

const Logo = ({ id, classes }) => {
  return (
    <span className={classes}>
      <SVG id={id} height="100%" width="100%" />
    </span>
  );
};

export default Logo;
