import React from "react";
import {LayoutDashboard} from "lucide-react";
import {useTranslations} from "next-intl";

import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet";

import CategoryComponent from "./category.component";

import BannerComponent from "@/components/custom/banner.component";

const HeroComponent = () => {
  const t = useTranslations("Home.Hero");

  return (
    <div className="l-container flex flex-col xl:flex-row">
      <div className="hidden h-full min-h-[384px] w-1/5 items-end border-r border-Text2/30 xl:flex">
        <CategoryComponent />
      </div>

      <div className="my-3 xl:hidden">
        <Sheet>
          <SheetTrigger className="my-2 flex items-center gap-3">
            <LayoutDashboard className="opacity-90 hover:opacity-70" />
            {t("categories")}
          </SheetTrigger>
          <SheetContent side="bottom">
            <CategoryComponent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-1 items-end justify-center xl:justify-end">
        <BannerComponent />
      </div>
    </div>
  );
};

export default HeroComponent;
