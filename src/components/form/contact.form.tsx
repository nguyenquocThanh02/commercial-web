"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";
import {z} from "zod";

import {Form, FormControl, FormField, FormItem, FormMessage} from "../ui/form";
import WaitingLayout from "../layout/waiting.layout";
import {InputPrimary} from "../custom/inputPrimary.component";
import PrimaryButton from "../custom/primaryButton.ui";
import {TextareaCustom} from "../custom/textareaCustom";

import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {contactSchema} from "@/formSchema/formSchema";

const ContactForm = () => {
  const t = useTranslations("Contact.Form");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useCreateForm(contactSchema, {
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {}

  return (
    <div className="shadow-input-primary flex-1 rounded">
      {isLoading && <WaitingLayout />}
      <div className="px-[31px] py-10">
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <InputPrimary
                        placeholder={t("name")}
                        {...field}
                        className="h-[50px] w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <InputPrimary
                        placeholder={t("mail")}
                        {...field}
                        className="h-[50px] w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({field}) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <InputPrimary
                        placeholder={t("phone")}
                        {...field}
                        className="h-[50px] w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem className="mt-8 w-full">
                  <FormControl>
                    <TextareaCustom
                      placeholder={t("message")}
                      {...field}
                      className="h-[207px] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-8 flex items-center justify-end gap-6">
              <PrimaryButton className="h-[56px] w-[214px] bg-Secondary2 font-medium" type="submit">
                {t("button")}
              </PrimaryButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
