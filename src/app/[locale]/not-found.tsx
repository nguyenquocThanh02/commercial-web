import {useTranslations} from "next-intl";
import React from "react";

import {Link} from "../navigation";

import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import PrimaryButton from "@/components/custom/primaryButton.ui";

const NotFoundPage = () => {
  const t = useTranslations("NotFound");

  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "404 Error",
      path: "#",
    },
  ];

  return (
    <div className="l-container h-[70vh]">
      <BreadcrumbComponent links={nav} />
      <div className="mt-[140px] flex flex-col items-center justify-center">
        <h1 className="text-center font-inter-font text-3xl font-medium leading-[115px] sm:text-[110px]">
          {" "}
          {t("title")}
        </h1>
        <p className="mt-10 text-center">{t("description")}</p>
        <Link className="mt-8 sm:mt-20" href={"/"}>
          <PrimaryButton className="h-[56px] w-[254px]">{t("button")}</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
