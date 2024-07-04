import React from "react";
import { ContentContainer } from "../components";
import Product from "../components/Product";

const Products = () => {
  return (
    <ContentContainer title="Products">
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <Product />
      </div>
    </ContentContainer>
  );
};

export default Products;
