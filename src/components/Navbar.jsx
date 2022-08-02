import React, { useContext, useState } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import headphone from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { links } from "../utilities/helper";
import { useSelector } from "react-redux";
import { DataContext } from "../utilities/context";
import Cart from "../pages/Cart";

function Navbar() {
  const [harmburgerClick, setHamburgerClick] = useState(false);
  // const { cartItems } = useContext(DataContext);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="bg-black px-[24px] md:px-[40px] lg:px-[165px] relative">
      <div className="py-[32px] border-b border-b-gray-500 border-solid">
        <div className="flex justify-between items-center text-white">
          <div className="flex justify-between items-center gap-[58px] md:gap-[42px]">
            <img
              src={hamburger}
              alt="hamburger-icon"
              className="lg:hidden h-[15px]"
              onClick={() => setHamburgerClick(!harmburgerClick)}
            />
            <img src={logo} alt="audiophiles" className="h-[25px]" />
          </div>
          {/* ///// */}
          <div className={`lg:hidden absolute top-[100%] ${harmburgerClick ? "left-[0]" : "left-[-1100%]"} md:h-[40vh] w-[100%] flex flex-col gap-6  h-[80vh] px-[24px] py-[32px] z-50 bg-white rounded text-black md:px-[20px] md:py-[56px] md:flex md:flex-row md:justify-between md:items-center`}>
           <div className=" rounded p-[12px] bg-custom-gray flex flex-col items-center">
          <img
            src={headphone}
            alt="headphone"
            className="h-[75px] w-[75px] mt-[-2rem]"
          />
          <p className="font-bold text-[15px] uppercase mb-[8px]">headphones</p>
          <Link to='/headphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50 text-[12px]">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
           <div className=" p-[12px] bg-custom-gray flex flex-col items-center">
          <img
            src={speaker}
            alt="headphone"
            className="h-[75px] w-[75px] mt-[-2rem]"
          />
          <p className="font-bold text-[15px] uppercase mb-[8px]">speakers</p>
          <Link to='/headphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50 text-[12px]">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
           <div className="p-[12px] bg-custom-gray flex flex-col items-center">
          <img
            src={earphone}
            alt="headphone"
            className="h-[75px] w-[75px] mt-[-2rem]"
          />
          <p className="font-bold text-[15px] uppercase mb-[8px]">earphones</p>
          <Link to='/headphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50 text-[12px]">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
        {/* <div className="h-[204px] w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={speaker}
            alt="speaker"
            className="h-[146px] w-[146px] mt-[-2.5rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">speakers</p>
          <Link to='/speakers' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className="h-[204px] w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={earphone}
            alt="earphone"
            className="h-[125px] w-[125px] mt-[-2rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">earphones</p>
          <Link to='/earphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>  */}
          </div>
          {/* //// */}
          <nav className="hidden list-none lg:flex justify-between items-center uppercase font-bold text-[13px] gap-9 ">
            {links.map((unit, index) => (
              <Link
                to={`/${unit.toLowerCase() == "home" ? "" : `${unit}`}`}
                key={index}
                className="hover:text-[#D87D4A]"
              >
                {unit}
              </Link>
            ))}
          </nav>
          <div className="">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
