"use client";
import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";

import {Checkbox} from "../ui/checkbox";

import {useRouter} from "@/app/navigation";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import {Input} from "@/components/ui/input";
import {cartStore} from "@/store";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {typeCoupon} from "@/types";
import {useDebounce} from "@/hooks/useDebounce.hook";
import {useQueryProduct} from "@/hooks/useQueryHooks";
import {couponStore} from "@/store/coupon.store";
import {localStorageKey} from "@/constants/localStorage";
const PaymentCartComponent = () => {
  const t = useTranslations("");
  const locale = useLocale();
  const route = useRouter();

  const [valueSearch, setValueSearch] = useState<string>("");
  const {setCoupons, coupons} = couponStore();
  const [discount, setDiscount] = useState<number>(0);

  const {cart} = cartStore();
  const debounceSearchValue = useDebounce(valueSearch, 800);

  const totalPrice = () => {
    return cart.reduce((accumulator, item) => {
      const itemTotalPrice =
        calculatePriceSale(item.product.price[locale], item.product.discountPercentage) *
        item.quantity;

      return accumulator + itemTotalPrice;
    }, 0);
  };

  const finalTotal = () => {
    const total = totalPrice();

    return (total * (100 - discount)) / 100;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  const handleSelectCoupon = (item: typeCoupon) => {
    if (!coupons.some((coupon) => coupon.code === item.code)) setCoupons(item);
  };

  const handleApplyCoupon = () => {
    const totalDiscount = coupons.reduce((accumulator, coupon) => {
      return accumulator + Number(coupon.discount);
    }, 0);

    setDiscount(totalDiscount);
  };

  const {data} = useQueryProduct.useCoupon(debounceSearchValue);

  const handleCheckout = () => {
    localStorage.setItem(localStorageKey.coupon, JSON.stringify(coupons));
    localStorage.setItem(localStorageKey.order, JSON.stringify(cart));
    route.push("/checkout");
  };

  return (
    <div>
      <div className="mt-20 flex justify-between">
        <div>
          <div className="flex gap-4">
            <Input
              className="h-[56px] w-[300px] px-8"
              placeholder={t("Payment.Coupon.placeHover")}
              type="text"
              value={valueSearch}
              onChange={(e) => handleSearch(e)}
            />
            <PrimaryButton className="h-[56px] w-[211px]" onClick={handleApplyCoupon}>
              {t("Payment.Coupon.buttonApply")}
            </PrimaryButton>
          </div>
          {data &&
            data.length > 0 &&
            data.map((item: typeCoupon) => (
              <div
                key={item.code}
                className="my-8 flex h-[48px] w-[300px] items-center justify-between rounded px-4 shadow-md"
              >
                <p className="text-Text2/80">{item.name}</p>
                <Checkbox
                  checked={coupons.some((coupon) => coupon.code === item.code)}
                  className="focus:border-Secondary2 data-[state=checked]:bg-Secondary2"
                  onCheckedChange={() => handleSelectCoupon(item)}
                />
              </div>
            ))}
        </div>
        <div className="h-[324px] w-[470px] rounded border border-Text2">
          <div className="flex h-full w-full flex-col px-6 py-8">
            <h2 className="text-xl font-medium leading-7">{t("Payment.Coupon.cartTotal")}</h2>
            <div className="mt-6 flex items-center justify-between">
              <p className="leading-6">{t("Payment.Coupon.subTotal")}</p>
              <p className="text-Text2/50">{renderPriceFollowCurrency(locale, totalPrice())}</p>
            </div>
            <hr className="mt-4 text-Text2" />
            <div className="mt-4 flex items-center justify-between">
              <p className="leading-6">{t("Payment.Coupon.shipping")}</p>
              <p className="text-Text2/50">FREE</p>
            </div>
            <hr className="mt-4 text-Text2" />
            <div className="mt-4 flex items-center justify-between">
              <p className="leading-6">{t("Payment.Coupon.total")}</p>
              <p className="text-Text2/50">{renderPriceFollowCurrency(locale, finalTotal())}</p>
            </div>

            <PrimaryButton className="mx-auto mt-4 h-[56px] w-[260px]" onClick={handleCheckout}>
              {t("Payment.Coupon.processButton")}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCartComponent;
