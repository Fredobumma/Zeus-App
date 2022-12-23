import React from "react";
import ParagraphText from "../common/paragraphText";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="my-3 tablet:my-4 laptop:my-7">
        <h1 className="bg-pink-400 font-bold ml-2.5 mx-0 px-6 text-40 text-white tablet:text-7xl laptop:text-80">
          404 page Not-Found
        </h1>
      </div>
      <ParagraphText
        classes="mb-6 mt-4 text-base text-center text-secondary tablet:mt-8 laptop:my-8"
        content="Search URL doesn't match"
      />
    </React.Fragment>
  );
};

export default NotFound;
