import React from "react";
import { useState } from "react";
import { SVGSource } from "./common/svg";
import Navbar from "./common/component-blocks/navbar";
import Hero from "./common/component-blocks/block-hero";
import Sponsors from "./common/component-blocks/block-brands";
import Showcase from "./common/component-blocks/block-showcase";
import Executives from "./common/component-blocks/block-executives";
import OurServices from "./common/component-blocks/block-services";
import Testimonials from "./common/component-blocks/block-testimonial";
import Faq from "./common/component-blocks/block-faq";
import Callout from "./common/component-blocks/block-callout";
import Footer from "./common/component-blocks/block-footer";
import useWindowDimensions from "./common/utilities/useWindowDimensions";

function App() {
  const [collapsible, setCollapsible] = useState([]);
  const [menuIcon, setMenuIcon] = useState(false);
  const [subMenuIcon, setSubMenuIcon] = useState(false);
  const [footerExtension, setFooterExtension] = useState(false);
  const { width } = useWindowDimensions();

  const handleCollapsible = (id) => {
    const clonedArray = [...collapsible];
    const item = clonedArray.find((el) => el.id === id);
    if (item === undefined) clonedArray.push({ id, click: true });
    else item.click = !item.click;
    setCollapsible(clonedArray);
  };

  return (
    <main className="mx-auto">
      <SVGSource />
      <Navbar
        menuIcon={menuIcon}
        screenWidth={width}
        subMenuIcon={subMenuIcon}
        toggleMenu={() => setMenuIcon(!menuIcon)}
        toggleSubMenu={() => setSubMenuIcon(!subMenuIcon)}
      />
      <Hero />
      <Sponsors />
      <Showcase />
      <Executives />
      <OurServices />
      <Testimonials />
      <Faq collapsible={collapsible} handleCollapse={handleCollapsible} />
      <Callout />
      <Footer
        screenWidth={width}
        footerExtension={footerExtension}
        toggleExtension={() => setFooterExtension(!footerExtension)}
      />
    </main>
  );
}

export default App;
