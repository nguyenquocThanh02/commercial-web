"use client";

import {z} from "zod";
import {useTranslations} from "next-intl";
import {toast} from "sonner";
import {useState} from "react";

import SignUpWithGoogleButton from "../custom/signUpWithGoogle.button";
import PrimaryButton from "../custom/primaryButton.ui";
import WaitingLayout from "../layout/waiting.layout";
import {InputAuth} from "../custom/inputAuth.ui";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Link, useRouter} from "@/app/navigation";
import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {registerSchema} from "@/formSchema/formSchema";
import {AuthApis} from "@/services";
import {typeRegister} from "@/types";

export default function RegisterForm() {
  const t = useTranslations("Register");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const route = useRouter();
  const form = useCreateForm(registerSchema, {
    name: "",
    account: "",
    password: "",
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);

    const dataRegister: typeRegister = {
      name: values.name,
      account: values.account,
      password: values.password,
    };
    const result = await AuthApis.register(dataRegister);

    if (result) {
      toast.success("Register Successfully");
      route.push("/login");
    } else {
      setIsLoading(false);
    }
  }

  return (
    <div className="">
      {isLoading && <WaitingLayout />}
      <Form {...form}>
        <div>
          <h1 className="mb-6 font-inter-font text-[36px] font-medium tracking-wider">
            {t("Title.name")}
          </h1>
          <p>{t("Title.details")}</p>
        </div>
        <form className="mt-10 w-[371px]" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <InputAuth
                      placeholder={t("Placehover.name")}
                      {...field}
                      className="h-[56px] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="account"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <InputAuth
                      placeholder={t("Placehover.email-phone")}
                      {...field}
                      className="h-[56px] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <InputAuth
                      placeholder={t("Placehover.password")}
                      type="password"
                      {...field}
                      className="h-[56px] w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            <PrimaryButton className="mb-4 h-[56px] w-full bg-Secondary2 font-medium" type="submit">
              {t("Button.create")}
            </PrimaryButton>
            <SignUpWithGoogleButton text={t("Button.google")} />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <p>{t("Link.details")}</p>
            <Link
              className="border-b border-Text2/70 pb-1 font-medium hover:opacity-50"
              href="/login"
            >
              {t("Link.name")}
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
