import React from "react";
import Header from "../header";
import Figure from "../figure";
import ParagraphText from "../paragraphText";

const Executives = ({ teamRef }) => {
  const team = [
    {
      fullName: "Guy Hawkins",
      position: "CEO",
      spriteImage: "guyHawkings-img !bg-[-1163px_0]",
    },
    {
      fullName: "Jane Cooper",
      position: "COO",
      spriteImage: "jane-img !bg-[-1072px_0]",
    },
    {
      fullName: "Darrell Stew",
      position: "CTO",
      spriteImage: "darrell-img !bg-[-981px_0]",
    },
    {
      fullName: "Dia Russell",
      position: "CDO",
      spriteImage: "dianne-img !bg-[-890px_0]",
    },
  ];

  return (
    <section ref={teamRef} className="py-12 tablet:py-16 laptop:py-20">
      <Header
        header="max-w-80% mx-auto text-center bigTab:max-w-700 laptop:max-w-80%"
        type="h2"
        heading="Our Team"
        headingClasses="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl"
        text="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
        magna semper orci a tincidunt."
        textClasses="mb-12 mt-2 text-secondary text-sm tablet:text-base tablet:mt-4 laptop:mb-16"
      />
      <div className="gap-4 grid grid-cols-2 text-center tablet:gap-6 tablet:grid-cols-4 laptop:gap-8">
        {team.map(({ fullName, position, spriteImage }, index) => (
          <div key={index} className="inline-flex items-center flex-col h-auto">
            <Figure classes={`sprite ${spriteImage} h-20 w-81`} />
            <ParagraphText
              classes="font-bold text-xl tablet:text-2xl my-2 tablet:my-3"
              content={fullName}
            />
            <ParagraphText
              classes="font-light text-secondary text-sm"
              content={position}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Executives;
