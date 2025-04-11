import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/slice/ProductSlice";
import { useDispatch } from "react-redux";
import inputReducer from "../feature/slice/inputSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    input: inputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
