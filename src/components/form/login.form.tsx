"use client";

import {z} from "zod";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {toast} from "sonner";

import SignUpWithGoogleButton from "../custom/signUpWithGoogle.button";
import {InputAuth} from "../custom/inputAuth.ui";
import PrimaryButton from "../custom/primaryButton.ui";
import WaitingLayout from "../layout/waiting.layout";
import ForgotPasswordComponent from "../custom/forgotPassword.component";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useCreateForm} from "@/hooks/useCreateForm.hook";
import {loginSchema} from "@/formSchema/formSchema";
import {Link, useRouter} from "@/app/navigation";
import {AuthApis} from "@/services";
import {typeLogin} from "@/types";
import {authStore} from "@/store";
import {localStorageKey} from "@/constants/localStorage";

export default function LoginForm() {
  const t = useTranslations("Login");
  const route = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {setAuth} = authStore();

  const form = useCreateForm(loginSchema, {
    account: "",
    password: "",
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    const dataLogin: typeLogin = {
      account: values.account,
      password: values.password,
    };

    const loginResult = await AuthApis.login(dataLogin);

    if (loginResult) {
      localStorage.setItem(localStorageKey.accessToken, loginResult.token);
      toast.success("Login successfully");
      const cookies = await AuthApis.setCookie(loginResult);

      setAuth(cookies.res.token);
      route.push("/");
      route.refresh();
    } else {
      setIsLoading(false);
    }
  }

  return (
    <div>
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
                      {...field}
                      className="h-[56px] w-full"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <PrimaryButton className="h-[56px] w-[143px] bg-Secondary2 font-medium" type="submit">
                {t("Button.login")}
              </PrimaryButton>
              <ForgotPasswordComponent />
            </div>
            <SignUpWithGoogleButton text={t("Button.google")} />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <p>{t("Link.details")}</p>
            <Link
              className="border-b border-Text2/70 pb-1 font-medium hover:opacity-50"
              href={"/register"}
            >
              {t("Link.name")}
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
