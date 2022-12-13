import React from "react";
// import { useState } from "react";
import { SVGSource } from "./common/svg";
// import Navbar from "./common/component-blocks/navbar";
// import Hero from "./common/component-blocks/block-hero";
// import Showcase from "./common/component-blocks/block-showcase";
import Testimonials from "./common/component-blocks/block-testimonial";
// import Faq from "./common/component-blocks/block-faq";
// import Footer from "./common/component-blocks/block-footer";
// import useWindowDimensions from "./common/utilities/useWindowDimensions";

function App() {
  // const [collapsible, setCollapsible] = useState([]);
  // const [menuIcon, setMenuIcon] = useState(false);
  // const [subMenuIcon, setSubMenuIcon] = useState(false);
  // const { width } = useWindowDimensions(false);

  // const handleCollapsible = (id) => {
  //   const clonedArray = [...collapsible];
  //   const item = clonedArray.find((el) => el.id === id);
  //   if (item === undefined) clonedArray.push({ id, click: true });
  //   else item.click = !item.click;
  //   setCollapsible(clonedArray);
  // };

  // const handleMenuIcon = () => {
  //   setMenuIcon(!menuIcon);
  // };

  // const handleSubMenuIcon = () => {
  //   setSubMenuIcon(!subMenuIcon);
  // };

  return (
    <main className="mx-auto">
      <SVGSource />
      {/* <Navbar
        menuIcon={menuIcon}
        screenWidth={width}
        subMenuIcon={subMenuIcon}
        toggleMenu={handleMenuIcon}
        toggleSubMenu={handleSubMenuIcon}
      /> */}
      {/* <Hero /> */}
      {/* <Showcase /> */}
      <Testimonials />
      {/* <Faq collapsible={collapsible} handleCollapse={handleCollapsible} /> */}
      {/* <Footer screenWidth={width} /> */}
    </main>
  );
}

export default App;
