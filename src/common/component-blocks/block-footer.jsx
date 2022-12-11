import React from "react";
import { SVG } from "../svg";

const Footer = ({ screenWidth }) => {
  return (
    <div>
      {screenWidth >= 1280 ? (
        <div className="border-b border-line flex flex-row-reverse justify-between pb-10 relative">
          <span className="py-3">
            <span className="font-medium inline opacity-50 px-6 py-3">
              More +
            </span>
            <span className="font-medium opacity-50 px-6 py-3">Refunds</span>
            <span className="font-medium opacity-50 px-6 py-3">Cookies</span>
          </span>
          <span className="absolute h-10 inset-0 justify-center mt-1 mx-auto w-150">
            <SVG id="logo" height="100%" width="100%" />
          </span>
          <span className="py-3">
            <span className="font-medium opacity-50 px-6">Privacy Policy</span>
            <span className="font-medium opacity-50 px-6">
              Terms & Conditions
            </span>
          </span>
        </div>
      ) : (
        <div className="border-line flex flex-col justify-center laptop:flex-row laptop:border-b laptop:justify-between laptop:pb-5">
          <span className="inline-block h-10 mx-auto w-150 laptop:mt-1 laptop:mx-0">
            <SVG id="logo" height="100%" width="100%" />
          </span>
          <div className="border-b border-t border-line flex flex-wrap justify-center mt-8 pb-5 pt-5 laptop:border-b-0 laptop:border-t-0 laptop:flex-row-reverse laptop:mt-0 laptop:pt-0">
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              About Us
            </span>
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              Team
            </span>
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              Careers
            </span>
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              Socials
            </span>
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              Activity
            </span>
            <span className="font-medium opacity-50 px-6 py-3 laptop:hidden">
              License
            </span>
            <span className="hidden font-medium opacity-50 px-6 py-3 laptop:inline">
              More +
            </span>
            <span className="font-medium opacity-50 px-6 py-3">Refunds</span>
            <span className="font-medium opacity-50 px-6 py-3">Cookies</span>
            <span className="font-medium opacity-50 px-6 py-3">
              Privacy Policy
            </span>
            <span className="font-medium opacity-50 px-6 py-3">
              Terms & Conditions
            </span>
          </div>
        </div>
      )}
      <div className="font-light mt-8 opacity-50 text-center text-sm bigTab:mt-10">
        <p className="mb-2.5">Copyright &copy; 2022 Zeus UI</p>
        <p>Designed by @setProduct (Figma) and built by Manfred Obumma</p>
      </div>
    </div>
  );
};

export default Footer;
