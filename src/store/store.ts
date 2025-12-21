import { configureStore } from "@reduxjs/toolkit";
import emptyReducer, { EmptyState } from "./slices/emptySlice";
import themeReducer, { ThemeState } from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    empty: emptyReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = {
  empty: EmptyState;
  theme: ThemeState;
};

export type AppDispatch = typeof store.dispatch;


