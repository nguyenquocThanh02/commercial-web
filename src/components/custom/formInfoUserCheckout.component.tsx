"use client";
import React from "react";
import {useTranslations} from "next-intl";
import {z} from "zod";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Checkbox} from "../ui/checkbox";

import {InputPrimary} from "./inputPrimary.component";

import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {infoCheckoutSchema} from "@/formSchema/formSchema";

const FormInfoUserCheckoutComponent = () => {
  const t = useTranslations("Checkout.Form");
  const fields = [
    {
      name: "firstName",
      label: t("firstName"),
      required: true,
    },
    {
      name: "companyName",
      label: t("companyName"),
      required: false,
    },
    {
      name: "streetAddress",
      label: t("address"),
      required: true,
    },
    {
      name: "other",
      label: t("other"),
      required: false,
    },
    {
      name: "townCity",
      label: t("town-city"),
      required: true,
    },
    {
      name: "phone",
      label: t("phone"),
      required: true,
    },
    {
      name: "email",
      label: t("Email"),
      required: true,
    },
  ];

  const form = useCreateForm(infoCheckoutSchema, {
    firstName: "",
    companyName: "",
    streetAddress: "",
    other: "",
    townCity: "",
    phone: "",
    email: "",
  });

  function onSubmit(values: z.infer<typeof infoCheckoutSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[470px]">
      <Form {...form}>
        <h1 className="font-inter-font text-4xl font-medium leading-[30px]">{t("title")}</h1>
        <form className="mt-12 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          {fields.map((item, index) => (
            <FormField
              key={index}
              control={form.control}
              name={item.name}
              render={({field}) => (
                <FormItem>
                  <FormLabel className="leading-6 text-Text2/40">
                    {item.label}
                    {item.required && <span className="text-Secondary2/40">{"*"}</span>}
                  </FormLabel>
                  <FormControl>
                    <InputPrimary {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          {/* <Button type="submit">Submit</Button> */}
        </form>
        <div className="mt-6 flex items-center gap-4">
          <Checkbox
            className="size-6 focus:border-Secondary2 data-[state=checked]:bg-Secondary2"
            //   onCheckedChange={() => handleSelectCoupon(item)}
          />
          <p>{t("saveInfo")}</p>
        </div>
      </Form>
    </div>
  );
};

export default FormInfoUserCheckoutComponent;
