import React, { useRef } from "react";
import Hero from "../common/component-blocks/block-hero";
import Sponsors from "../common/component-blocks/block-brands";
import Showcase from "../common/component-blocks/block-showcase";
import Executives from "../common/component-blocks/block-executives";
import OurServices from "../common/component-blocks/block-services";
import Testimonials from "../common/component-blocks/block-testimonial";
import Faq from "../common/component-blocks/block-faq";
import Callout from "../common/component-blocks/block-callout";
import Footer from "../common/component-blocks/block-footer";

const Home = ({ collapsible, handleCollapsible, ...rest }) => {
  const aboutUs = useRef(null);
  const team = useRef(null);

  return (
    <React.Fragment>
      <Hero />
      <Sponsors />
      <Showcase />
      <Executives teamRef={team} />
      <OurServices aboutUs={aboutUs} />
      <Testimonials />
      <Faq collapsible={collapsible} handleCollapse={handleCollapsible} />
      <Callout />
      <Footer team={team} aboutUs={aboutUs} {...rest} />
    </React.Fragment>
  );
};

export default Home;
