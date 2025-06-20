import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// Fetch products by category
export const fetchProducts = createAsyncThunk("products/fetchProducts", async (category) => {
  const endpoint = category
    ? `${API}/api/products/category/${category}`
    : `${API}/api/products`;
  const res = await axios.get(endpoint);
  return res.data;
});



// Add product based on type (mural or home-decor)
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ formData, type }) => {
    const endpoint = type === "mural" ? "/api/products/mural" : "/api/products/home-decor";
    const res = await axios.post(`${API}${endpoint}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  }
);

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

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
