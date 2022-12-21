import React from "react";
import { SVG } from "./svg";

const Toggler = ({ toggle, open, close, isVisible }) => {
  return (
    <span>
      {isVisible && <SVG id={`angle-${(toggle && open) || close}`} />}
    </span>
  );
};

export default Toggler;
