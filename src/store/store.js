import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./sliceReduc";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
});
export default store;