"use client";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import React, {useState} from "react";

import {Input} from "../ui/input";

import PrimaryButton from "./primaryButton.ui";

import {localStorageKey} from "@/constants/localStorage";
import {typeCoupon, typeProductSelect} from "@/types";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {couponStore} from "@/store/coupon.store";
import {useDebounce} from "@/hooks/useDebounce.hook";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const CheckoutComponent = () => {
  const locale = useLocale();
  const t = useTranslations();

  const {setCoupons, coupons} = couponStore();
  const [discount, setDiscount] = useState<number>(0);
  const [valueSearch, setValueSearch] = useState<string>("");

  const debounceSearchValue = useDebounce(valueSearch, 800);

  const storedOrders = localStorage.getItem(localStorageKey.order);
  const orders: typeProductSelect[] = storedOrders ? JSON.parse(storedOrders) : [];

  const totalPrice = () => {
    return orders.reduce((accumulator, item) => {
      const itemTotalPrice =
        calculatePriceSale(item.product.price[locale], item.product.discountPercentage) *
        item.quantity;

      return accumulator + itemTotalPrice;
    }, 0);
  };

  const finalTotal = () => {
    const total = totalPrice();

    return (total * (100 - 0)) / 100;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  const handleSelectCoupon = (item: typeCoupon) => {
    if (!coupons.some((item) => item.code === item.code)) setCoupons(item);
  };

  const handleApplyCoupon = () => {
    const totalDiscount = coupons.reduce((accumulator, coupon) => {
      return accumulator + Number(coupon.discount);
    }, 0);

    setDiscount(totalDiscount);
  };

  const {data} = useQueryProduct.useCoupon(debounceSearchValue);

  return (
    <div className="flex w-[527px] flex-col gap-8">
      <div className="flex w-[425px] flex-col gap-8">
        {orders &&
          orders.map((item: typeProductSelect, index: number) => (
            <div key={index} className="item-center flex h-[54px] justify-between">
              <div className="flex items-center gap-6">
                <Image
                  alt="image product"
                  height="54"
                  src={item.selectedColor?.imageUrl || ""}
                  width="54"
                />
                <h3 className="text-Text2">{item.product.name}</h3>
              </div>
              <p className="text-Text2">
                {renderPriceFollowCurrency(locale, Number(item.product.price * item.quantity))}
              </p>
            </div>
          ))}
      </div>
      <div className="flex w-[425px] flex-col">
        <div className="flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.subTotal")}</p>
          <p className="text-Text2">{renderPriceFollowCurrency(locale, totalPrice())}</p>
        </div>
        <hr className="mt-4 text-Text2" />
        <div className="mt-4 flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.shipping")}</p>
          <p className="text-Text2">FREE</p>
        </div>
        <hr className="mt-4 text-Text2" />
        <div className="mt-4 flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.total")}</p>
          <p className="text-Text2">{renderPriceFollowCurrency(locale, finalTotal())}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Input
          className="h-[56px] w-[300px]"
          placeholder={t("Payment.Coupon.placeHover")}
          type="text"
          value={valueSearch}
          onChange={(e) => handleSearch(e)}
        />
        <PrimaryButton className="h-[56px] w-[211px]" onClick={handleApplyCoupon}>
          {t("Payment.Coupon.buttonApply")}
        </PrimaryButton>
      </div>
      <PrimaryButton className="h-[56px] w-[190px]">
        {t("Checkout.Order.buttonPlace")}
      </PrimaryButton>
    </div>
  );
};

export default CheckoutComponent;
