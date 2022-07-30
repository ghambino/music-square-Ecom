import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CategoryDisplay from "../components/CategoryDisplay";
import StoreInfo from "../components/StoreInfo";

function Category() {
  const { cat } = useParams();
  const [audiophilesData, setAudiophilesData] = useState([]);

  const filterOnCategory = audiophilesData
    .filter((unit) => unit.category === cat)
    .sort((a, b) => b.new - a.new);

  console.log(filterOnCategory);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/data.json");
        setAudiophilesData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [cat]);
  return (
    <>
      {!audiophilesData ? (
        <div>loading....</div>
      ) : (
        <div>
          <div className="bg-black px-[24px] md:px-[40px] lg:px-[165px] text-white h-[30vh] flex items-center justify-center">
            <h2 className="uppercase font-bold text-[28px]">{cat}</h2>
          </div>
          <div className="bg-white px-[24px] md:px-[40px] lg:px-[165px] pt-[60px]">
            {filterOnCategory.map((unit, index) => (
              <div
                key={index}
                className="h-[560px] flex items-center gap-[125px] even:flex-row-reverse"
              >
                <div className={`h-[560px] w-[560px]`}>
                  <img src={unit.image.desktop} alt="" />
                </div>
                <div className="h-[100%] w-[560px] pt-[60px]">
                  <div className="w-[445px]">
                    <p className="text-brown tracking-[8px] uppercase font-medium mb-[16px]">
                      {unit.new ? "new product" : ""}
                    </p>
                    <h1 className="uppercase font-bold text-[40px] leading-[44px] tracking-[2px] mb-[32px]">
                      {unit.name}
                    </h1>
                    <p className="opacity-50 font-medium text-[15px] leading-[25px] mb-[40px]">
                      {" "}
                      {unit.description}
                    </p>
                    <Link to={`/assets/${unit.id}`} className="px-[30px] py-[15px] bg-brown text-white uppercase">
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
