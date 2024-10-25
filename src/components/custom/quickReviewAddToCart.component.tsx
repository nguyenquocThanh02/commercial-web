"use client";
import React from "react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import {Sheet, SheetContent, SheetHeader, SheetTitle} from "../ui/sheet";

import RatingComponent from "./rating.component";
import SecondaryButton from "./secondaryButton.component";
import PrimaryButton from "./primaryButton.ui";

import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {Link} from "@/app/navigation";
import {productStore} from "@/store";

const QuickReviewAddToCartComponent = () => {
  const {setOpenQuickReviewAddToCart, openQuickReviewAddToCart, product: data} = productStore();

  const t = useTranslations("Home.ExploreProduct.QuickReview");
  const locale = useLocale();

  return (
    <Sheet open={openQuickReviewAddToCart} onOpenChange={setOpenQuickReviewAddToCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <p className="mb-5 text-center text-xl font-medium">{t("title")}</p>
          </SheetTitle>
        </SheetHeader>
        <div>
          <div className="flex w-full items-center justify-evenly">
            <Image alt="product img" height={100} src={data.colors[0]?.imageUrl} width={100} />
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
            <Link href={`/product/${data.id}`}>
              <SecondaryButton className="h-10">{t("details")}</SecondaryButton>
            </Link>

            <PrimaryButton classForText="text-sm font-medium" className="h-10 text-sm">
              {t("buttonAddToCart")}
            </PrimaryButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default QuickReviewAddToCartComponent;
