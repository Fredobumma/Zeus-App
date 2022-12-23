import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SVGSource } from "./common/svg";
import Navbar from "./common/component-blocks/navbar";
import Home from "./components/home";
import University from "./components/university";
import Courses from "./components/courses";
import UseCases from "./components/useCases";
import Plans from "./components/plans";
import Resources from "./components/resources";
import Careers from "./components/careers";
import Socials from "./components/socials";
import Activity from "./components/activity";
import License from "./components/license";
import Refunds from "./components/refunds";
import Cookies from "./components/cookies";
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

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef[0].current.offsetTop,
      behavior: "smooth",
    });
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
            path="/home/*"
            element={
              <Home
                collapsible={collapsible}
                footerExtension={footerExtension}
                width={width}
                toggleExtension={() => setFooterExtension(!footerExtension)}
                handleCollapsible={handleCollapsible}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route path="/university" element={<University />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/plans/*" element={<Plans />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/license" element={<License />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
