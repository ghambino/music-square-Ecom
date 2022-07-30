import React from "react";
import { Link } from 'react-router-dom'
import headphone from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

function CategoryDisplay() {
  return (
    <div>
      <div className="mt-[120px] flex gap-[30px]">
        <div className="h-[204px] w-[350px] bg-custom-gray flex flex-col items-center">
          <img
            src={headphone}
            alt="headphone"
            className="h-[160px] w-[160px] mt-[-3rem]"
          />
          <p className="font-bold text-18px uppercase mb-[15px]">headphones</p>
          <Link to='/headphones' className="hover:text-brown flex items-center gap-[1rem] uppercase font-bold opacity-50">
            shop <img src={arrowRight} alt="arrow-right" />
          </Link>
        </div>
        <div className="h-[204px] w-[350px] bg-custom-gray flex flex-col items-center">
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
        </div>
      </div>
    </div>
  );
}

export default CategoryDisplay;
