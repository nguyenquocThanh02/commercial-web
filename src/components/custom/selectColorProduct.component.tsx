import {useTranslations} from "next-intl";
import React from "react";

import {cn} from "@/libs/utils";
import {productSelectStore} from "@/store/productSelect.store";
import {typeColor} from "@/types";

const SelectColorProductComponent = () => {
  const {productSelect, setProductSelect} = productSelectStore();

  const t = useTranslations("Home.ExploreProduct.QuickReview");

  const handleClick = (color: typeColor) => {
    setProductSelect({selectedColor: color});
  };

  return (
    <>
      {productSelect.product.colors.length > 1 && (
        <div className="flex items-center gap-6">
          <h3 className="text-xl">{t("colours")}:</h3>
          <div className="flex gap-2">
            {productSelect.product.colors.map((color: typeColor, index: number) => (
              <div key={index} className="relative">
                <div
                  className={cn("h-5 w-5 cursor-pointer rounded-full", {
                    "border-4 border-Primary":
                      color?.colorName === productSelect?.selectedColor?.colorName,
                  })}
                  style={{backgroundColor: color.colorHex}}
                  onClick={() => handleClick(color)}
                />
                {color?.colorName === productSelect?.selectedColor?.colorName && (
                  <div className="absolute inset-0 rounded-full border-2 border-Text2" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SelectColorProductComponent;
