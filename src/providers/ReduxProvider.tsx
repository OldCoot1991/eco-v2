"use client";

import React from "react";
import { Provider } from "react-redux";
import ThemeInitializer from "./ThemeInitializer";
import { store } from "@/store/store";

export default function ReduxProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      {children}
    </Provider>
  );
}
