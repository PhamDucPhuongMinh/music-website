import { configureStore } from "@reduxjs/toolkit";
import configAppReducer from "./slice/configAppSlice";

export const store = configureStore({
  reducer: {
    configApp: configAppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
