import React from "react";
import {useTranslations} from "next-intl";

import SectionTitle from "./sectionTitle.component";
import CategoryButton from "./categoryButton.component";
import ArrowButton from "./arrowButton.component";

const DeviceCategoryComponent = () => {
  const t = useTranslations("Home.Categories");

  return (
    <section className="l-container mt-[70px]">
      <div className="flex items-end justify-between">
        <SectionTitle feature={t("feature")} title={t("title")} />
        <div className="flex items-center gap-2">
          <ArrowButton direct="left" />
          <ArrowButton direct="right" />
        </div>
      </div>
      <div className="mt-[60px] flex flex-wrap justify-center gap-7">
        {Array.from({length: 6}, (_, i) => i + 1).map((item, index) => (
          <CategoryButton key={index} />
        ))}
      </div>
      <hr className="mt-[70px] text-Text2/30" />
    </section>
  );
};

export default DeviceCategoryComponent;
// [...new Array(6)]
