import { createSlice } from "@reduxjs/toolkit";

export type EmptyState = Record<string, never>;

const initialState: EmptyState = {};

const emptySlice = createSlice({
  name: "empty",
  initialState,
  reducers: {},
});

export const emptyActions = emptySlice.actions;
export default emptySlice.reducer;
