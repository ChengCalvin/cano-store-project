import React from "react";
import { Product } from "../mock-data/products";
import ProductCard from "../components/ProductCard";

import "./ProductList.css";

interface ProductListProps {
  products: Product[];
}

const ProductList = React.memo(({ products }: ProductListProps) => {
  if (products.length === 0) {
    return <h2>Result Not Found</h2>;
  }

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.name}
            productEnvironmentScore={product.environmentalScore}
          />
        ))}
      </div>
    </div>
  );
});

export default ProductList;
