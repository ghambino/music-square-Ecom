import React, { useState } from "react";
import CategoryDisplay from "../components/CategoryDisplay";
import StoreInfo from "../components/StoreInfo";
import { Link } from "react-router-dom";

function Category({ fetchedData, filteredData, category }) {
  return (
    <>
      {!fetchedData ? (
        <div>loading....</div>
      ) : (
        <div>
          <div className="bg-black px-[24px] md:px-[40px] lg:px-[165px] text-white h-[20vh] md:h-[30vh] flex items-center justify-center">
            <h2 className="uppercase font-bold text-[28px] md:text-[40px]">
              {category}
            </h2>
          </div>
          <div className="bg-white px-[24px] md:px-[40px] lg:px-[165px] pt-[60px]">
            {filteredData.map((unit, index) => (
              <div
                key={index}
                className="lg:mb-[160px] mb-[120px] flex flex-col lg:flex-row items-center  gap-[32px] md:gap-[52px] lg:gap-[125px] lg:even:flex-row-reverse"
              >
                <div className={`w-[100%] lg:w-[560px]`}>
                  <img src={unit.image.desktop} alt="" />
                </div>
                <div className=" w-[100%] lg:w-[560px] text-center lg:text-start">
                  <div className="lg:w-[445px]">
                    <p className="text-brown tracking-[8px] uppercase font-medium mb-[16px]">
                      {unit.new ? "new product" : ""}
                    </p>
                    <h1 className="uppercase font-bold text-[28px] md:text-[40px]  leading-[38px] md:leading-[44px] tracking-[2px] mb-[24px] md:mb-[32px]">
                      {unit.name}
                    </h1>
                    <p className="opacity-50 font-medium text-[15px] leading-[25px] mb-[40px]">
                      {" "}
                      {unit.description}
                    </p>
                    <Link
                      to={`/${unit.slug}`}
                      className="px-[30px] py-[15px] bg-brown text-white text-[13px] uppercase"
                    >
                      see product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <CategoryDisplay />
            <StoreInfo />
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
