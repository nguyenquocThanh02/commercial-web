import {PaymentElement, useStripe} from "@stripe/react-stripe-js";
import React from "react";
import {useLocale} from "next-intl";

import {Button} from "../ui/button";

import {renderPriceFollowCurrency} from "@/utils";

const CheckoutStripeComponent: React.FC<{amount: number}> = ({amount}) => {
  const stripe = useStripe();
  const locale = useLocale();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // await fetch("/api/checkout", {
    //   method: "POST",
    //   body: JSON.stringify(amount),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(async (res) => {
    //   const payload = await res.json();

    //   console.log(payload);
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button className="mt-4 w-full py-6" disabled={!stripe} type="submit">
        Payment ({renderPriceFollowCurrency(locale, amount)})
      </Button>
    </form>
  );
};

export default CheckoutStripeComponent;
