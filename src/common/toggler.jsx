import React from "react";
import { SVG } from "./svg";

const Toggler = ({ toggle, open, close }) => {
  return (
    <span>
      <SVG id={`angle-${(toggle && open) || close}`} />
    </span>
  );
};

export default Toggler;
