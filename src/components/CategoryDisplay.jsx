import React from "react";
import { Link } from 'react-router-dom'
import headphone from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

function CategoryDisplay() {
  return (
    <div>
      <div className="w-[100%] lg:mt-[120px] mt-[80px] flex flex-col gap-[50px] md:flex md:gap-[30px] md:flex-row">
        <div className="rounded w-[100%] lg:h-[204px] lg:w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={headphone}
            alt="headphone"
            className=" h-[100px] w-[100px] lg:h-[160px] lg:w-[160px] mt-[-3rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">headphones</p>
          <Link to='/headphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className="rounded w-[100%] lg:h-[204px] lg:w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={speaker}
            alt="speaker"
            className="h-[100px] w-[100px] lg:h-[146px] lg:w-[146px] mt-[-2.5rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">speakers</p>
          <Link to='/speakers' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className=" rounded w-[100%] lg:h-[204px] lg:w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={earphone}
            alt="earphone"
            className="h-[100px] w-[100px] lg:h-[125px] lg:w-[125px] mt-[-2rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">earphones</p>
          <Link to='/earphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryDisplay;
