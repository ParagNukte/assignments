import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.types";
import productData from "../../data/productsData.json";

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      // Type casting to Product[] if needed
      state.products = productData as Product[];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const nextId = Math.max(0, ...state.products.map((p) => p.id)) + 1;
      state.products.push({ ...action.payload, id: nextId });
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    filterProducts: (
      state,
      action: PayloadAction<{ category?: string; inStock?: boolean }>
    ) => {
      const { category = "", inStock = false } = action.payload;

      state.filteredProducts = state.products.filter((product) => {
        const categoryMatches =
          category === "" || product.category === category;
        const stockMatches = !inStock || product.stock_quantity > 0;
        return categoryMatches && stockMatches;
      });
    },
  },
});

export const { fetchProducts, addProduct, deleteProduct, filterProducts } =
  productSlice.actions;
export default productSlice.reducer;
