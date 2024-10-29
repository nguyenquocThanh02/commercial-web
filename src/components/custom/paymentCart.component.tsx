"use client";
import React, {useMemo, useState} from "react";
import {useLocale, useTranslations} from "next-intl";

import SearchCouponComponent from "./searchCoupon.component";

import {useRouter} from "@/app/navigation";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import {cartStore} from "@/store";
import {calculatePriceSale, calculateTotalDecrease, renderPriceFollowCurrency} from "@/utils";
import {localStorageKey} from "@/constants/localStorage";

const PaymentCartComponent = () => {
  const t = useTranslations("");
  const locale = useLocale();
  const route = useRouter();

  const [discount, setDiscount] = useState<number>(0);

  const {cart} = cartStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((accumulator, item) => {
      const itemTotalPrice =
        calculatePriceSale(item.product.price[locale], item.product.discountPercentage) *
        item.quantity;

      return accumulator + itemTotalPrice;
    }, 0);
  }, [cart]);

  const finalTotal = useMemo(() => {
    const total = totalPrice;

    return (total * (100 - discount)) / 100;
  }, [discount, totalPrice]);

  const handleCheckout = () => {
    localStorage.setItem(localStorageKey.order, JSON.stringify(cart));
    route.push("/checkout");
  };

  return (
    <div>
      {cart.length > 0 && (
        <div className="mt-20 flex justify-between">
          <SearchCouponComponent setDiscount={setDiscount} />
          <div className="h-full min-h-[324px] w-[470px] rounded border border-Text2">
            <div className="flex h-full w-full flex-col px-6 py-8">
              <h2 className="text-xl font-medium leading-7">{t("Payment.Coupon.cartTotal")}</h2>
              <div className="mt-6 flex items-center justify-between">
                <p className="leading-6">{t("Payment.Coupon.subTotal")}</p>
                <p className="text-Text2/50">{renderPriceFollowCurrency(locale, totalPrice)}</p>
              </div>
              <hr className="mt-4 text-Text2" />
              {discount > 0 && (
                <>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="leading-6">{t("Payment.Coupon.totalDiscount")}</p>
                    <p className="text-Text2/50">
                      {" "}
                      -
                      {renderPriceFollowCurrency(
                        locale,
                        calculateTotalDecrease(totalPrice, discount),
                      )}
                    </p>
                  </div>
                  <hr className="mt-4 text-Text2" />
                </>
              )}
              <div className="mt-4 flex items-center justify-between">
                <p className="leading-6">{t("Payment.Coupon.shipping")}</p>
                <p className="text-Text2/50">FREE</p>
              </div>
              <hr className="mt-4 text-Text2" />
              <div className="mt-4 flex items-center justify-between">
                <p className="leading-6">{t("Payment.Coupon.total")}</p>
                <p className="text-Text2/50">{renderPriceFollowCurrency(locale, finalTotal)}</p>
              </div>

              <PrimaryButton className="mx-auto mt-4 h-[56px] w-[260px]" onClick={handleCheckout}>
                {t("Payment.Coupon.processButton")}
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCartComponent;
