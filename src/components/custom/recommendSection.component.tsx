"use client";
import React from "react";
import {useTranslations} from "next-intl";

import ListProductSkeleton from "../skeleton/listProduct.skeleton";

import SecondaryButton from "./secondaryButton.component";
import ProductCardComponent from "./productCart.component";

import {useQueryProduct} from "@/hooks/useQueryHooks";
import {typeProduct} from "@/types";

const RecommendSectionComponent = () => {
  const t = useTranslations("RecommendSection");
  const {data, isLoading} = useQueryProduct.useProduct(4, 1);

  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-Secondary2" />
          <h3 className="text-xl">{t("title")}</h3>
        </div>
        <SecondaryButton className="w-[150px]">{t("button")}</SecondaryButton>
      </div>
      {isLoading ? (
        <ListProductSkeleton />
      ) : (
        <div className="flex flex-wrap gap-[30px]">
          {data.products.map((item: typeProduct, index: number) => (
            <div key={index} className="my-[60px]">
              <ProductCardComponent data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendSectionComponent;
