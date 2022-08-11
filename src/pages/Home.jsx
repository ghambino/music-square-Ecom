import React from "react";
import earp from "/assets/home/desktop/image-earphones-yx1.jpg";
import CategoryDisplay from "../components/CategoryDisplay";
import StoreInfo from "../components/StoreInfo";
import { Link } from 'react-router-dom'

// import heroBg from '../starter-code/assets/home/desktop/image-hero.jpg'

function Home() {
  return (
    <div>
      <div className=" flex items-center justify-center lg:justify-start bg-[url('/assets/home/desktop/image-hero.jpg')] bg-[bottom_-2rem_right_-20rem] lg:bg-[center_bottom_-2.5rem] bg-auto px-[24px] md:px-[40px] lg:px-[165px] h-[90vh] md:bg-[bottom_-2rem_right_-17rem]">
        <div className="text-white w-[100%]  md:w-[379px] text-center lg:text-left">
          <p className=" text-[14px] opacity-50 tracking-[1rem] mb-[16px] lg:mb-[24px]">
            NEW PRODUCT
          </p>
          <h1 className="font-700 text-[36px] lg:text-[56px] leading-[40px] lg:leading-[58px] tracking-[2px] mb-[24px]">
            XX99 Mark II Headphones
          </h1>
          <p className="opacity-75 text-[15px] font-medium leading-[25px] mb-[40px] w-[100%] lg:w-[349px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/xx99-mark-two-headphones`} className="bg-light-brown py-[15px] px-[30px]"> 
            See Product
          </Link>
        </div>
      </div>
      <div className="bg-white px-[24px] md:px-[40px] lg:px-[165px]">
        <CategoryDisplay />
        <div className="px-[1rem] mb-[48px] mt-[120px] h-[560px] bg-brown bg-[url('./assets/home/desktop/pattern-circles.svg')] bg-cover bg-no-repeat lg:bg-[center_right_27rem] flex flex-col items-center lg:flex-row lg:px-[95px] lg:items-center gap-[30px]">
          <img
            src={"/assets/home/desktop/image-speaker-zx9.png"}
            alt=""
            className=" h-[207px] w-[207px] md:h-[237px] md:w-[237px] lg:h-[493px] lg:w-[493px] lg:mt-[4.5rem] mt-[2rem]"
          />

          <div className="text-center lg:text-left w-[100%] md:w-[349px]  mt-[1rem] lg:mt-[5rem] text-white">
            <h1 className="lg:w-[261px] font-bold lg:text-[46px] text-[32px] w-[60%] lg:leading-[58px] leading-[32px] mx-auto lg:mx-0">
              ZX9 SPEAKER
            </h1>
            <p className="my-[24px] opacity-75 font-medium text-[15px] leading-[25px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={`/zx9-speaker`} className=" mt-[24px] lg:mt-[40px] bg-black text-white py-[15px] px-[30px] uppercase text-[13px]">
              see product
            </Link>
          </div>
        </div>
        <div className="flex items-center rounded-md h-[320px] bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')] bg-center mb-[48px]">
          <div className="pl-[95px] border text-start ">
            <h1 className="font-bold text-[28px] leading-[38.5px] tracking-[2px] uppercase mb-[32px]">
              zx7 speaker
            </h1>
            <Link to={`/zx7-speaker`} className="uppercase px-[30px] py-[15px] text-black border border-black border-solid text-[13px]">
              {" "}
              see product
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <img src={earp} alt="" className="rounded-md md:w-50%" />
          <div className="rounded-md bg-custom-gray md:w-[50%] md:pl-[95px] md:pt-[3rem] w-[100%] px-[24px] py-[48px]">
            <h2 className="uppercase font-bold text-[28px] mb-[32px]">
              YX1 EARPHONES
            </h2>
            <Link to={`/yx1-earphones`} className="uppercase px-[30px] py-[15px] text-black border border-black border-solid text-[13px]">
              see product
            </Link>
          </div>
        </div>
        <StoreInfo />
      </div>
    </div>
  );
}

export default Home;
