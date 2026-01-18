"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";

export default function ThemeSync() {
    const theme = useAppSelector((state) => state.theme.mode);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        // Sync to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return null;
}
