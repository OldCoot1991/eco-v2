"use client";

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { initializeTheme } from "@/lib/features/theme/themeSlice";

export default function ThemeSync() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);
    const [mounted, setMounted] = useState(false);

    // Initialize theme from localStorage on mount
    useEffect(() => {
        dispatch(initializeTheme());
        setMounted(true);
    }, [dispatch]);

    // Sync state changes to DOM and localStorage, but ONLY after initialization
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    return null;
}
