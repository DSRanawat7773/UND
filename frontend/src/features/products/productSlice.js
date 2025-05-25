import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// GET PRODUCTS
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get(`${API}/api/products`);
  return res.data;
});

// ADD PRODUCT (FormData with image)
export const addProduct = createAsyncThunk("products/addProduct", async (formData) => {
  const res = await axios.post(`${API}/api/products`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default productSlice.reducer;
