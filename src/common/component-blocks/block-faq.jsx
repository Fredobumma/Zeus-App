import React from "react";
import Header from "../header";
import FaqCollapsible from "../faqCollapsible";

const Faq = ({ ...rest }) => {
  const questions = [
    "How much does Zeus UI cost?",
    "Can I resell Zeus UI?",
    "What kind of websites I can build with Zeus UI?",
    "How long will you support Zeus UI?",
    "Can I use Zeus UI in commercial projects?",
    "Could you make me a website using Zeus UI?",
    "Is that easy to design a website with Zeus UI?",
    "What makes Zeus UI literally the best Web UI kit in the Internet?",
  ];

  return (
    <section className="pb-8 pt-12 gap-x-8 grid tablet:grid-cols-2 tablet:pb-4 tablet:pt-16 laptop:gap-x-0 laptop:grid-cols-faq laptop:pb-8 laptop:pt-20">
      <Header
        header="max-w-90% mx-auto text-center tablet:mx-0 tablet:text-start"
        type="h2"
        heading="Frequently Asked Questions"
        headingClasses="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl tablet:text-start"
        text="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
        magna semper orci a tincidunt."
        textClasses="mb-8 mt-2 text-secondary text-sm tablet:text-base tablet:mb-12 tablet:mt-4 laptop:mb-16"
      />
      <div className="grid laptop:grid-cols-2 laptop:gap-x-8">
        {questions.map((text, index) => (
          <FaqCollapsible key={index} text={text} {...rest} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
