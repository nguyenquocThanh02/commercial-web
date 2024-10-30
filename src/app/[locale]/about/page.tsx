import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import aboutImg from "@/assets/img/aboutImg.png";
import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import {typeBreadCrumbs} from "@/types";
import AssuranceComponent from "@/components/custom/assurance.component";
import TrustMetricComponent from "@/components/custom/trustMetric.component";
import OurTeamComponent from "@/components/custom/ourteam.component";

const AboutPage = () => {
  const t = useTranslations();
  const nav: typeBreadCrumbs[] = [
    {
      name: t("Header.Navbar.home"),
      link: "/",
    },
    {
      name: t("Header.Navbar.about"),
      link: "/about",
    },
  ];

  return (
    <div className="">
      <div className="l-container">
        <BreadcrumbComponent links={nav} />
      </div>
      <div className="relative mb-[500px] mt-[400px] w-full">
        <div className="l-container mt-20 flex items-center justify-center xl:justify-between">
          <div className="w-[525px]">
            <h1 className="text-[54px] font-semibold leading-[64px]">{t("About.Header.title")}</h1>
            <div className="mt-10 space-y-6">
              <p className="leading-[26px]">{t("About.Header.content1")}</p>
              <p className="leading-[26px]">{t("About.Header.content2")}</p>
            </div>
          </div>
          <div className="absolute right-0 hidden flex-shrink xl:flex">
            <Image alt="slider auth" height={609} src={aboutImg} width={705} />
          </div>
        </div>
      </div>
      <TrustMetricComponent />
      <OurTeamComponent />
      <AssuranceComponent />
    </div>
  );
};

export default AboutPage;
