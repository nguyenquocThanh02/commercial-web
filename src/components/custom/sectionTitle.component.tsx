import React from "react";

const SectionTitle: React.FC<{feature: string; title: string}> = ({feature, title}) => {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <div className="h-10 w-5 rounded bg-Secondary2" />
        <h3 className="font-semibold">{feature}</h3>
      </div>
      <h2 className="py-0 text-left font-inter-font text-2xl font-semibold leading-none tracking-[0.04em] xl:text-[36px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
