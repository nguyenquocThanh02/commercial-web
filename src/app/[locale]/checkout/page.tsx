"use client";
import React from "react";

import CheckoutComponent from "@/components/custom/checkout.component";
import FormInfoUserCheckoutComponent from "@/components/custom/formInfoUserCheckout.component";
import {infoCheckoutSchema} from "@/formSchema/formSchema";
import {useCreateForm} from "@/hooks/useCreateForm.hook";

const CheckoutPage = () => {
  const form = useCreateForm(infoCheckoutSchema, {
    firstName: "",
    companyName: "",
    streetAddress: "",
    other: "",
    townCity: "",
    phone: "",
    email: "",
  });

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <FormInfoUserCheckoutComponent form={form} />
      <CheckoutComponent form={form} />
    </div>
  );
};

export default CheckoutPage;
