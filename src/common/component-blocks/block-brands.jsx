import React from "react";
import { SVG } from "../svg";

const Sponsors = () => {
  return (
    <figure className="flex flex-wrap justify-center max-w-[95%] mx-auto laptop:pt-10 laptop:max-w-full">
      <div className="box-content flex flex-wrap justify-center pt-8 tablet:pt-20 laptop:pt-20">
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logoipsum-1" width="100%" height="100%" />
        </span>
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logoipsum-2" width="100%" height="100%" />
        </span>
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logoipsum-3" width="100%" height="100%" />
        </span>
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logoipsum-4" width="100%" height="100%" />
        </span>
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logoipsum-5" width="100%" height="100%" />
        </span>
        <span className="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150">
          <SVG id="logo-6" width="100%" height="100%" />
        </span>
      </div>
    </figure>
  );
};

export default Sponsors;
