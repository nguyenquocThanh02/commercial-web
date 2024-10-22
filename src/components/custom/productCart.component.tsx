"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Rating, RoundedStar} from "@smastrom/react-rating";

import WishlistIcon from "../icon/wishlist.icon";

import QuickReviewProductComponent from "./quickReviewProduct.component";
import QuickReviewAddToCartComponent from "./quickReviewAddToCart.component";

import {typeColor, typeProduct} from "@/types";
import "@smastrom/react-rating/style.css";
import {calculatePriceSale} from "@/utils";
import {cn} from "@/libs/utils";

const ProductCardComponent: React.FC<{data: typeProduct; style?: string}> = ({
  data,
  style = "default",
}) => {
  const [selectColor, setSelectColor] = useState<typeColor>(data.colors[0]);

  const handleClick = (color: typeColor) => {
    setSelectColor(color);
  };

  useEffect(() => {
    setSelectColor(data.colors[0]);
  }, [data]);

  return (
    <div>
      <div className="group relative flex h-[250px] w-[270px] overflow-hidden rounded bg-Secondary">
        <Image
          fill
          priority
          alt="image-test"
          className="m-auto p-14 transition-all duration-1000 group-hover:scale-125"
          objectFit="contain"
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
          <div>
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary">
              <WishlistIcon fillColor="red" height={24} strokeColor="red" width={24} />
            </button>
            <QuickReviewProductComponent color={selectColor} data={data} />
          </div>
        </div>

        <div className="absolute bottom-0 flex w-full items-end justify-center opacity-0 transition-all duration-1000 group-hover:opacity-100">
          {" "}
          <QuickReviewAddToCartComponent color={selectColor} data={data} />
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
              {data.currency}
              {calculatePriceSale(data.price, data.discountPercentage)}
            </p>
            {style !== "default" && (
              <p className="ml-1 font-medium text-Text2/50 line-through">
                {data.currency}
                {data.price}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <div>
              <Rating
                readOnly
                className="max-w-20"
                halfFillMode="svg"
                itemStyles={{
                  itemShapes: RoundedStar,
                  activeFillColor: "#FFAD33",
                  inactiveFillColor: "#CCC",
                }}
                value={data.rating}
              />
            </div>
            <p className="text-sm font-semibold text-Text2/50">({data.numberOfReviews})</p>
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
