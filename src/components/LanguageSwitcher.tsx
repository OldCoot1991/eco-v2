"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleLanguage } from "@/lib/features/language/languageSlice";
import { HiLanguage } from "react-icons/hi2";

export default function LanguageSwitcher() {
    const language = useAppSelector((state) => state.language.current);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleLanguage())}
            className={`relative group flex items-center gap-1.5 px-3 h-8 rounded 
        ${theme === "dark"
                    ? "border-white/30 border bg-white/10 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] text-white"
                    : "border-black/20 border bg-transparent hover:bg-black/5 hover:border-black/50 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] text-gray-900"
                } backdrop-blur-sm 
        transition-all duration-300 hover:scale-105 active:scale-95`}
            aria-label="Toggle language"
        >
            <HiLanguage className="w-4 h-4 stroke-1 min-w-[16px]" />
            <span className={`font-bold mx-0.5 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>/</span>
            <span className="text-xs font-extrabold uppercase tracking-wide">{language}</span>
        </button>
    );
}
