import {createLocalizedPathnamesNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/login": {
      en: "/login",
      vi: "/login",
    },
    "/register": {
      en: "/register",
      vi: "/register",
    },
    "/contact": {
      en: "/contact",
      vi: "/contact",
    },
    "/about": {
      en: "/about",
      vi: "/about",
    },
    "/wishlist": {
      en: "/wishlist",
      vi: "/wishlist",
    },
  },
  localePrefix: "as-needed",
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);
