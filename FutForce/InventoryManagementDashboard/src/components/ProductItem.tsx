// src/components/ProductItem.tsx
import React from "react";
import type {
  Product,
  ProductImage as ProductImageInterface,
} from "../types/product.types"; // Adjust path if necessary
// import "./ProductItem.css"; // Assuming you have this CSS file

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  if (!product) {
    return null;
  }

  const firstImage: ProductImageInterface | undefined =
    product.images && product.images.length > 0 ? product.images[0] : undefined;

  return (
    <div className="product-card">
      {firstImage ? (
        <img
          src={firstImage.url}
          alt={firstImage.alt_text || product.name}
          className="product-image"
        />
      ) : (
        <div className="product-image-placeholder">No Image</div>
      )}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">
          {product.category}{" "}
          {product.subcategory ? `> ${product.subcategory}` : ""}
        </p>
        <p className="product-price">
          {product.on_sale && typeof product.sale_price === "number" ? (
            <>
              <span className="original-price">
                {product.currency} {product.price.toFixed(2)}
              </span>
              <span className="sale-price">
                {product.currency} {product.sale_price.toFixed(2)}
              </span>
            </>
          ) : (
            <span>
              {product.currency} {product.price.toFixed(2)}
            </span>
          )}
        </p>
        <p className="product-stock">
          {product.stock_quantity > 0
            ? `${product.stock_quantity} in stock`
            : "Out of Stock"}
        </p>
        {/*
        <p className="product-description">{product.description.substring(0, 100)}...</p>
        {product.ratings && (
          <p>Rating: {product.ratings.average}/5 ({product.ratings.count} reviews)</p>
        )}
        */}
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default ProductItem;
