"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { initTheme } from "../store/slices/themeSlice";
import type { RootState } from "../store/store";

export default function ThemeInitializer() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s: RootState) => s.theme.mode);

  useEffect(() => {
    dispatch(initTheme());
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // update CSS variables used in globals.css
    const bg = mode === "dark" ? "#0a0a0a" : "#ffffff";
    const fg = mode === "dark" ? "#ededed" : "#171717";
    root.style.setProperty("--background", bg);
    root.style.setProperty("--foreground", fg);
  }, [mode]);

  return null;
}
