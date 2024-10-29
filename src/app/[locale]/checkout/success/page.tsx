import {useTranslations} from "next-intl";
import React from "react";

import {Link} from "@/app/navigation";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import SecondaryButton from "@/components/custom/secondaryButton.component";

const OrderSuccessPage = () => {
  const t = useTranslations("Checkout.ToastOrder");

  return (
    <div className="l-container h-[70vh]">
      <div className="mt-[140px] flex flex-col items-center justify-center">
        <h1 className="text-center font-inter-font text-3xl font-medium leading-[90px] sm:text-[80px]">
          {" "}
          {t("success")}
        </h1>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link className="sm:mt-20" href={"/"}>
            <SecondaryButton className="h-[56px] w-[254px]">{t("buttonReturn")}</SecondaryButton>
          </Link>
          <Link className="sm:mt-20" href={"/"}>
            <PrimaryButton className="h-[56px] w-[254px]">{t("buttonReview")}</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
