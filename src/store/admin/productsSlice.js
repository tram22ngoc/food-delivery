import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/config";

const initialState = {
  products: [],
};

export const fetchData = createAsyncThunk("firestore/product", async () => {
  const snapshot = await firestore.collection("products").get();
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
});

export const deleteProduct = createAsyncThunk(
  "firestore/deleteProduct",
  async (productId) => {
    await firestore.collection("products").doc(productId).delete();
    return productId;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        // Remove the deleted product from the state
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default productSlice;
