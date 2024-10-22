import React, {useState} from "react";
import Image from "next/image";
import {Rating, RoundedStar} from "@smastrom/react-rating";
import {useTranslations} from "next-intl";

import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog";

import {typeColor, typeProduct} from "@/types";
import {calculatePriceSale} from "@/utils";
import iconQuickReview from "@/assets/svg/quickViewIcon.svg";

const QuickReviewProductComponent: React.FC<{data: typeProduct; color: typeColor}> = ({
  data,
  color,
}) => {
  const [openQuickReview, setOpenQuickReview] = useState<boolean>(false);
  const t = useTranslations("Home.ExploreProduct.QuickReview");

  return (
    <Dialog open={openQuickReview} onOpenChange={setOpenQuickReview}>
      <DialogTrigger className="w-full">
        <div className="mt-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-Primary">
          <Image alt="icon quick view" height={24} src={iconQuickReview} width={24} />
        </div>
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
                    {data.currency}
                    {calculatePriceSale(data.price, data.discountPercentage)}
                  </p>
                  <p className="ml-1 font-medium text-Text2/50 line-through">
                    {data.currency}
                    {data.price}
                  </p>
                </div>
                <div className="flex gap-3">
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
            </div>
          </div>
          <p className="my-4 text-center text-sm italic">{data.description}</p>
          {/* <div className="flex gap-3 justify-center">
            <Button variant={"outline"}>{t("details")}</Button>
            <Button>{t("buttonAddToCart")}</Button>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickReviewProductComponent;
