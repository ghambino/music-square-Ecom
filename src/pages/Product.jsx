import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../utilities/context";
import StoreInfo from "../components/StoreInfo";
import CategoryDisplay from "../components/CategoryDisplay";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action";

function Product() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { fetchedData } = useContext(DataContext);
  const [itemNumber, setItemNumber] = useState(1);
  console.log(fetchedData);

  const filterProduct = fetchedData.filter((unit) => unit.slug == slug);

  // const addProduct = (product) => {
  //   dispatch()
  // }

  return (
    <>
      {fetchedData == undefined ? (
        <h1 className="text-black">loading....</h1>
      ) : (
        <div className="bg-white px-[24px] md:px-[40px] lg:px-[165px] pt-[60px]">
          <Link to="/" className="hover:text-brown">
            Go Back
          </Link>
          {filterProduct.map((unit, index) => (
            <>
              <div
                key={index}
                className="h-[560px] flex items-center gap-[125px] mt-[60px]"
              >
                <div className={`h-[560px] w-[560px]`}>
                  <img src={unit.image.desktop} alt="prode" />
                </div>
                <div className="h-[100%] w-[560px] pt-[40px]">
                  <div className="w-[445px]">
                    <p className="text-brown tracking-[8px] uppercase font-medium mb-[16px]">
                      {unit.new ? "new product" : ""}
                    </p>
                    <h1 className="uppercase font-bold text-[40px] leading-[44px] tracking-[2px] mb-[32px]">
                      {unit.name}
                    </h1>
                    <p className="opacity-50 font-medium text-[15px] leading-[25px] mb-[20px]">
                      {" "}
                      {unit.description}
                    </p>
                    <p className="font-bold uppercase text-[18px] mb-[1.5rem]">
                      $ {unit.price}
                    </p>
                    <div className="flex items-center gap-[1rem]">
                      <div>
                        <button
                          className="bg-custom-gray p-[10px] mr-[2px]"
                          onClick={() =>
                            itemNumber > 1
                              ? setItemNumber(itemNumber - 1)
                              : setItemNumber(1)
                          }
                        >
                          -
                        </button>
                        <span className="bg-custom-gray p-[10px]">
                          {itemNumber}
                        </span>
                        <button
                          className="bg-custom-gray p-[10px] ml-[2px]"
                          onClick={() => setItemNumber(itemNumber + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="px-[30px] py-[15px] bg-brown text-white uppercase text-[13px]"
                        onClick={() => dispatch(addItem(unit))}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[125px] mb-[140px]">
                <div className="w-[635px]">
                  <h2 className="font-bold text-[2rem] leading-[36px] mb-[32px]">
                    Features
                  </h2>
                  <p className="opacity-50 font-medium text-[15px] leading-[25px]">
                    {unit.features}
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-[2rem] leading-[36px] mb-[32px] uppercase">
                    in the box
                  </h2>
                  <div>
                    {unit.includes.map((once, index) => (
                      <div key={index} className="flex gap-[24px] mb-[8px]">
                        <span className="text-brown font-bold text-[15px]">
                          {once.quantity}x
                        </span>
                        <span className="opacity-50 font-medium text-[15px]">
                          {once.item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[592px] grid grid-cols-2 grid-rows-2 gap-4 border border-black mb-[125px]">
                <div className={`border border-black`}>
                  <img
                    src={unit.gallery.first.desktop}
                    alt=""
                    className="h-[100%] w-[100%]"
                  />
                </div>
                <div className={`border border-black row-span-2`}>
                  <img
                    src={unit.gallery.third.desktop}
                    alt=""
                    className="object-cover h-[100%] w-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src={unit.gallery.second.desktop}
                    alt=""
                    className="h-[100%] w-[100%]"
                  />
                </div>
              </div>
              <div className="mb-[90px]">
                <h2 className="font-bold uppercase text-center text-[32px] mb-[32px]">
                  you may also like
                </h2>
                <div className="flex justigy-between gap-[2rem] text-center">
                  {unit.others.map((uni, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[32px]"
                    >
                      <img src={uni.image.desktop} alt="" className="" />
                      <h2 className="font-bold text-[24px]">{uni.name}</h2>
                      <Link
                        to={`/${uni.slug}`}
                        className="px-[30px] py-[15px] bg-brown text-white uppercase text-[13px]"
                      >
                        see product
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
          <CategoryDisplay />
          <StoreInfo />
        </div>
      )}
    </>
  );
}

export default Product;
