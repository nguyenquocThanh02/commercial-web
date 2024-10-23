import React from "react";

const ProductDetailPage = ({params}: {params: {id: string}}) => {
  console.log(params.id);

  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
