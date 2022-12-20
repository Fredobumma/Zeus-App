import React from "react";
import { SVG } from "./svg";

const Logo = ({ classes }) => {
  return (
    <span className={classes}>
      <SVG id="logo" height="100%" width="100%" />
    </span>
  );
};

export default Logo;
