"use client";
import React, {useState} from "react";
import {useTranslations} from "next-intl";
import {z} from "zod";
import {toast} from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Input} from "../ui/input";
import WaitingLayout from "../layout/waiting.layout";

import PrimaryButton from "./primaryButton.ui";

import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {emailSchema} from "@/formSchema/formSchema";
import {AuthApis} from "@/services";

const ForgotPasswordComponent = () => {
  const t = useTranslations("Login.ForgotPassword");
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formForgotPassword = useCreateForm(emailSchema, {
    email: "",
  });

  async function onSubmit(values: z.infer<typeof emailSchema>) {
    setIsLoading(true);
    const result = await AuthApis.forgetPassword(values.email);

    if (result) {
      setOpen(false);
      formForgotPassword.reset();
      toast.success("Post email successfully. Check email to reset password.");
    }
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <WaitingLayout />}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <p className="text-Secondary2 hover:cursor-pointer hover:opacity-80">
            {t("forgetPassword")}
          </p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
            <DialogDescription>{t("description")}</DialogDescription>
          </DialogHeader>
          <Form {...formForgotPassword}>
            <form className="space-y-4" onSubmit={formForgotPassword.handleSubmit(onSubmit)}>
              <FormField
                control={formForgotPassword.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("placeHover")}
                        {...field}
                        className="h-12"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <PrimaryButton
                className="h-12 w-full"
                disabled={isLoading}
                type="button"
                onClick={formForgotPassword.handleSubmit(onSubmit)}
              >
                {t("confirm")}
              </PrimaryButton>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ForgotPasswordComponent;
