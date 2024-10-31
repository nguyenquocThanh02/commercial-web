"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

import {Skeleton} from "../ui/skeleton";

import ShopNowComponent from "./shopNow.component";

import {typeBanner} from "@/types";
import {cn} from "@/libs/utils";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const {data, isLoading} = useQueryProduct.useBanners();
  const banners: typeBanner[] = data?.banners || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (isLoading) {
    return <Skeleton className="h-[344px] w-[892px]" />;
  }

  return (
    <div className="h-[220px] w-full sm:h-[344px] xl:w-[892px]">
      <div className="relative flex h-full w-full items-center justify-center bg-black">
        <div className="absolute flex h-full w-full items-center justify-between">
          {banners && banners.length > 0 ? (
            <div className="ml-16 mr-8 flex w-1/2 flex-col gap-2 text-Text lg:gap-5 xl:flex-1">
              <div className="flex items-center gap-3 lg:gap-6">
                <Image
                  alt="svg icon"
                  className="flex-shrink"
                  height={40}
                  src={banners[currentIndex]?.logo}
                  width={40}
                />
                <p className="w-2/3">{banners[currentIndex].type}</p>
              </div>
              <h3 className="font-inter-font font-semibold leading-relaxed tracking-[0.04em] sm:text-3xl lg:text-4xl lg:leading-[60px] xl:text-5xl">
                {banners[currentIndex].name}
              </h3>
              <ShopNowComponent arrow link="#" />
            </div>
          ) : (
            <div className="flex items-center justify-center bg-lime-300 text-3xl">No banner</div>
          )}
          <div className="flex justify-center">
            <Image
              alt="icon row right"
              height={352}
              objectFit="cover"
              quality={100}
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
