"use client";
import Image from "next/image";
import React, {useState} from "react";

import ShopNowComponent from "./shopNow.component";

import {typeBanner} from "@/types";
import {cn} from "@/libs/utils";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const {data} = useQueryProduct.useBanners();
  const banners: typeBanner[] = data?.banners || [];

  return (
    <div className="h-[344px] w-[892px]">
      <div className="relative flex h-full w-full items-center justify-center bg-black">
        <div className="absolute flex h-full w-full items-center justify-between">
          {banners && banners.length > 0 ? (
            <div className="ml-16 mr-8 flex flex-1 flex-col gap-5 text-Text">
              <div className="flex items-center gap-6">
                <Image alt="svg icon" height={40} src={banners[currentIndex]?.logo} width={40} />
                <p>{banners[currentIndex].type}</p>
              </div>
              <h3 className="font-inter-font text-5xl font-semibold leading-[60px] tracking-[0.04em]">
                {banners[currentIndex].name}
              </h3>
              <ShopNowComponent arrow link="#" />
            </div>
          ) : (
            <div className="flex items-center justify-center text-3xl">No banner</div>
          )}
          <div className="flex h-full w-1/2 justify-center lg:w-[496px]">
            <Image
              alt="icon row right"
              height={352}
              src={banners[currentIndex]?.image}
              width={496}
            />
          </div>
        </div>

        <div className="absolute bottom-3 mt-4 flex w-full justify-center gap-2">
          {banners.map((_, index) => (
            <div
              key={index}
              className={cn("h-3 w-3 rounded-full bg-Primary opacity-50 hover:cursor-pointer", {
                "border-2 border-Primary bg-Secondary2 opacity-100": index === currentIndex,
              })}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
