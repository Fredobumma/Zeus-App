// import { useState } from "react";
import { SVGSource } from "./common/svg";
// import Navbar from "./common/component-blocks/navbar";
// import Hero from "./common/component-blocks/block-hero";
// import Showcase from "./common/component-blocks/block-showcase";
// import Footer from "./common/component-blocks/block-footer";
// import useWindowDimensions from "./common/utilities/useWindowDimensions";

function App() {
  // const [collapsible, setCollapsible] = useState({});
  // const [menuIcon, setMenuIcon] = useState(false);
  // const [subMenuIcon, setSubMenuIcon] = useState(false);
  // const { width } = useWindowDimensions(false);

  // const handleCollapsible = () => {
  //   setCollapsible(!collapsible);
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
      {/* <Footer screenWidth={width} /> */}
    </main>
  );
}

export default App;
