import React, { useState, useEffect } from "react";
import importedProductsData from "./data/productsData.json";
import type { Product } from "../types/product.types";
import ProductItem from "./ProductItem";

const productsData: Product[] = importedProductsData as Product[];

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, we will fetch from an API:
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch('/api/products');
    //     const data: Product[] = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error("Failed to fetch products:", error);
    //   }
    // };
    // fetchProducts();
    setProducts(productsData);
  }, []);

  if (products.length === 0) {
    return <p>Loading products or no products available...</p>;
  }

  return (
    <div className="product-list-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
