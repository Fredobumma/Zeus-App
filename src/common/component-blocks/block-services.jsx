import React from "react";
import { SVG } from "../svg";

const OurServices = () => {
  return (
    <section className="py-12 tablet:py-16 laptop:py-20">
      <header className="max-w-80% mx-auto text-center bigTab:max-w-700 laptop:max-w-80%">
        <h2 className="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl">
          We Provide
        </h2>
        <p className="mb-8 mt-2 text-sm tablet:mb-16 tablet:mt-4 tablet:text-base laptop:mb-20">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
      </header>
      <div className="gap-6 grid text-center tablet:grid-cols-2 laptop:grid-cols-4 desktop:gap-8">
        <div className="inline-flex items-center flex-col h-auto">
          <SVG id="host"></SVG>
          <p className="font-bold text-xl tablet:text-28 my-2 tablet:my-3">
            Host your NFTs
          </p>
          <p className="font-light text-xs tablet:text-sm">
            Egestas tellus nunc proin amet tellus tincidunt lacus consequat.
            Ultrices
          </p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <SVG id="sales"></SVG>
          <p className="font-bold text-xl tablet:text-28 my-2 tablet:my-3">
            See your sales
          </p>
          <p className="font-light text-xs tablet:text-sm">
            Integer ante non nunc, eget est justo vel semper nunc. Lacus
          </p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <SVG id="secure"></SVG>
          <p className="font-bold text-xl tablet:text-28 my-2 tablet:my-3">
            Secure wallet
          </p>
          <p className="font-light text-xs tablet:text-sm">
            Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas
            est. Auctor et leo urna est.
          </p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <SVG id="scam"></SVG>
          <p className="font-bold text-xl tablet:text-28 my-2 tablet:my-3">
            No scam
          </p>
          <p className="font-light text-xs tablet:text-sm">
            Integer ante non nunc, eget est justo vel semper nunc. Lacus
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
