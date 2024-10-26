"use client";
import React from "react";

import {productSelectStore} from "@/store/productSelect.store";

const InputQuantityComponent = () => {
  const {setProductSelect, productSelect} = productSelectStore();

  const isQuantityValid = (quantity: number) => {
    const unitsInStock = productSelect.product.unitsInStock || 1;

    return quantity >= 1 && quantity <= unitsInStock;
  };

  return (
    <div className="flex h-[44px] items-center overflow-hidden rounded">
      <button
        className="h-full w-[41px] rounded-l border border-r-0 border-Primary1/50 text-2xl"
        disabled={!isQuantityValid(productSelect.quantity - 1)}
        onClick={() => {
          if (isQuantityValid(productSelect.quantity - 1))
            setProductSelect({quantity: productSelect.quantity - 1});
        }}
      >
        -
      </button>
      <input
        className="text-medium h-full w-20 border border-Primary1/50 text-center focus:outline-none focus:ring-0"
        value={productSelect.quantity}
        onChange={(e) => {
          const newValue = Number(e.target.value);

          if (isQuantityValid(newValue)) {
            setProductSelect({quantity: newValue});
          }
        }}
      />
      <button
        className="h-full w-[41px] border-Secondary2 bg-Secondary2 text-2xl text-Text"
        disabled={!isQuantityValid(productSelect.quantity + 1)}
        onClick={() => {
          if (isQuantityValid(productSelect.quantity + 1))
            setProductSelect({quantity: productSelect.quantity + 1});
        }}
      >
        +
      </button>
    </div>
  );
};

export default InputQuantityComponent;
