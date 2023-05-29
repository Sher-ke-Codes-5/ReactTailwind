import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./../Reducer/CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, CartSlice);
const Store = configureStore({
  reducer: persistedReducer,
});

export default Store;
