"use client";
import React from "react";
import {useTranslations} from "next-intl";
import {UseFormReturn} from "react-hook-form";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Checkbox} from "../ui/checkbox";

import {InputPrimary} from "./inputPrimary.component";

const FormInfoUserCheckoutComponent: React.FC<{
  form: UseFormReturn;
}> = ({form}) => {
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

  return (
    <div className="w-[470px]">
      <Form {...form}>
        <h1 className="font-inter-font text-4xl font-medium leading-[30px]">{t("title")}</h1>
        <form className="mt-12 space-y-8">
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
        </form>
        <div className="mt-6 flex items-center gap-4">
          <Checkbox className="size-6 data-[state=checked]:border-Secondary2 data-[state=checked]:bg-Secondary2" />
          <p>{t("saveInfo")}</p>
        </div>
      </Form>
    </div>
  );
};

export default FormInfoUserCheckoutComponent;
