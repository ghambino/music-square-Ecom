import React from "react";
import user from "/assets/shared/desktop/image-best-gear.jpg";

function StoreInfo() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center gap-[50px] lg:my-[150px] my-[96px]">
        <div className="w-[100%] lg:w-[52%] text-center">
          <h1 className="font-bold text-[28px] md:text-[40px] tracking-[1.43px] md:leading-[44px] leading-[38px] uppercase mb-[32px]">
            Bringing you the <span className="text-brown">best</span> audio gear
          </h1>
          <p className="opacity-50 font-medium text-[15px] leading-[25px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img src={user} alt="earphone-user" className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
