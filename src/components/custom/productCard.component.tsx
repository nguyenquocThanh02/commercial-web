"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import AddToWishlistComponent from "../form/addToWishListComponent";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";
import {Button} from "../ui/button";

import RatingComponent from "./rating.component";

import {typeColor, typeProduct} from "@/types";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {cn} from "@/libs/utils";
import iconQuickReview from "@/assets/svg/quickViewIcon.svg";
import {productStore} from "@/store";

const ProductCardComponent: React.FC<{data: typeProduct; style?: string}> = ({
  data,
  style = "default",
}) => {
  const [selectColor, setSelectColor] = useState<typeColor>(data.colors[0]);
  const {setOpenQuickReviewProduct, setOpenQuickReviewAddToCart, setProduct} = productStore();

  const locale = useLocale();
  const t = useTranslations("Home.ExploreProduct.QuickReview");

  const handleClick = (color: typeColor) => {
    setSelectColor(color);
  };

  useEffect(() => {
    setSelectColor(data.colors[0]);
  }, [data]);

  const handleQuickViewProduct = (data: typeProduct) => {
    setOpenQuickReviewProduct(true);
    setProduct(data);
  };
  const handleQuickViewAddToCart = (data: typeProduct) => {
    setOpenQuickReviewAddToCart(true);
    setProduct(data);
  };

  return (
    <div>
      <div className="group relative flex h-[250px] w-[270px] overflow-hidden rounded bg-Secondary">
        <Image
          fill
          priority
          alt="image-test"
          className="m-auto p-14 transition-all duration-1000 group-hover:scale-125"
          objectFit="contain"
          quality={100}
          src={selectColor.imageUrl}
        />
        <div className="absolute left-3 right-3 top-3 flex justify-between">
          {style === "default" && data.isNew ? (
            <div className="flex h-[26px] w-[51px] items-center justify-center rounded bg-Button1 text-xs text-Text">
              NEW
            </div>
          ) : style !== "default" && data.discountPercentage ? (
            <div className="flex h-[26px] w-[51px] items-center justify-center rounded bg-Secondary2 text-sm text-Text">
              -{data.discountPercentage}%
            </div>
          ) : (
            <div />
          )}
          <div className="flex flex-col">
            <AddToWishlistComponent data={data} />
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className="mt-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary"
                    onClick={() => handleQuickViewProduct(data)}
                  >
                    <Image alt="icon quick view" height={24} src={iconQuickReview} width={24} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{t("tooltip")}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="absolute bottom-0 flex w-full items-end justify-center opacity-0 transition-all duration-1000 group-hover:opacity-100">
          <Button
            className="w-full rounded-none py-5 font-medium"
            onClick={() => handleQuickViewAddToCart(data)}
          >
            {t("buttonAddToCart")}
          </Button>
        </div>
      </div>

      <div className="product-card mt-4 flex flex-col gap-2">
        <h3 className="font-medium">{data.name}</h3>
        <div
          className={cn("flex gap-2", {
            "flex-row items-center": style === "default",
            "flex-col": style !== "default",
          })}
        >
          {" "}
          <div className="flex gap-3">
            <p className="font-medium text-Secondary2">
              {renderPriceFollowCurrency(
                locale,
                calculatePriceSale(data.price[locale], data.discountPercentage),
              )}
            </p>
            {style !== "default" && (
              <p className="ml-1 font-medium text-Text2/50 line-through">
                {renderPriceFollowCurrency(locale, data.price[locale])}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <RatingComponent rating={data.rating} />
            <p className="mt-[2px] text-sm font-semibold text-Text2/50">({data.numberOfReviews})</p>
          </div>
        </div>
        {style === "default" && data.colors.length > 1 && (
          <div className="flex gap-2">
            {data.colors.map((color) => (
              <div key={color.colorName} className="relative">
                <div
                  className={cn("h-5 w-5 cursor-pointer rounded-full", {
                    "border-4 border-Primary": color.colorName === selectColor.colorName,
                  })}
                  style={{backgroundColor: color.colorHex}}
                  onClick={() => handleClick(color)}
                />
                {color.colorName === selectColor.colorName && (
                  <div className="absolute inset-0 rounded-full border-2 border-Text2" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardComponent;
