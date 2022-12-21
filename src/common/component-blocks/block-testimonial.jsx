import React from "react";

const Testimonials = () => {
  const testimonialCards = [
    {
      fullName: "Brooklyn Simmons",
      userName: "@brooklynsimmons",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
      spriteImage: "brooklyn-avatar !bg-[-5200px_0]",
    },
    {
      fullName: "Arlene McCoy",
      userName: "@ArleneMcCoy",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
      spriteImage: "arlene-avatar !bg-[-5052px_0]",
    },
    {
      fullName: "Kristin Watson",
      userName: "@KristinWatson",
      text: "Lectus dolor fermentum gravida ut sit vel. Enim. Lorem ipsum will never be the same again so purchase Zeus UI now or web trying.",
      spriteImage: "kristin-avatar !bg-[-5496px_0]",
    },
    {
      fullName: "Dianne Russell",
      userName: "@DianneRussell",
      text: "Eu luctus tincidunt vulputate praesent interdum proin. Magna gravida at pretium vitae. Viverra.",
      spriteImage: "dianne-avatar !bg-[-5274px_0]",
    },
    {
      fullName: "Jane Cooper",
      userName: "@JaneCooper",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
      spriteImage: "jane-avatar !bg-[-5570px_0]",
    },
    {
      fullName: "Leslie Alexander",
      userName: "@LeslieAlexander",
      text: "Varius bibendum quis ipsum sit. Enim ante donec erat neque semper. Consectetur sed imperdiet tortor duis nulla aliquet at integer.",
      spriteImage: "leslie-avatar !bg-[-5644px_0]",
    },
    {
      fullName: "Eleanor Pena",
      userName: "@EleanorPena",
      text: "Amet quam velit nisl et et. Fusce ante facilisi vulputate eget aliquet mi sem eu vulputate.",
      spriteImage: "eleanor-avatar !bg-[-5348px_0]",
    },
    {
      fullName: "Devon Lane",
      userName: "@johnkappa",
      text: "This is the original component. Edit me to make global changes to all. 🎉",
      spriteImage: "devon-avatar !bg-[-5496px_0]",
    },
    {
      fullName: "Darlene Robertson",
      userName: "@DarleneRobertson",
      text: "Imperdiet sed tellus tempor vitae elit a. Arcu a.",
      spriteImage: "darlene-avatar !bg-[-5200px_0]",
    },
    {
      fullName: "Jerome Bell",
      userName: "@johnkappa",
      text: "Lectus dolor fermentum gravida ut sit vel. Enim.",
      spriteImage: "jane-avatar !bg-[-5570px_0]",
    },
    {
      fullName: "Kristin Watson",
      userName: "@KristinWatson",
      text: "Lectus dolor fermentum gravida ut sit vel. Enim.",
      spriteImage: "dianne-avatar !bg-[-5274px_0]",
    },
    {
      fullName: "Ronald Richards",
      userName: "@johnkappa",
      text: "Tempus nunc, ultricies etiam purus rhoncus vestibulum arcu morbi amet. Nam adipiscing.",
      spriteImage: "arlene-avatar !bg-[-5052px_0]",
    },
  ];

  return (
    <article className="py-12 tablet:py-16 laptop:py-20">
      <h2 className="font-bold mb-8 text-3xl tablet:leading-[56px] tablet:mb-16 tablet:text-40 laptop:mb-20 laptop:text-5xl">
        Testimonials
      </h2>
      <div className="border h-[60vh] overflow-scroll py-2 relative bigTab:py-0 bigTab:border-0 bigTab:h-max bigTab:overflow-visible">
        <div className="absolute flex flex-wrap gap-4 justify-center max-w-[1024px] py-1 w-[300%] bigTab:gap-6 bigTab:max-w-max bigTab:static bigTab:w-fit desktop:gap-8">
          <span className="absolute bg-testimonial h-full w-full z-10"></span>
          {testimonialCards.map(
            ({ fullName, userName, text, spriteImage }, index) => (
              <div
                key={index}
                className="h-fit max-w-[30%] p-4 rounded-lg shadow-custom1 bigTab:p-4 desktop:p-6"
              >
                <div className="inline-flex items-center">
                  <span className={`sprite ${spriteImage} h-16 w-16`}></span>
                  <div>
                    <p className="font-medium text-sm tablet:text-base tablet:leading-5">
                      {fullName}
                    </p>
                    <p className="font-normal opacity-50 text-sm tablet:text-base">
                      {userName}
                    </p>
                  </div>
                </div>
                <p className="text-secondary">{text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
