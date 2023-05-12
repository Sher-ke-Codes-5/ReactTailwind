import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "../Reducer/index";

const Store = configureStore({
  reducer: RootReducer,
});

export default Store;
