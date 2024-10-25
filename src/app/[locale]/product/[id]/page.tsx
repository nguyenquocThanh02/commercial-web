import React from "react";

import {BreadcrumbComponent} from "@/components/custom/breadscrumb.component";
import ProductDetailComponent from "@/components/custom/detailProduct.component";

const DetailProductPage = ({params}: {params: {id: string}}) => {
  const links = [
    {
      name: "Account",
      links: "/account",
    },
  ];

  return (
    <div>
      <BreadcrumbComponent links={links} />
      <ProductDetailComponent id={params.id} />
    </div>
  );
};

export default DetailProductPage;
