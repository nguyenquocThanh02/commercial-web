import React from "react";

import ProductDetailComponent from "@/components/custom/detailProduct.component";

const DetailProductPage = ({params}: {params: {id: string}}) => {
  return (
    <div className="l-container">
      <ProductDetailComponent id={params.id} />
      {/* <MyGallery /> */}
    </div>
  );
};

export default DetailProductPage;
