import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/header";

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 9950);
    return () => clearTimeout(timer);
  });

  return (
    <section>
      <Header
        header="max-w-80% mt-12 mx-auto text-center text-secondary bigTab:max-w-700 laptop:max-w-80%"
        type="h2"
        heading="Signing Out"
        headingClasses="font-bold inline-block signout relative tablet:leading-[56px] text-3xl tablet:text-40 laptop:text-5xl"
        textClasses="loader mt-20"
      />
    </section>
  );
};

export default Signout;
