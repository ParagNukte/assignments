import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  name: string;
  value: string;
}

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [
    { name: "Electronics", value: "Electronics" },
    { name: "Apparel", value: "Apparel" },
    { name: "Food", value: "Food" },
    { name: "Toys", value: "Toys" },
    { name: "Beauty", value: "Beauty" },
    { name: "Books", value: "Books" },
    { name: "Sports", value: "Sports" },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // getAllCategories: (state) => state,
    addCategory: (state, action: PayloadAction<Category>) => {
      const exsits = state.categories.find(
        (cat) => cat.value.toLowerCase() === action.payload.value.toLowerCase()
      );
      if (!exsits) {
        state.categories.push(action.payload);
      }
    },
  },
});

export const { addCategory } = categorySlice.actions;

export const selectCategories = (state: { categories: CategoryState }) =>
  state.categories.categories;

export default categorySlice.reducer;
