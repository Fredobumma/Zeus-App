import React from "react";
import Button from "./../button";

const Hero = () => {
  return (
    <section className="py-12 relative text-center tablet:py-16 laptop:py-28">
      <header className="max-w-80% mx-auto text-secondary tablet:max-w-2xl laptop:max-w-3xl">
        <h1 className="font-bold text-40 tablet:text-7xl laptop:text-80">
          Create & sell your NFTs today
        </h1>
        <p className="mb-6 mt-4 text-center text-base tablet:my-8">
          In tincidunt montes, leo dolor duis eget venenatis. In vel fusce
          commodo, nullam vitae nisi. Ullamcorper nam pellentesque scelerisque
          nibh etiam in. Luctus.
        </p>
      </header>
      <Button label="Let's sell" />
      <span className="sprite bg-01sm absolute !bg-[-8955px_0] bottom-0 h-[105px] right-[-6%] w-[59px] tablet:hidden"></span>
      <span className="sprite bg-02sm absolute !bg-[-9191px_0] bottom-[-7%] h-[139px] left-[-5%] w-[86px] tablet:hidden"></span>
      <span className="sprite bg-03sm absolute !bg-[-9287px_0] h-[78px] right-[-4%] top-[-1%] w-[67px] tablet:hidden"></span>
      <span className="sprite bg-04sm absolute !bg-[-9024px_0] top-[30%] h-[114px] left-[-6%] w-[59px] tablet:hidden"></span>
      <span className="sprite bg-01xs absolute hidden !bg-[-9093px_0] bottom-[-3%] right-[-3%] tablet:h-[154px] tablet:w-[88px] laptop:hidden"></span>
      <span className="sprite bg-02xs absolute hidden !bg-[-9364px_0] bottom-[-20%] left-[-4%] tablet:h-[229px] tablet:w-[165px] laptop:hidden"></span>
      <span className="sprite bg-03xs absolute hidden !bg-[-9539px_0] right-[-3%] top-[-3%] tablet:h-[166px] tablet:w-[115px] laptop:hidden"></span>
      <span className="sprite bg-04xs absolute hidden !bg-[-9664px_0] left-[-3%] top-[-2%] z-[-10] tablet:h-[174px] tablet:w-[118px] laptop:hidden"></span>
      <span className="sprite bg-01 absolute hidden !bg-[0_0] bottom-[-3%] right-[-2%] laptop:h-[211px] laptop:w-[211px]"></span>
      <span className="sprite bg-02 absolute hidden !bg-[-221px_0] bottom-[-20%] left-[-3%] laptop:h-[336px] laptop:w-[301px]"></span>
      <span className="sprite bg-03 absolute hidden !bg-[-532px_0] right-[-2%] top-[1%] laptop:h-[166px] laptop:w-[165px]"></span>
      <span className="sprite bg-04 absolute hidden !bg-[-707px_0] left-[-2%] top-[1%] laptop:h-[174px] laptop:w-[173px]"></span>
    </section>
  );
};

export default Hero;
