import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";
import {useLocale} from "next-intl";

import {Button} from "../ui/button";

import {renderPriceFollowCurrency} from "@/utils";

const CheckoutStripeComponent: React.FC<{amount: number}> = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();
  const locale = useLocale();

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      console.error(error);
    } else {
      console.log("Payment successful!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button className="mt-4 w-full py-6" disabled={!stripe || loading} type="submit">
        {loading ? "Processing..." : `Payment (${renderPriceFollowCurrency(locale, amount)})`}
      </Button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutStripeComponent;
