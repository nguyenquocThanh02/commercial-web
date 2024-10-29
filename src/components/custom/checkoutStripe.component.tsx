"use client";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useEffect, useState} from "react";
import {useLocale} from "next-intl";

import {Button} from "../ui/button";

import {renderPriceFollowCurrency} from "@/utils";

const CheckoutStripeComponent: React.FC<{amount: number}> = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: locale === "vi" ? Math.floor(amount) : Math.floor(amount * 100),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const {error: submitError} = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);

      return;
    }

    // const {error} = await stripe.confirmPayment({
    //   elements,
    //   clientSecret,
    //   confirmParams: {
    //     return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
    //   },
    // });

    // if (error) {
    //   setErrorMessage(error.message);
    // }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-md bg-white p-2" onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <Button className="mt-4 w-full py-6" disabled={!stripe || loading} type="submit">
        {loading ? "Processing..." : `Payment (${renderPriceFollowCurrency(locale, amount)})`}
      </Button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutStripeComponent;
