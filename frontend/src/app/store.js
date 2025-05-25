// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store; // ✅ This fixes the import error
