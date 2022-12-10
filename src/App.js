// import { useState } from "react";
import { SVGSource } from "./common/svg";
// import Button from "./common/button";
// import Footer from "./common/component blocks/block-footer";
// import useWindowDimensions from "./common/utilities/useWindowDimensions";

function App() {
  // const [collapsible, setCollapsible] = useState({ id: "", click: false });
  // const { width } = useWindowDimensions(false);

  // const handleCollapsible = (id) => {
  //   setCollapsible({ id, click: !collapsible.click });
  // };

  return (
    <main className="mx-auto">
      <SVGSource />
      {/* <Footer screenWidth={width} /> */}
    </main>
  );
}

export default App;
