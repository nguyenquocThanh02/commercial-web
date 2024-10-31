import React from "react";
import {useTranslations} from "next-intl";

import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import {typeBreadCrumbs} from "@/types";
import AssuranceComponent from "@/components/custom/assurance.component";
import TrustMetricComponent from "@/components/custom/trustMetric.component";
import OurTeamComponent from "@/components/custom/ourteam.component";
import AboutUsComponent from "@/components/custom/aboutUs.component";

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
    <div>
      <div className="l-container">
        <BreadcrumbComponent links={nav} />
      </div>

      <AboutUsComponent />
      <TrustMetricComponent />
      <OurTeamComponent />
      <AssuranceComponent />
    </div>
  );
};

export default AboutPage;
