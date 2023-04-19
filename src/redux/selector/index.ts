import { RootState } from "../store";

export const getNavigationStatusSelector = (state: RootState) =>
  state.configApp.navigationState;
