"use client";
import React, {useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import {UseFormReturn} from "react-hook-form";
import {usePlacesWidget} from "react-google-autocomplete";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Checkbox} from "../ui/checkbox";

import {InputPrimary} from "./inputPrimary.component";

import {useDebounce} from "@/hooks/useDebounce.hook";

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

  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 800);
  const inputRef = useRef<HTMLInputElement>(null);

  const {ref} = usePlacesWidget<HTMLInputElement>({
    apiKey: process.env.NEXT_PUBLIC_KEY_GOOGLE_AUTO_PLACE,
    onPlaceSelected: (place) => {
      form.setValue("streetAddress", place.formatted_address);
      const townCity = place.address_components.find(
        (component: any) =>
          component.types.includes("locality") ||
          component.types.includes("administrative_area_level_2"),
      )?.long_name;

      if (townCity) {
        form.setValue("townCity", townCity);
      }
    },
  });

  useEffect(() => {
    if (debouncedInputValue && inputRef.current) {
      // Optionally, update the Autocomplete with the new value
      inputRef.current.value = debouncedInputValue;

      // Trigger any additional logic you need, such as filtering suggestions
      // If you need to programmatically trigger the autocomplete, you can use:
      // autocompleteRef.current.setBounds(...) or similar method
    }
  }, [debouncedInputValue]);

  return (
    <div className="w-[470px]">
      <Form {...form}>
        <h1 className="font-inter-font text-4xl font-medium leading-[30px]">{t("title")}</h1>
        <form className="mt-12 space-y-8">
          {fields.map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({field}) => (
                <FormItem>
                  <FormLabel className="leading-6 text-Text2/40">
                    {item.label}
                    {item.required && <span className="text-Secondary2/40">{"*"}</span>}
                  </FormLabel>
                  <FormControl>
                    <InputPrimary
                      {...field}
                      ref={item.name === "streetAddress" ? inputRef : undefined}
                      placeholder=""
                      onChange={(e) => {
                        setInputValue(e.target.value); // Update input value
                        field.onChange(e); // Update the form field value
                        form.trigger(item.name);
                      }}
                    />
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
