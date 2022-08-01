import React, { useContext } from "react";
import cartImg from "/assets/shared/desktop/icon-cart.svg";
import logo from "/assets/shared/desktop/logo.svg";
import hamburger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { links } from "../utilities/helper";
import { useSelector } from "react-redux";
import { DataContext } from "../utilities/context";
import Cart from "../pages/Cart";

function Navbar() {
  // const { cartItems } = useContext(DataContext);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="bg-black px-[24px] md:px-[40px] lg:px-[165px]">
      <div className="py-[32px] border-b border-b-gray-500 border-solid">
        <div className="flex justify-between items-center text-white">
          <div className="flex justify-between items-center gap-[58px] md:gap-[42px]">
            <img
              src={hamburger}
              alt="hamburger-icon"
              className="lg:hidden h-[15px]"
            />
            <img src={logo} alt="audiophiles" className="h-[25px]" />
          </div>
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
            {/* <Link to="/cart" className="flex gap-[5px]">
              <img src={cartImg} alt="cart-image" className="h-5" />
              <span>{cart.length}</span>
            </Link> */}
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;