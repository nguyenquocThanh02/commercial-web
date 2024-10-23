import React, {useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet";
import {Button} from "../ui/button";

import RatingComponent from "./rating.component";

import {typeColor, typeProduct} from "@/types";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";

const QuickReviewAddToCartComponent: React.FC<{data: typeProduct; color: typeColor}> = ({
  data,
  color,
}) => {
  const [openQuickReview, setOpenQuickReview] = useState<boolean>(false);
  const t = useTranslations("Home.ExploreProduct.QuickReview");
  const locale = useLocale();

  return (
    <Sheet open={openQuickReview} onOpenChange={setOpenQuickReview}>
      <SheetTrigger className="w-full">
        <div className="w-full rounded-none bg-Text2 p-2 font-medium text-Text hover:cursor-pointer hover:opacity-80">
          Add To Cart
        </div>
      </SheetTrigger>
      <SheetContent>
        <div>
          <h2 className="mb-5 text-center text-xl font-medium">{t("title")}</h2>
          <div className="flex w-full items-center justify-evenly">
            <Image alt="product img" height={100} src={color.imageUrl} width={100} />
            <div className="flex flex-col justify-center">
              <h3 className="font-medium">{data.name}</h3>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-medium text-Secondary2">
                    {renderPriceFollowCurrency(
                      locale,
                      calculatePriceSale(data.price[locale], data.discountPercentage),
                    )}
                  </p>
                  <p className="font-medium text-Text2/50 line-through">
                    {renderPriceFollowCurrency(locale, data.price[locale])}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <RatingComponent rating={data.rating} />
                  <p className="mt-[2px] text-sm font-semibold text-Text2/50">
                    ({data.numberOfReviews})
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="my-4 text-center text-sm italic">{data.description}</p>
          <div className="flex justify-center gap-3">
            <Button variant={"outline"}>{t("details")}</Button>
            <Button>{t("buttonAddToCart")}</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default QuickReviewAddToCartComponent;
