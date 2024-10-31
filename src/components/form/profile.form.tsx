"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";
import {z} from "zod";
import {usePlacesWidget} from "react-google-autocomplete";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import WaitingLayout from "../layout/waiting.layout";
import {InputPrimary} from "../custom/inputPrimary.component";
import {Label} from "../ui/label";
import PrimaryButton from "../custom/primaryButton.ui";
import {Button} from "../ui/button";

import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {profileSchema} from "@/formSchema/formSchema";

const ProfileForm = () => {
  const t = useTranslations("Profile.Form");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {ref: refAddress} = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_KEY_GOOGLE_AUTO_PLACE,
    onPlaceSelected: (place) => {
      form.setValue("address", place.formatted_address);
    },
  });

  const passwords = [
    {
      placehover: t("Placehover.currentPass"),
      name: "currentPassword",
    },
    {
      placehover: t("Placehover.newPass"),
      name: "newPassword",
    },
    {
      placehover: t("Placehover.confirmPass"),
      name: "confirmPassword",
    },
  ];
  const form = useCreateForm(profileSchema, {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {}

  return (
    <div className="shadow-input-primary flex-1 rounded">
      {isLoading && <WaitingLayout />}
      <div className="px-20 py-10">
        <Form {...form}>
          <h1 className="mb-6 font-inter-font text-[20px] font-medium leading-7 tracking-wider text-Secondary2">
            {t("title")}
          </h1>

          <form className="mt-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base text-Text2">{t("firstName")}</FormLabel>
                    <FormControl>
                      <InputPrimary placeholder="Thanh" {...field} className="h-[52px] w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base text-Text2">{t("lastName")}</FormLabel>
                    <FormControl>
                      <InputPrimary placeholder="Nguyen" {...field} className="h-[52px] w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6 flex justify-between gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base text-Text2">{t("email")}</FormLabel>
                    <FormControl>
                      <InputPrimary
                        placeholder="abc@gmail.com"
                        {...field}
                        className="h-[52px] w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-base text-Text2">{t("address")}</FormLabel>
                    <FormControl>
                      <InputPrimary
                        ref={refAddress ? refAddress : undefined}
                        placeholder="126, ..."
                        {...field}
                        className="h-[52px] w-full"
                        onChange={(e) => {
                          field.onChange(e);
                          form.trigger("address");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6">
              <Label className="text-base text-Text2">{t("password")}</Label>
              <div className="mt-2 space-y-6">
                {passwords.map((item, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name={item.name}
                    render={({field}) => (
                      <FormItem>
                        <FormControl>
                          <InputPrimary
                            placeholder={item.placehover}
                            {...field}
                            className="h-[52px] w-full"
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end gap-6">
              <Button className="" variant={"ghost"}>
                {t("cancelBtn")}
              </Button>
              <PrimaryButton className="h-[56px] w-[214px] bg-Secondary2 font-medium" type="submit">
                {t("saveBtn")}
              </PrimaryButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
