import React from "react";
import Header from "../header";
import ParagraphText from "../paragraphText";
import { SVG } from "../svg";

const OurServices = ({ aboutUs }) => {
  const services = [
    {
      id: "host",
      title: "Host your NFTs",
      text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
    },
    {
      id: "sales",
      title: "See your sales",
      text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    },
    {
      id: "secure",
      title: "Secure wallet",
      text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
    },
    {
      id: "scam",
      title: "No scam",
      text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
    },
  ];

  return (
    <section ref={aboutUs} className="py-12 tablet:py-16 laptop:py-20">
      <Header
        header="max-w-80% mx-auto text-center bigTab:max-w-700 laptop:max-w-80%"
        type="h2"
        heading="We Provide"
        headingClasses="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl"
        text="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
        magna semper orci a tincidunt."
        textClasses="mb-8 mt-2 text-secondary text-sm tablet:mb-16 tablet:mt-4 tablet:text-base laptop:mb-20"
      />
      <div className="gap-6 grid text-center tablet:grid-cols-2 laptop:grid-cols-4 desktop:gap-8">
        {services.map(({ id, title, text }, index) => (
          <div key={index} className="inline-flex items-center flex-col h-auto">
            <SVG id={id}></SVG>
            <ParagraphText
              classes="font-bold text-xl tablet:text-28 my-2 tablet:my-3"
              content={title}
            />
            <ParagraphText
              classes="font-light text-secondary text-xs tablet:text-sm"
              content={text}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
