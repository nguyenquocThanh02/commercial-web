"use client";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import React, {useMemo, useState} from "react";
import {UseFormReturn} from "react-hook-form";

import WaitingLayout from "../layout/waiting.layout";

import PrimaryButton from "./primaryButton.ui";
import SearchCouponComponent from "./searchCoupon.component";
import MethodCheckoutComponent from "./methodCheckout.component";

import {typeInfoCheckout, typeOrder} from "@/types";
import {calculatePriceSale, calculateTotalDecrease, renderPriceFollowCurrency} from "@/utils";
import {couponStore} from "@/store/coupon.store";
import imageDefault from "@/assets/img/imageDefault.jpg";
import {OrderApis} from "@/services/order.service";
import {cardSubmitStore} from "@/store/cardSubmit.store";
import {useRouter} from "@/app/navigation";
import {cartStore} from "@/store";

const CheckoutComponent: React.FC<{form: UseFormReturn}> = ({form}) => {
  const locale = useLocale();
  const t = useTranslations();
  const route = useRouter();

  const {coupons} = couponStore();
  const {isComplete, method} = cardSubmitStore();
  const {cart, setCart} = cartStore();

  const [discount, setDiscount] = useState<number>(
    coupons.reduce((total, coupon) => total + Number(coupon.discount), 0),
  );
  const [loading, setLoading] = useState<boolean>(false);

  // const storedOrders = localStorage.getItem(localStorageKey.order);
  // const orders: typeProductSelect[] = storedOrders ? JSON.parse(storedOrders) : [];

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

  const handlePlaceOrder = async () => {
    const isValid = await form.trigger();

    if (isValid && (method === "cash" || (method === "card" && isComplete))) {
      setLoading(true);
      const values = form.getValues();

      const infoCheckout: typeInfoCheckout = {
        firstName: values.firstName,
        companyName: values.companyNames,
        streetAddress: values.streetAddress,
        other: values.other,
        townCity: values.townCity,
        phone: values.phone,
        email: values.email,
      };

      const order: typeOrder = {
        infoCheckout: infoCheckout,
        items: cart,
        discount: discount,
        total: finalTotal,
        payment: method,
      };

      const resultPlaceOrder = await OrderApis.createOrder(order);

      if (resultPlaceOrder) {
        setCart([]);
        route.push("/checkout/success");
      }
    }
  };

  return (
    <div className="flex w-[527px] flex-col gap-8">
      {loading && <WaitingLayout />}
      <div className="flex w-[425px] flex-col gap-8">
        {cart.map((item, index) => (
          <div key={index} className="flex h-[54px] items-center justify-between">
            <div className="flex items-center gap-6">
              <Image
                alt="image product"
                height="54"
                src={item.selectedColor?.imageUrl || imageDefault}
                width="54"
              />
              <h3 className="text-Text2">{item.product.name}</h3>
            </div>
            <p className="text-Text2">
              {renderPriceFollowCurrency(
                locale,
                Number(item.product.price[locale] * item.quantity),
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-[425px] flex-col">
        <div className="flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.subTotal")}</p>
          <p className="text-Text2">{renderPriceFollowCurrency(locale, totalPrice)}</p>
        </div>
        <hr className="mt-4 text-Text2" />
        {discount > 0 && (
          <>
            <div className="mt-6 flex items-center justify-between">
              <p className="leading-6">{t("Payment.Coupon.totalDiscount")}</p>
              <p className="text-Text2/50">
                {" "}
                -{renderPriceFollowCurrency(locale, calculateTotalDecrease(totalPrice, discount))}
              </p>
            </div>
            <hr className="mt-4 text-Text2" />
          </>
        )}
        <div className="mt-4 flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.shipping")}</p>
          <p className="text-Text2">FREE</p>
        </div>
        <hr className="mt-4 text-Text2" />
        <div className="mt-4 flex items-center justify-between">
          <p className="leading-6">{t("Payment.Coupon.total")}</p>
          <p className="text-Text2">{renderPriceFollowCurrency(locale, finalTotal)}</p>
        </div>
      </div>
      <MethodCheckoutComponent price={totalPrice} />
      <SearchCouponComponent setDiscount={setDiscount} />
      <PrimaryButton
        className="h-[56px] w-[190px]"
        disabled={!isComplete && method === "card"}
        type="submit"
        onClick={handlePlaceOrder}
      >
        {t("Checkout.Order.buttonPlace")}
      </PrimaryButton>
    </div>
  );
};

export default CheckoutComponent;
