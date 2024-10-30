import React from "react";

import ProductDetailComponent from "@/components/custom/detailProduct.component";
import {ProductApis} from "@/services";

const DetailProductPage = async ({params}: {params: {id: string}}) => {
  const data = await ProductApis.getDetailProduct(params.id);

  return (
    <div className="l-container">
      <ProductDetailComponent data={data} />
      {/* <MyGallery /> */}
    </div>
  );
};

export default DetailProductPage;
