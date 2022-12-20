import React from "react";
import { SVG } from "../svg";

const Footer = ({ footerExtension, screenWidth, toggleExtension }) => {
  const mobileLinks = [
    "About Us",
    "Team",
    "Careers",
    "Socials",
    "Activity",
    "License",
  ];
  const widerScreenLinks = [
    "More",
    "Refunds",
    "Cookies",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  const more = (target) => target === widerScreenLinks[0];

  return (
    <div className="pb-8 pt-12 tablete:pt-16 laptop:pb-10 laptop:pt-20">
      {screenWidth >= 1280 ? (
        <div className="border-b border-line flex justify-between pb-10 relative">
          <span className="py-3">
            <ul className="flex flex-row-reverse">
              {widerScreenLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a href="#empty" className="font-medium opacity-50 px-6">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </span>
          <span className="py-3">
            <ul className="flex flex-row-reverse">
              {widerScreenLinks.slice(0, 3).map((link, index) => (
                <li
                  key={index}
                  className={more(link) && "relative"}
                  onClick={more(link) && toggleExtension}
                >
                  <a
                    href="#empty"
                    className="flex focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6"
                    title={more(link) && "Click for more options"}
                  >
                    {link}
                    {more(link) && (
                      <span>
                        <SVG
                          id={`angle-${(footerExtension && "down") || "up"}`}
                        />
                      </span>
                    )}
                    {more(link) && footerExtension && (
                      <span className="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center">
                        <ul
                          className="py-1 text-sm text-secondary"
                          aria-labelledby="dropdownLargeButton"
                        >
                          {mobileLinks.map((link, index) => (
                            <li key={index}>
                              <a
                                href="#empty"
                                className="active:text-white active:bg-secondary block focus:bg-white focus:font-medium hover:bg-white hover:font-semibold outline-0 px-4 py-2"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </span>
          <span className="absolute h-10 inset-0 justify-center mt-1 mx-auto w-150">
            <SVG id="logo" height="100%" width="100%" />
          </span>
        </div>
      ) : (
        <div className="border-line flex flex-col items-center justify-center laptop:flex-row laptop:border-b laptop:justify-between laptop:pb-5">
          <span className="inline-block h-10 mx-auto w-150 laptop:mx-0">
            <SVG id="logo" height="100%" width="100%" />
          </span>
          <ul className="border-b border-t border-line flex flex-wrap gap-y-4 items-center justify-center mt-8 py-5 laptop:border-b-0 laptop:border-t-0 laptop:flex-row-reverse laptop:mt-0 laptop:py-0">
            {mobileLinks.concat(widerScreenLinks).map((link, index) => (
              <li
                key={index}
                className={more(link) && "relative"}
                onClick={more(link) && toggleExtension}
              >
                <a
                  href="#empty"
                  className={`${
                    more(link) && "hidden laptop:inline-flex"
                  } focus:opacity-100 focus:text-secondary hover:opacity-100 hover:text-secondary font-medium opacity-50 px-6 ${
                    mobileLinks.find((lk) => lk === link) && "laptop:hidden"
                  }`}
                >
                  {link}
                  {more(link) && (
                    <span>
                      <SVG
                        id={`angle-${(footerExtension && "down") || "up"}`}
                      />
                    </span>
                  )}
                  {more(link) && footerExtension && (
                    <span className="absolute bg-gray-100 font-normal bottom-[150%] inset-x-0 mt-2 mx-auto rounded shadow text-center">
                      <ul
                        className="py-1 text-sm text-secondary"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {mobileLinks.map((link, index) => (
                          <li key={index}>
                            <a
                              href="#empty"
                              className="active:text-white active:bg-secondary block focus:bg-white focus:font-semibold hover:bg-white hover:font-medium outline-0 px-4 py-2"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
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
