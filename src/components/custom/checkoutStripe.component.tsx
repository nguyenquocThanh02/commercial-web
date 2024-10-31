"use client";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";

import {cardSubmitStore} from "@/store/cardSubmit.store";

const CheckoutStripeComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const {setIsComplete} = cardSubmitStore();

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    const {error: submitError} = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);

      return;
    }
  };

  if (!stripe || !elements) {
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
    <form className="w-full rounded-md bg-white p-2" onSubmit={handleSubmit}>
      <PaymentElement className="w-full" onChange={(event) => setIsComplete(event.complete)} />

      {/* {errorMessage && <div>{errorMessage}</div>} */}
    </form>
  );
};

export default CheckoutStripeComponent;
