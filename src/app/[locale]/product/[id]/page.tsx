import React from "react";
import {notFound} from "next/navigation";

import ProductDetailComponent from "@/components/custom/detailProduct.component";
import {ProductApis} from "@/services";
import RecommendSectionComponent from "@/components/custom/recommendSection.component";

const DetailProductPage = async ({params}: {params: {id: string}}) => {
  const data = await ProductApis.getDetailProduct(params.id);

  if (data?.message) {
    return notFound();
  }

  return (
    <div className="l-container">
      <ProductDetailComponent data={data} />
      <RecommendSectionComponent />
    </div>
  );
};

export default DetailProductPage;
