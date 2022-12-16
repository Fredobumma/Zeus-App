import React from "react";

const Executives = () => {
  return (
    <section className="py-12 tablet:py-16 laptop:py-20">
      <header className="max-w-80% mx-auto text-center bigTab:max-w-700 laptop:max-w-80%">
        <h2 className="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl">
          Our Team
        </h2>
        <p className="mb-12 mt-2 text-sm tablet:text-base tablet:mt-4 laptop:mb-16">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
      </header>
      <div className="gap-4 grid grid-cols-2 text-center tablet:gap-6 tablet:grid-cols-4 laptop:gap-8">
        <div className="inline-flex items-center flex-col h-auto">
          <span className="sprite guyHawkings-img !bg-[-1163px_0] h-20 w-81"></span>
          <p className="font-bold text-xl tablet:text-2xl my-2 tablet:my-3">
            Guy Hawkins
          </p>
          <p className="font-light text-sm">CEO</p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <span className="sprite jane-img !bg-[-1072px_0] h-20 w-81"></span>
          <p className="font-bold text-xl tablet:text-2xl my-2 tablet:my-3">
            Jane Cooper
          </p>
          <p className="font-light text-sm">COO</p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <span className="sprite darrell-img !bg-[-981px_0] h-20 w-81"></span>
          <p className="font-bold text-xl tablet:text-2xl my-2 tablet:my-3">
            Darrell Stew
          </p>
          <p className="font-light text-sm">CTO</p>
        </div>
        <div className="inline-flex items-center flex-col h-auto">
          <span className="sprite dianne-img !bg-[-890px_0] h-20 w-81"></span>
          <p className="font-bold text-xl tablet:text-2xl my-2 tablet:my-3">
            Dia Russell
          </p>
          <p className="font-light text-sm">CDO</p>
        </div>
      </div>
    </section>
  );
};

export default Executives;
