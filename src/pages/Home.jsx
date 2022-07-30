import React from "react";
import earp from "/assets/home/desktop/image-earphones-yx1.jpg";
import CategoryDisplay from  "../components/CategoryDisplay";
import StoreInfo from "../components/StoreInfo";

// import heroBg from '../starter-code/assets/home/desktop/image-hero.jpg'

function Home() {
  return (
    <div>
      <div className=" flex items-center bg-[url('./assets/home/desktop/image-hero.jpg')] bg-[bottom_3rem_right_-9rem] lg:bg-[center_bottom_-2.5rem] bg-auto px-[24px] md:px-[40px] lg:px-[165px] h-[90vh] md:bg-[center]">
        <div className="text-white w-[379px]">
          <p className="opacity-50 tracking-[1rem] mb-[24px]">NEW PRODUCT</p>
          <h1 className="font-700 text-[56px] leading-[58px] tracking-[2px] mb-[24px]">
            XX99 Mark II Headphones
          </h1>
          <p className="opacity-75 text-[15px] font-medium leading-[25px] mb-[40px] w-[349px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-light-brown py-[15px] px-[30px]">
            See Product
          </button>
        </div>
      </div>
      <div className="bg-white px-[24px] md:px-[40px] lg:px-[165px]">
        <CategoryDisplay />
        <div className="mb-[48px] mt-[120px] h-[560px] bg-brown bg-[url('./assets/home/desktop/pattern-circles.svg')] bg-cover bg-no-repeat bg-[center_right_27rem]">
          {/* <img src={speaker} alt="speaker" className='border object-fill' /> */}
          <div className=" flex items-center justify-end h-[100%] bg-no-repeat bg-[length:400px_400px] bg-[bottom_left_7rem] bg-[url('./assets/home/desktop/image-speaker-zx9.png')]">
            <div className="w-[349px] mt-[5rem]">
              <h1 className="w-[261px] font-bold text-[46px] leading-[58px]">
                ZX9 SPEAKER
              </h1>
              <p className="mt-[24px] opacity-75 font-medium text-[15px] leading-[25px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="mt-[40px] bg-black text-white py-[15px] px-[30px] uppercase text-[13px]">
                see product
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center h-[320px] bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')] mb-[48px]">
          <div className="pl-[95px]">
            <h1 className="font-bold text-[28px] leading-[38.5px] tracking-[2px] uppercase mb-[32px]">
              zx7 speaker
            </h1>
            <button className="uppercase px-[30px] py-[15px] text-black border border-black border-solid text-[13px]">
              {" "}
              see product
            </button>
          </div>
        </div>
        <div className="w-[100%] flex gap-[30px]">
          <img src={earp} alt="" />
          <div className="bg-custom-gray w-[50%] flex flex-col items-start justify-center pl-[95px]">
            <h2 className="uppercase font-bold text-[28px] mb-[32px]">
              YX1 EARPHONES
            </h2>
            <button className="uppercase px-[30px] py-[15px] text-black border border-black border-solid text-[13px]">
              see product
            </button>
          </div>
        </div>
        <StoreInfo />
      </div>
    </div>
  );
}

export default Home;
