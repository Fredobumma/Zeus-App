import React from "react";
import Logo from "../logo";

const Sponsors = () => {
  const logos = [
    "logoipsum-1",
    "logoipsum-2",
    "logoipsum-3",
    "logoipsum-4",
    "logoipsum-5",
    "logo-6",
  ];

  return (
    <figure className="flex flex-wrap justify-center max-w-[95%] mx-auto laptop:pt-10 laptop:max-w-full">
      <div className="box-content flex flex-wrap justify-center pt-8 tablet:pt-20 laptop:pt-20">
        {logos.map((logo, index) => (
          <Logo
            key={index}
            id={logo}
            classes="h-6 m-2 w-85 tablet:h-9 tablet:m-3 tablet:w-135 laptop:h-10 laptop:m-5 laptop:w-150"
          />
        ))}
      </div>
    </figure>
  );
};

export default Sponsors;
