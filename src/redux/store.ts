import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// dispatchをカスタマイズ
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
