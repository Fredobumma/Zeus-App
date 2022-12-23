import React from "react";
import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div className="py-1">
      <Link
        to="/signout"
        className="active:text-white active:bg-secondary block focus:bg-gray-100 focus:font-semibold hover:bg-gray-100 hover:font-semibold outline-0 px-4 py-2 text-sm text-secondary"
      >
        Sign out
      </Link>
    </div>
  );
};

export default SignOut;
