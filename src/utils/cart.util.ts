import {typeProductSelect} from "@/types";

export const isProductEqual = (
  item: typeProductSelect,
  productSelect: typeProductSelect,
): boolean => {
  const isSizeEqual =
    item.selectedSize === null || item.selectedSize === ""
      ? true
      : item.selectedSize === productSelect.selectedSize;

  const isColorEqual = item.selectedColor?.colorName == productSelect.selectedColor?.colorName;

  return item.product.id === productSelect.product.id && isSizeEqual && isColorEqual;
};
