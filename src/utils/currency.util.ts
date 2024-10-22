export const calculatePriceSale = (price: string | number, numberPercent: string | number) => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  const numericPercent =
    typeof numberPercent === "string" ? parseFloat(numberPercent) : numberPercent;

  return (numericPrice * (100 - numericPercent)) / 100;
};
