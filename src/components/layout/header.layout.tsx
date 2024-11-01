"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {AlignJustify} from "lucide-react";

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
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "../ui/sheet";

import iconSearch from "@/assets/svg/searchIcon.svg";
import iconDropdown from "@/assets/svg/DropDown.svg";
import {Link, usePathname, useRouter} from "@/app/navigation";
import {authStore, cartStore, wishlistStore} from "@/store";
import {localStorageKey} from "@/constants/localStorage";

const HeaderLayout = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const t = useTranslations("Header");

  const [open, setOpen] = useState<boolean>(false);

  const {auth, setAuth} = authStore();
  const {wishlist, setWishlist} = wishlistStore();
  const {cart, setCart} = cartStore();

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
    setAuth(localStorage.getItem(localStorageKey.accessToken) || "");
    setWishlist(JSON.parse(localStorage.getItem(localStorageKey.wishlist) || "[]") || []);
    setCart(JSON.parse(localStorage.getItem(localStorageKey.cart) || "[]") || []);
  }, []);

  const handleChangeLocale = (value: "en" | "vi") => {
    router.push(pathname, {locale: value});
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-20 w-full border-b border-Text2/30 bg-Primary pb-4">
      <div className="xl:[48px] h-[36px] w-full bg-Text2 text-Primary xl:flex">
        <div className="l-container relative my-auto">
          <div className="hidden w-full items-center justify-center gap-[10px] text-sm xl:flex">
            <p className="leading-[21px]">{t("Advertise.advertise")}</p>
            <Link className="font-semibold underline" href={"/"}>
              {t("Advertise.shop-now")}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 xl:absolute xl:bottom-0 xl:right-primary xl:top-0">
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
                  onValueChange={(e) => handleChangeLocale(e as "en" | "vi")}
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

      <div className="l-container mt-10 flex h-[28px] items-center justify-between xl:h-[38px]">
        <Link className="hidden hover:opacity-70 xl:flex" href={"/"}>
          <h2 className="font-inter-font text-2xl font-bold">Exclusive</h2>
        </Link>

        <div className="ml-0 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AlignJustify className="opacity-90 hover:opacity-70" size={28} />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-5" side="left">
              <SheetHeader>
                <SheetTitle />
              </SheetHeader>
              {navbar.map((item, index) =>
                auth && item.path === "/register" ? (
                  ""
                ) : (
                  <LinkCustom
                    key={index}
                    className="w-full text-center"
                    href={item.path}
                    isActive={pathname === item.path}
                    text={item?.name}
                    onClick={() => setOpen(false)}
                  />
                ),
              )}
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden items-center lg:flex lg:gap-5 xl:gap-[49px]">
          {navbar.map((item, index) =>
            auth && item.path === "/register" ? (
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
          <div className="relative ml-auto hidden flex-1 sm:flex md:grow-0">
            <Input
              className="h-[38px] border-none bg-Secondary text-xs sm:w-[243px]"
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
            <IconWithCounterComponent
              account={auth ? wishlist.length : 0}
              tooltip={t("Icon.wishlist")}
            />
            <IconWithCounterComponent
              account={auth ? cart.length : 0}
              icon="cart"
              path="/cart"
              tooltip={t("Icon.cart")}
            />
            {auth && <ProfileComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
