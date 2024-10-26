import React from "react";
import {useTranslations} from "next-intl";

import {productSelectStore} from "@/store/productSelect.store";
import {cn} from "@/libs/utils";

const SizesProductComponent = () => {
  const {productSelect, setProductSelect} = productSelectStore();

  const t = useTranslations("Home.ExploreProduct.QuickReview");

  const handleSelectSize = (size: string) => {
    setProductSelect({selectedSize: size});
  };

  return (
    <>
      {productSelect.product?.sizes && productSelect.product.sizes.length > 0 && (
        <div className="flex gap-6">
          <h3 className="text-xl">{t("sizes")}:</h3>
          <div className="flex gap-4">
            {productSelect.product.sizes.map((item: string, index: number) => (
              <button
                key={index}
                className={cn(
                  "flex size-8 items-center justify-center rounded border border-Primary1 text-Primary1 transition-all duration-300 hover:border-none hover:bg-Secondary2 hover:text-Text",
                  {"border-none bg-Secondary2 text-Text": item === productSelect.selectedSize},
                )}
                onClick={() => handleSelectSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SizesProductComponent;
