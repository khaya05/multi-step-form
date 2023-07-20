import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./stepsSlice";

export const store = configureStore({
  reducer: {
    steps: stepsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;