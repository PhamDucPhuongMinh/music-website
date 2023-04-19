import { createSlice } from "@reduxjs/toolkit";

export interface ConfigAppType {
  navigationState: "showWithoutOverlay" | "showWithOverlay" | "hidden";
}

const initialState: ConfigAppType = { navigationState: "showWithoutOverlay" };

export const configAppSlice = createSlice({
  name: "config-app",
  initialState,
  reducers: {
    setNavigationStatus: (
      state,
      action: {
        type: string;
        payload: "showWithoutOverlay" | "showWithOverlay" | "hidden";
      }
    ) => {
      state.navigationState = action.payload;
    },
  },
});

export const { setNavigationStatus } = configAppSlice.actions;

export default configAppSlice.reducer;
