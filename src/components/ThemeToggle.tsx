"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className={`
                relative w-16 h-8 rounded-full p-1 cursor-pointer transition-all duration-500 ease-in-out shadow-inner
                ${theme === 'dark' ? 'bg-slate-800 shadow-slate-950/50' : 'bg-sky-200 shadow-sky-300/50'}
                hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500
            `}
            aria-label="Переключить тему"
        >
            {/* Background Icons (Decorations) */}
            <div className={`absolute inset-0 flex justify-between items-center px-2 text-xs font-bold transition-opacity duration-300`}>
                <span className={`${theme === 'dark' ? 'opacity-0' : 'opacity-100 text-amber-500'}`}>☀</span>
                <span className={`${theme === 'dark' ? 'opacity-100 text-slate-400' : 'opacity-0'}`}>☾</span>
            </div>

            {/* Sliding Knob */}
            <div
                className={`
                    relative w-6 h-6 rounded-full shadow-md transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
                    flex items-center justify-center
                    ${theme === 'dark'
                        ? 'translate-x-8 bg-slate-950 text-sky-400 border border-slate-700'
                        : 'translate-x-0 bg-white text-amber-500 border border-white'
                    }
                `}
            >
                {/* Icon inside Knob */}
                {theme === 'dark' ? (
                    <FaMoon className="w-3 h-3 rotate-0 transition-all duration-500" />
                ) : (
                    <FaSun className="w-3.5 h-3.5 rotate-0 transition-all duration-500" />
                )}
            </div>
        </button>
    );
}
