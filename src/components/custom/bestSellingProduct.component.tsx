"use client";
import {useTranslations} from "next-intl";
import React from "react";

import SectionTitle from "./sectionTitle.component";
import PrimaryButton from "./primaryButton.ui";
import ProductCardComponent from "./productCard.component";

import {typeProduct} from "@/types";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const BestSellingProductComponent = () => {
  const t = useTranslations("Home.BestSellingProduct");
  const {data, isLoading} = useQueryProduct.useProduct(4, 1);
  const products: typeProduct[] = data?.products || [];

  return (
    <section className="l-container mt-[70px]">
      <div className="flex items-end justify-between">
        <SectionTitle feature={t("feature")} title={t("title")} />
        <PrimaryButton className="h-[56px] px-11 font-medium">{t("button")}</PrimaryButton>
      </div>
      <div className="mt-[60px] flex flex-wrap justify-center gap-[30px]">
        {products.map((item, index) => (
          <ProductCardComponent key={index} data={item} style="sale" />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProductComponent;
