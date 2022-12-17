import React from "react";
import Button from "./../button";

const Hero = () => {
  return (
    <section className="bg-hero py-12 relative text-center tablet:py-16 laptop:py-28">
      <header className="max-w-80% mx-auto text-secondary tablet:max-w-2xl laptop:max-w-3xl">
        <h1 className="font-bold text-40 relative z-10 tablet:text-7xl laptop:text-80">
          Create & sell your NFTs today
        </h1>
        <p className="mb-6 mt-4 text-center text-base tablet:my-8">
          In tincidunt montes, leo dolor duis eget venenatis. In vel fusce
          commodo, nullam vitae nisi. Ullamcorper nam pellentesque scelerisque
          nibh etiam in. Luctus.
        </p>
      </header>
      <Button label="Let's sell" />
      <span className="sprite bg-01 absolute !bg-[-8955px_0] bottom-0 h-[105px] right-[-6%] w-[59px] tablet:!bg-[-9093px_0] tablet:bottom-[-3%] tablet:right-[-3%] tablet:h-[154px] tablet:w-[88px] laptop:!bg-[0_0] laptop:bottom-[-3%] laptop:right-[-2%] laptop:h-[211px] laptop:w-[211px]"></span>
      <span className="sprite bg-02 absolute !bg-[-9191px_0] bottom-[-7%] h-[139px] left-[-5%] w-[86px] tablet:!bg-[-9364px_0] tablet:bottom-[-20%] tablet:left-[-4%] tablet:h-[229px] tablet:w-[165px] laptop:!bg-[-221px_0] laptop:bottom-[-20%] laptop:left-[-3%] laptop:h-[336px] laptop:w-[301px]"></span>
      <span className="sprite bg-03 absolute !bg-[-9287px_0] h-[78px] right-[-4%] top-[-1%] w-[67px] tablet:!bg-[-9539px_0] tablet:right-[-3%] tablet:top-[-3%] tablet:h-[166px] tablet:w-[115px] laptop:!bg-[-532px_0] laptop:right-[-2%] laptop:top-[1%] laptop:h-[166px] laptop:w-[165px]"></span>
      <span className="sprite bg-04 absolute !bg-[-9024px_0] top-[30%] h-[114px] left-[-6%] w-[59px] tablet:!bg-[-9664px_0] tablet:left-[-3%] tablet:top-[-2%] tablet:h-[174px] tablet:w-[118px] laptop:!bg-[-707px_0] laptop:left-[-2%] laptop:top-[1%] laptop:h-[174px] laptop:w-[173px]"></span>
    </section>
  );
};

export default Hero;
