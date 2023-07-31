import { configureStore } from "@reduxjs/toolkit";
import stepsSlice from "./stepsSlice";
import userData from './userDataSlice'

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
    userData

  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;