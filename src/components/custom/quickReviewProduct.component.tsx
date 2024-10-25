"use client";
import React from "react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "../ui/dialog";

import RatingComponent from "./rating.component";
import SecondaryButton from "./secondaryButton.component";

import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {Link} from "@/app/navigation";
import {productStore} from "@/store";

const QuickReviewProductComponent = () => {
  const {openQuickReviewProduct, setOpenQuickReviewProduct, product: data} = productStore();

  const t = useTranslations("Home.ExploreProduct.QuickReview");
  const locale = useLocale();

  return (
    <Dialog open={openQuickReviewProduct} onOpenChange={setOpenQuickReviewProduct}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="mb-5 text-center text-xl font-medium">{t("title")}</p>
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex w-full items-center justify-evenly">
            <Image alt="product img" height={100} src={data.colors[0]?.imageUrl} width={100} />
            <div className="flex flex-col justify-center">
              <h3 className="font-medium">{data.name}</h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <p className="font-medium text-Secondary2">
                    {renderPriceFollowCurrency(
                      locale,
                      calculatePriceSale(data.price[locale], data.discountPercentage),
                    )}
                  </p>
                  <p className="ml-1 font-medium text-Text2/50 line-through">
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
          <div className="flex w-full">
            <Link
              className="mx-auto"
              href={`/product/${data.id}`}
              onClick={() => setOpenQuickReviewProduct(false)}
            >
              <SecondaryButton className="h-10">{t("details")}</SecondaryButton>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickReviewProductComponent;
