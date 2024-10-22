import {createLocalizedPathnamesNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      vi: "/pathnames",
    },
  },
  localePrefix: "as-needed",
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);

// import {createSharedPathnamesNavigation} from "next-intl/navigation";

// export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
//   locales: ["en", "vn"],
// });
