import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useTranslations} from "next-intl";

import iconRowRight from "@/assets/svg/arrow-right.svg";
const ShopNowComponent: React.FC<{link: string; arrow?: boolean}> = ({link, arrow = false}) => {
  const t = useTranslations("Home");

  return (
    <div>
      <Link className="flex gap-3 hover:opacity-70" href={link}>
        <p className="border-b border-Text pb-1 font-medium">{t("Link.shop-now")}</p>
        {arrow && <Image alt="icon row right" sizes="24" src={iconRowRight} />}
      </Link>
    </div>
  );
};

export default ShopNowComponent;
