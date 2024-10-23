"use client";
import {useTranslations} from "next-intl";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import ListProductSkeleton from "../skeleton/listProduct.skeleton";

import SectionTitle from "./sectionTitle.component";
import CountdownTimeSaleComponent from "./countdownTimeSale.component";
import PrimaryButton from "./primaryButton.ui";
import ProductCardComponent from "./productCart.component";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {useQueryProduct} from "@/hooks/useQueryHooks";
import {cn} from "@/libs/utils";
import {typeProduct} from "@/types";
const FlashSaveComponent = () => {
  const t = useTranslations("Home.FlashSave");
  const plugin = React.useRef(Autoplay({delay: 1000, stopOnInteraction: true}));

  const {data, isLoading} = useQueryProduct.useProduct(8, 1);

  return (
    <section className="">
      <div>
        <Carousel
          className="-px-primary w-full max-w-[100vw] overflow-hidden"
          opts={{loop: true}}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div className="relative flex w-full items-end gap-[87px]">
            <SectionTitle feature={t("feature")} title={t("title")} />
            <CountdownTimeSaleComponent timeEnd="2024-11-25T10:00:00Z" variant="ghost" />
            <div className="absolute bottom-3 right-12">
              <CarouselPrevious className="size-12" />
              <CarouselNext className="size-12" />
            </div>
          </div>
          {isLoading ? (
            <ListProductSkeleton />
          ) : (
            <CarouselContent className="-mx-primary w-full">
              {[...Array(Math.ceil(data.products.length / 4))].map((_, index) => (
                <CarouselItem key={index} className="w-full">
                  <div
                    className={cn("mt-10 flex flex-wrap justify-between", {
                      "justify-start gap-[30px]":
                        data.products.length % 4 !== 0 &&
                        Math.ceil(data.products.length / 4) === index + 1,
                    })}
                  >
                    {data.products
                      .slice(index * 4, index * 4 + 4)
                      .map((item: typeProduct, index: number) => (
                        <ProductCardComponent key={index} data={item} style="sale" />
                      ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          )}
        </Carousel>
        {/* <div className="flex items-center gap-2">
          <ArrowButton direct="left" />
          <ArrowButton direct="right" />
        </div> */}
      </div>

      <div className="flex">
        <PrimaryButton className="mx-auto my-[60px] h-[56px] px-11 font-medium">
          {t("button")}
        </PrimaryButton>
      </div>
      <hr className="text-Text2/30" />
    </section>
  );
};

export default FlashSaveComponent;
