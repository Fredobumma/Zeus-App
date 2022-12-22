import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./plans/dashboard";
import Earnings from "./plans/Earnings";
import Settings from "./plans/settings";
import Signout from "./plans/signout";

const Plans = () => {
  return (
    <React.Fragment>
      <div className="my-3 tablet:my-4 laptop:my-7">
        <h1 className="bg-secondary font-bold inline ml-2.5 mx-0 px-6 text-40 text-white tablet:text-7xl laptop:text-80">
          Plans
        </h1>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </React.Fragment>
  );
};

export default Plans;
