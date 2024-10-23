"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import {Input} from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {Button} from "../ui/button";
import LinkCustom from "../custom/link.custom";
import ProfileComponent from "../custom/profile.component";
import IconWithCounterComponent from "../ui/iconWithCounter.component";

import iconSearch from "@/assets/svg/searchIcon.svg";
import iconDropdown from "@/assets/svg/DropDown.svg";
import {Link, usePathname, useRouter} from "@/app/navigation";
import {localStorageKey} from "@/constants/localStorage";
import {authStore, wishlistStore} from "@/store";
import {typeProduct} from "@/types";

const HeaderLayout = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const router = useRouter();
  const currentLocale = useLocale();
  let isLogin = localStorage.getItem(localStorageKey.accessToken) ? true : false;

  const {isAuth} = authStore();
  const {wishlist, setWishlist} = wishlistStore();

  const navbar = [
    {
      name: t("Navbar.home"),
      path: "/",
    },
    {
      name: t("Navbar.contact"),
      path: "/contact",
    },
    {
      name: t("Navbar.about"),
      path: "/about",
    },
    {
      name: t("Navbar.signup"),
      path: "/register",
    },
  ];

  useEffect(() => {
    isLogin = localStorage.getItem(localStorageKey.accessToken) ? true : false;
  }, [isAuth]);

  useEffect(() => {
    const calculateAccountWishlist = () => {
      const favorites: typeProduct[] = localStorage.getItem(localStorageKey.wishlist)
        ? JSON.parse(localStorage.getItem(localStorageKey.wishlist) || "[]")
        : [];

      setWishlist(favorites);
    };

    calculateAccountWishlist();
  }, []);

  const handleChangeLocale = (value: string) => {
    router.push(pathname, {locale: value});
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-10 w-full border-b border-Text2/30 bg-Primary pb-4">
      <div className="flex h-[48px] w-full bg-Text2 text-Primary">
        <div className="l-container relative my-auto">
          <div className="flex w-full items-center justify-center gap-[10px] text-sm">
            <p className="leading-[21px]">{t("Advertise.advertise")}</p>
            <Link className="font-semibold underline" href={"/"}>
              {t("Advertise.shop-now")}
            </Link>
          </div>

          <div className="absolute bottom-0 right-primary top-0 flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex gap-2 p-0 hover:bg-inherit hover:text-Text hover:opacity-90"
                  variant="ghost"
                >
                  {currentLocale === "en" ? "English" : "Vietnamese"}
                  <Image alt="icon dropdown" sizes="24" src={iconDropdown} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dropdown-blur-custom w-fit text-Text">
                <DropdownMenuLabel className="text-shadow">{t("language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  defaultValue={currentLocale}
                  value={currentLocale}
                  onValueChange={handleChangeLocale}
                >
                  <DropdownMenuRadioItem className="text-shadow hover:cursor-pointer" value="en">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem className="text-shadow hover:cursor-pointer" value="vi">
                    Vietnamese
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="l-container mt-10 flex h-[38px] items-center justify-between">
        <Link href={"/"}>
          <h2 className="font-inter-font text-2xl font-bold">Exclusive</h2>
        </Link>
        <div className="flex items-center gap-[49px]">
          {navbar.map((item, index) =>
            isLogin && item.path === "/register" ? (
              ""
            ) : (
              <LinkCustom
                key={index}
                href={item.path}
                isActive={pathname === item.path}
                text={item?.name}
              />
            ),
          )}
        </div>
        <div className="flex items-center gap-6">
          <div className="relative ml-auto flex-1 md:grow-0">
            <Input
              className="h-[38px] w-[243px] border-none bg-Secondary text-xs"
              placeholder={t("Search.placehoverSearch")}
              type="text"
            />
            <Image
              alt="icon search"
              className="absolute right-[12px] top-[7px] text-muted-foreground"
              sizes="24"
              src={iconSearch}
            />
          </div>
          <div className="flex gap-4">
            <IconWithCounterComponent account={wishlist.length} tooltip={t("Icon.wishlist")} />
            <IconWithCounterComponent
              account={5}
              icon="cart"
              path="/cart"
              tooltip={t("Icon.cart")}
            />
            {isLogin && <ProfileComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
