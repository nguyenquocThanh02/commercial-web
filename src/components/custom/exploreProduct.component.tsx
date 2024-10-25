"use client";
import {useTranslations} from "next-intl";
import React, {useState} from "react";

import ListProductSkeleton from "../skeleton/listProduct.skeleton";

import SectionTitle from "./sectionTitle.component";
import PrimaryButton from "./primaryButton.ui";
import ProductCardComponent from "./productCard.component";
import ArrowButton from "./arrowButton.component";

import {typeProduct} from "@/types";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const ExploreProductComponent = () => {
  const t = useTranslations("Home.ExploreProduct");
  const [page, setPage] = useState<number>(1);

  const {data, isLoading} = useQueryProduct.useProduct(8, page);

  const handleNext = () => {
    setPage((e) => (e < data.length ? e + 1 : data.length));
  };
  const handlePrevious = () => {
    setPage((e) => (e > 1 ? e - 1 : 1));
  };

  return (
    <section className="l-container mt-[70px]">
      <div className="flex items-end justify-between">
        <SectionTitle feature={t("feature")} title={t("title")} />
        <div className="flex items-center gap-2">
          <ArrowButton direct="left" disabled={page === 1} onClick={handlePrevious} />
          <ArrowButton direct="right" disabled={page === data?.length} onClick={handleNext} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px] lg:justify-start">
        {!isLoading && data?.products ? (
          data.products.map((item: typeProduct, index: number) => (
            <div key={index} className="mt-[60px]">
              <ProductCardComponent data={item} />
            </div>
          ))
        ) : (
          <ListProductSkeleton />
        )}
      </div>
      <div className="mt-[60px] flex w-full">
        <PrimaryButton className="mx-auto h-[56px] px-11 font-medium">{t("button")}</PrimaryButton>
      </div>
    </section>
  );
};

export default ExploreProductComponent;
