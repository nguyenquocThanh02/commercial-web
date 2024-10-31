"use client";
import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Image from "next/image";
import {useTranslations} from "next-intl";

import CheckoutStripeComponent from "./checkoutStripe.component";

import nagadImg from "@/assets/img/Nagad.png";
import bkashImg from "@/assets/img/Bkash.png";
import mastercardImg from "@/assets/img/Mastercard.png";
import visaImg from "@/assets/img/Visa.png";
import {cardSubmitStore} from "@/store/cardSubmit.store";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const MethodCheckoutComponent: React.FC<{price: number}> = ({price}) => {
  const t = useTranslations("Checkout");
  const {method, setMethod} = cardSubmitStore();

  return (
    <>
      <div className="w-[427px]">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setMethod("card")}
        >
          <div
            className={`flex size-6 rounded-full border border-Text2 bg-Text ${method === "option1" ? "border-Secondary2" : ""}`}
          >
            {method === "card" && <div className="m-auto size-[14px] rounded-full bg-Text2" />}
          </div>
          <div className="flex items-center">
            <Image alt="Bkash" height={28} src={bkashImg} width={42} />
            <Image alt="Visa" height={28} src={visaImg} width={42} />
            <Image alt="Mastercard" height={28} src={mastercardImg} width={42} />
            <Image alt="Nagad" height={28} src={nagadImg} width={42} />
          </div>
        </div>
        {method === "card" && (
          <div className="mt-8">
            <Elements
              options={{
                mode: "payment",
                amount: 200,
                currency: "usd",
              }}
              stripe={stripePromise}
            >
              <CheckoutStripeComponent />
            </Elements>
          </div>
        )}
        <div
          className="mt-8 flex cursor-pointer items-center gap-4"
          onClick={() => setMethod("cash")}
        >
          <div
            className={`flex size-6 rounded-full border border-Text2 bg-Text ${method === "option2" ? "border-Secondary2" : ""}`}
          >
            {method === "cash" && <div className="m-auto size-[14px] rounded-full bg-Text2" />}
          </div>
          <div>{t("methodPayment")}</div>
        </div>
      </div>
    </>
  );
};

export default MethodCheckoutComponent;
