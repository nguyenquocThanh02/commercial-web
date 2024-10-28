export const calculatePriceSale = (price: any, numberPercent: string | number = 0) => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  const numericPercent =
    typeof numberPercent === "string" ? parseFloat(numberPercent) : numberPercent;

  return (numericPrice * (100 - numericPercent)) / 100;
};

export const calculateTotalDecrease = (price: any, numberPercent: string | number = 0) => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  const numericPercent =
    typeof numberPercent === "string" ? parseFloat(numberPercent) : numberPercent;

  return (numericPrice * numericPercent) / 100;
};

export const renderPriceFollowCurrency = (locale: any, price: string | number) => {
  const currencyConfig: any = {
    vi: {currency: "VND", minimumFractionDigits: 0, maximumFractionDigits: 0},
    en: {currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2},
  };

  const {currency, minimumFractionDigits, maximumFractionDigits} = currencyConfig[locale];

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  });

  return formatter.format(Number(price));
};
