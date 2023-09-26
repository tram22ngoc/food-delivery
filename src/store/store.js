import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUISlice";
import productSlice from "./admin/productsSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUiSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
