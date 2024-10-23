import React, {useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";
import {Button} from "../ui/button";

import RatingComponent from "./rating.component";

import {typeColor, typeProduct} from "@/types";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import iconQuickReview from "@/assets/svg/quickViewIcon.svg";

const QuickReviewProductComponent: React.FC<{data: typeProduct; color: typeColor}> = ({
  data,
  color,
}) => {
  const [openQuickReview, setOpenQuickReview] = useState<boolean>(false);
  const t = useTranslations("Home.ExploreProduct.QuickReview");
  const locale = useLocale();

  return (
    <Dialog open={openQuickReview} onOpenChange={setOpenQuickReview}>
      <DialogTrigger className="">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <div className="mt-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary">
                <Image alt="icon quick view" height={24} src={iconQuickReview} width={24} />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("tooltip")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent>
        <div>
          <h2 className="mb-5 text-center text-xl font-medium">{t("title")}</h2>
          <div className="flex w-full items-center justify-evenly">
            <Image alt="product img" height={100} src={color.imageUrl} width={100} />
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
            <Button className="mx-auto">{t("details")}</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickReviewProductComponent;
