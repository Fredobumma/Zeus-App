import React from "react";
import Button from "./../button";

const Callout = () => {
  return (
    <aside className="aside bg-callOut block my-12 max-w-[1280px] mx-auto px-4 py-6 rounded-4xl text-center tablet:my-16 bigTab:py-12 bigTab:relative laptop:my-20 desktop:py-28">
      <span className="sprite absolute callout-01 !bg-[-8333px_0] bottom-0 left-0 h-0 w-0 desktop:h-[446px] desktop:w-[301px]"></span>
      <span className="sprite absolute callout-02 !bg-[-8644px_0] bottom-0 right-0 h-0 w-0 desktop:h-[446px] desktop:w-[301px]"></span>
      <span className="sprite absolute callout-01sm !bg-[-7979px_0] bottom-0 h-0 left-0 w-0 bigTab:h-[330px] bigTab:w-[167px] laptop:bottom-[-5%] desktop:h-0 desktop:w-0"></span>
      <span className="sprite absolute callout-02sm !bg-[-8156px_0] bottom-0 h-0 right-0 w-0 bigTab:h-[330px] bigTab:w-[167px] laptop:bottom-[-5%] desktop:h-0 desktop:w-0"></span>
      <h2 className="text-3xl bigTab:max-w-400 laptop:max-w-700 desktop:text-5xl">
        Ready to sell your NFTs?
      </h2>
      <p className="max-w-[600px] mb-4 mt-2 mx-auto text-secondary text-xs tablet:mt-4 tablet:mb-6 bigTab:max-w-400 laptop:max-w-700 desktop:mb-8 desktop:text-base">
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
        semper orci a tincidunt.
      </p>
      <Button label="Sell right now" mb-4="mb-4" />
    </aside>
  );
};

export default Callout;
