"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

import {Input} from "../ui/input";

import {useQueryAbout} from "@/hooks/useQueryHooks";
import iconSend from "@/assets/svg/iconSend.svg";
import iconFacebook from "@/assets/svg/iconFacebook.svg";
import iconTwitter from "@/assets/svg/iconTwitter.svg";
import iconInstagram from "@/assets/svg/iconInstagram.svg";
import iconLinkedin from "@/assets/svg/IconLinkedin.svg";
import imgQrcoder from "@/assets/img/QrcodeImg.png";
import imgAppStore from "@/assets/img/appStoreImg.png";
import imgGgPlay from "@/assets/img/ggPlayImg.png";

const FooterLayout = () => {
  const t = useTranslations("Footer");

  const accountNav = [
    {
      name: t("Account.myAccount"),
      path: "#",
    },
    {
      name: t("Account.auth"),
      path: "#",
    },
    {
      name: t("Account.cart"),
      path: "#",
    },
    {
      name: t("Account.wishlist"),
      path: "#",
    },
    {
      name: t("Account.shop"),
      path: "#",
    },
  ];

  const quickLinkNav = [
    {
      name: t("QuickLink.privacy"),
      path: "#",
    },
    {
      name: t("QuickLink.term"),
      path: "#",
    },
    {
      name: t("QuickLink.faq"),
      path: "#",
    },
    {
      name: t("QuickLink.contact"),
      path: "#",
    },
  ];

  const {data: inforShop} = useQueryAbout.useInforShop();
  const {data: socials} = useQueryAbout.useSocials();

  return (
    <div className="mt-[140px] bg-Text2 text-Text">
      <div className="l-container flex flex-col items-center justify-center gap-6 py-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 font-inter-font text-2xl font-bold">Exclusive</h2>

          <div>
            <h3 className="mb-4 text-xl font-medium leading-[28px]">{t("Advertise.subcribes")}</h3>
            <p className="mb-4">{t("Advertise.advertise")}</p>
            <div className="relative h-[48px] xl:w-[217px]">
              <Input className="h-full w-full" placeholder={t("Input.placeHover")} />
              <Image
                alt="icon send"
                className="absolute bottom-0 right-4 top-0 my-auto"
                sizes="24"
                src={iconSend}
              />
            </div>
          </div>
        </div>
        <div className="w-fit text-center lg:w-[175px] lg:text-left">
          <h3 className="mb-6 text-xl font-medium leading-[28px]">{t("Support.support")}</h3>
          <ul className="flex flex-col gap-4">
            <li>{inforShop?.infor.address}</li>
            <li>{inforShop?.infor.email}</li>
            <li>{inforShop?.infor.phone}</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="mb-6 text-xl font-medium leading-[28px]">{t("Account.account")}</h3>
          <ul className="flex flex-col gap-4">
            {accountNav &&
              accountNav.map((item, index) => (
                <li key={index} className="hover:opacity-70">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-medium leading-[28px]">{t("QuickLink.quickLink")}</h3>
          <ul className="flex flex-col gap-4">
            {quickLinkNav &&
              quickLinkNav.map((item, index) => (
                <li key={index} className="hover:opacity-70">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <h3 className="mb-6 text-xl font-medium leading-[28px]">{t("App.app")}</h3>
          <div>
            <h4 className="mb-2 text-xs font-medium">{t("App.discount")}</h4>
            <div className="mb-6 flex gap-[10px]">
              <Image alt="img qr code" height={76} src={imgQrcoder} width={76} />
              <div className="flex flex-col justify-between gap-[10px]">
                <Image alt="img qr code" height={30} src={imgGgPlay} width={104} />
                <Image alt="img qr code" height={30} src={imgAppStore} width={104} />
              </div>
            </div>
            {socials?.socials && (
              <ul className="flex gap-6">
                <li className="hover:opacity-70">
                  <Link href={socials?.socials.facebook}>
                    <Image alt="icon facebook" sizes="24" src={iconFacebook} />
                  </Link>
                </li>
                <li className="hover:opacity-70">
                  <Link href={socials?.socials.twitter}>
                    <Image alt="icon twitter" sizes="24" src={iconTwitter} />
                  </Link>
                </li>

                <li className="hover:opacity-70">
                  <Link href={socials?.socials.instagram}>
                    <Image alt="icon instagram" sizes="24" src={iconInstagram} />
                  </Link>
                </li>
                <li className="hover:opacity-70">
                  <Link href={socials?.socials.linkedin}>
                    <Image alt="icon linkedin" sizes="24" src={iconLinkedin} />
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex h-[64px] items-center justify-center border-t border-Text text-Text opacity-40">
        &copy; {t("CopyRight.copyRight")}
      </div>
    </div>
  );
};

export default FooterLayout;
