import React from "react";

import CheckoutComponent from "@/components/custom/checkout.component";
import FormInfoUserCheckoutComponent from "@/components/custom/formInfoUserCheckout.component";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <FormInfoUserCheckoutComponent />
      <CheckoutComponent />
    </div>
  );
};

export default CheckoutPage;
