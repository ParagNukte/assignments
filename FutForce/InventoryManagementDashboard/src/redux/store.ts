import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    allProducts: productReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
