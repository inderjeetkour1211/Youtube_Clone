import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
const Store = configureStore({
  reducer: {
    app: AppSlice, // given appSlice to my store
  },
});

export default Store;
