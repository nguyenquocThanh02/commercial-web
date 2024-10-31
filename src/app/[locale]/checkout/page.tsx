"use client";
import React from "react";

import CheckoutComponent from "@/components/custom/checkout.component";
import FormInfoUserCheckoutComponent from "@/components/custom/formInfoUserCheckout.component";
import {infoCheckoutSchema} from "@/formSchema/formSchema";
import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";

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

  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "Checkout",
      link: "/checkout",
    },
  ];

  return (
    <section>
      <BreadcrumbComponent links={nav} />

      <div className="mt-20 flex flex-col items-center justify-between lg:flex-row">
        <FormInfoUserCheckoutComponent form={form} />
        <CheckoutComponent form={form} />
      </div>
    </section>
  );
};

export default CheckoutPage;
