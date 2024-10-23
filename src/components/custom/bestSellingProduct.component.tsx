import {useTranslations} from "next-intl";
import React from "react";

import SectionTitle from "./sectionTitle.component";
import PrimaryButton from "./primaryButton.ui";
import ProductCardComponent from "./productCart.component";

import {typeProduct} from "@/types";

const BestSellingProductComponent = () => {
  const t = useTranslations("Home.BestSellingProduct");
  const theProduct: typeProduct = {
    id: 123,
    name: "Kids Electric Car",
    description: "",
    colors: [
      {
        colorName: "Red",
        colorHex: "red",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarRed.png?alt=media&token=12ecb621-959d-47fa-bcf6-98e61c6df270",
      },
      {
        colorName: "Blue",
        colorHex: "blue",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarBlue.png?alt=media&token=f2030610-741a-42e5-a04b-7c465d3db5dd",
      },
      {
        colorName: "Black",
        colorHex: "#000",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarBlack.png?alt=media&token=6f8bd287-5fef-4518-9e91-bc5d2ca4674b",
      },
    ],
    price: {
      vi: "269000000",
      en: "12000",
    },
    discountPercentage: 10,
    rating: 4.5,
    numberOfReviews: 150,
    unitsInStock: 25,
    isNew: true,
    purchaseCount: 10,
  };

  return (
    <section className="">
      <div className="flex items-end justify-between">
        <SectionTitle feature={t("feature")} title={t("title")} />
        <PrimaryButton className="h-[56px] px-11 font-medium">{t("button")}</PrimaryButton>
      </div>
      <div className="mt-[60px] flex justify-between">
        {Array.from({length: 4}).map((_, index) => (
          <ProductCardComponent key={index} data={theProduct} style="sale" />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProductComponent;
