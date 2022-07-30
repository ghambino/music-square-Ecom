import React from "react";
import user from "/assets/shared/desktop/image-best-gear.jpg";

function StoreInfo() {
  return (
    <div>
      <div className="flex items-center gap-[50px] my-[150px]">
        <div className="w-[52%]">
          <h1 className="font-bold text-[40px] tracking-[1.43px] leading-[44px] uppercase mb-[32px]">
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
          <img src={user} alt="earphone-user" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
