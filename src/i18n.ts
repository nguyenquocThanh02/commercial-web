import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";
import deepmerge from "deepmerge";
const locales = ["en", "vi"];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  const localeMessages = (await import(`../locales/${locale}.json`)).default;
  const defaultMessages = (await import(`../locales/en.json`)).default;
  const messages = deepmerge(defaultMessages, localeMessages);

  return {
    messages,
  };
});
