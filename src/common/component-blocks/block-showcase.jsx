import React from "react";
import Header from "../header";
import Figure from "../figure";

const Showcase = () => {
  const cards = [
    {
      title: "Moonbirds",
      text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      spriteImage:
        "moonbirds !bg-[-6974px_0] tablet:!bg-[-4630px_0] bigTab:!bg-[-6974px_0] desktop:!bg-[-4630px_0]",
    },
    {
      title: "Clone X - X Takashi Murakami",
      text: " Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      spriteImage:
        "takashi !bg-[-6722px_0] tablet:!bg-[-4208px_0] bigTab:!bg-[-6722px_0] desktop:!bg-[-4208px_0]",
    },
    {
      title: "Mutant Ape Yacht Club",
      text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      spriteImage:
        "mutantApe !bg-[-6471px_0] tablet:!bg-[-3786px_0] bigTab:!bg-[-6471px_0] desktop:!bg-[-3786px_0]",
    },
    {
      title: `"MOAR" by Joan Cornella`,
      text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      spriteImage:
        "moar !bg-[-7728px_0] tablet:!bg-[-3364px_0] bigTab:!bg-[-7728px_0] desktop:!bg-[-3364px_0]",
    },
    {
      title: "Doodles",
      text: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      spriteImage:
        "doodles !bg-[-7476px_0] tablet:!bg-[-2942px_0] bigTab:!bg-[-7476px_0] desktop:!bg-[-2942px_0]",
    },
    {
      title: "KIWAMI Genesis",
      text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      spriteImage:
        "kiwami !bg-[-7225px_0] tablet:!bg-[-2520px_0] bigTab:!bg-[-7225px_0] desktop:!bg-[-2520px_0]",
    },
    {
      title: "Arcade Land",
      text: "Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.",
      spriteImage:
        "arcade !bg-[-5718px_0] tablet:!bg-[-2098px_0] bigTab:!bg-[-5718px_0] desktop:!bg-[-2098px_0]",
    },
    {
      title: "Goons of Balatroon",
      text: "Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.",
      spriteImage:
        "goons !bg-[-5969px_0] tablet:!bg-[-1676px_0] bigTab:!bg-[-5969px_0] desktop:!bg-[-1676px_0]",
    },
    {
      title: "Meta Toy DragonZ",
      text: "Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.",
      spriteImage:
        "meta !bg-[-6220px_0] tablet:!bg-[-1254px_0] bigTab:!bg-[-6220px_0] desktop:!bg-[-1254px_0]",
    },
  ];

  return (
    <section className="py-12 tablet:py-16 laptop:py-20">
      <Header
        header="max-w-80% mx-auto text-center bigTab:max-w-700 laptop:max-w-80%"
        type="h2"
        heading="Hottest Collections"
        headingClasses="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl"
        text="Ante ornare dictum dignissim erat natoque. Platea neque facilisis diam
        id venenatis. Ultrices dolor, ac vel consectetur. Gravida lobortis
        venenatis faucibus sed ipsum. Urna."
        textClasses="mb-8 mt-2 text-secondary text-sm tablet:text-base tablet:mb-12 tablet:mt-4 laptop:mb-16"
      />
      <div className="gap-x-4 gap-y-8 grid bigTab:gap-y-12 bigTab:grid-cols-3 laptop:gap-x-6 desktop:gap-8 desktop:gap-y-16">
        {cards.map(({ title, text, spriteImage }, index) => (
          <div key={index} className="inline-flex items-center flex-col h-auto">
            <Figure
              classes={`${spriteImage} sprite h-sprite w-sp-x1 tablet:w-sprite bigTab:scale-x-95 bigTab:w-sp-x1 laptop:scale-x-125 desktop:scale-x-90 desktop:w-sprite`}
            />
            <Header
              type="h3"
              heading={title}
              headingClasses="font-semibold mb-3 mt-4 text-2xl laptop:text-32"
              text={text}
              textClasses="max-w-80% mb-6 mx-auto text-center text-secondary text-xs tablet:max-w-90% tablet:text-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
