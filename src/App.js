import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SVGSource } from "./common/svg";
import Navbar from "./common/component-blocks/navbar";
import Home from "./components/home";
import University from "./components/university";
import Courses from "./components/courses";
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
    <React.Fragment>
      <SVGSource />
      <Navbar
        menuIcon={menuIcon}
        screenWidth={width}
        subMenuIcon={subMenuIcon}
        toggleMenu={() => setMenuIcon(!menuIcon)}
        toggleSubMenu={() => setSubMenuIcon(!subMenuIcon)}
      />
      <main className="mx-auto">
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                collapsible={collapsible}
                footerExtension={footerExtension}
                width={width}
                toggleExtension={() => setFooterExtension(!footerExtension)}
                handleCollapsible={handleCollapsible}
              />
            }
          />
          <Route path="/university" element={<University />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
