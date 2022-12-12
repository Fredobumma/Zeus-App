import React from "react";
import FaqCollapsible from "../faqCollapsible";

const Faq = ({ ...rest }) => {
  return (
    <section className="pb-8 pt-12 gap-x-8 grid tablet:grid-cols-2 tablet:pb-4 tablet:pt-16 laptop:gap-x-0 laptop:grid-cols-faq laptop:pb-8 laptop:pt-20">
      <header className="max-w-90% mx-auto text-center tablet:mx-0 tablet:text-start">
        <h2 className="font-bold tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl tablet:text-start">
          Frequently Asked Questions
        </h2>
        <p className="mb-8 mt-2 text-sm tablet:text-base tablet:mb-12 tablet:mt-4 laptop:mb-16">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
          magna semper orci a tincidunt.
        </p>
      </header>
      <div className="grid laptop:grid-cols-2 laptop:gap-x-8">
        <FaqCollapsible text="How much does Zeus UI cost?" {...rest} />
        <FaqCollapsible text="Can I resell Zeus UI?" {...rest} />
        <FaqCollapsible
          text="What kind of websites I can build with Zeus UI?"
          {...rest}
        />
        <FaqCollapsible text="How long will you support Zeus UI?" {...rest} />
        <FaqCollapsible
          text="Can I use Zeus UI in commercial projects?"
          {...rest}
        />
        <FaqCollapsible
          text="Could you make me a website using Zeus UI?"
          {...rest}
        />
        <FaqCollapsible
          text="Is that easy to design a website with Zeus UI?"
          {...rest}
        />
        <FaqCollapsible
          text="What makes Zeus UI literally the best Web UI kit in the Internet?"
          {...rest}
        />
      </div>
    </section>
  );
};

export default Faq;
