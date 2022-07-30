import React from "react";
import logo from "/assets/shared/desktop/logo.svg";
import facebookLogo from "/assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "/assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "/assets/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

import { links } from "../utilities/helper";

function Footer() {
  return (
    <div className="bg-black px-[24px] md:px-[40px] lg:px-[165px] text-white pt-[52px] pb-[38px] md:pb-[46px] md:pt-[60px] lg:pb-[48px] lg:pt-[75px]">
      <div className="">
        <div className="flex flex-col items-center gap-[48px] md:items-start lg:flex-row lg:justify-between lg:items-center">
          <img src={logo} alt="logo svg" />
          <div className="list-none uppercase text-[13px] flex flex-col items-center gap-[16px] md:flex-row font-bold">
            {links.map((unit, index) => (
              <div key={index}>
                <Link to={`/${unit}`} className="hover:text-brown">
                  {unit}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-[59px] text-[15px] text-center leading-[25px] mb-[37px] md:text-start lg:w-1/2 opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col justify-center items-center gap-[48px] md:flex md:flex-row md:justify-between md:items-center">
          <p className="text-[15px] leading-[25px] opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center items-center gap-[16px] lg:mt-[-196px]">
            <a href="#" className="">
              {" "}
              <img
                src={facebookLogo}
                alt="facebook"
                className="h-6 w-6 hover:color-brown"
              />
            </a>
            <img src={twitterLogo} alt="twitter" className="h-6 w-6" />
            <img src={instagramLogo} alt="instagram" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
