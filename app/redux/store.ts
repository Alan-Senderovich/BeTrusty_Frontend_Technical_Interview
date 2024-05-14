import { configureStore } from "@reduxjs/toolkit";
import apartmentReducer from "./features/apartmentSlice";

export const store = configureStore({
  reducer: {
    apartmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

