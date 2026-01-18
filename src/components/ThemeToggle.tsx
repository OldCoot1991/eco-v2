"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/features/theme/themeSlice";

export default function ThemeToggle() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    // Reusable inner content for the toggle to ensure identical design
    const ToggleContent = () => (
        <>
            {/* Dynamic Backgrounds */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#4f46e5,#0f172a)]" />
                {/* Stars */}
                <div className="absolute top-1 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
                <div className="absolute top-3 left-6 w-0.5 h-0.5 bg-white rounded-full opacity-40" />
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full opacity-60 blur-[0.5px]" />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#38bdf8,#7dd3fc)]" />
                {/* Clouds */}
                <div className="absolute top-1 right-2 w-4 h-2 bg-white/40 rounded-full blur-[1px]" />
                <div className="absolute bottom-1 right-5 w-5 h-2 bg-white/30 rounded-full blur-[2px]" />
            </div>
        </>
    );

    // Reusable knob (Sun/Moon)
    const ToggleKnob = ({ translateClass, sizeClass = "w-5 h-5" }: { translateClass: string, sizeClass?: string }) => (
        <div className={`relative ${sizeClass} rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.3)] transform transition-transform duration-500 cubic-bezier(0.34,1.56,0.64,1) flex items-center justify-center z-10 ${translateClass} ${theme === 'dark' ? 'bg-slate-100' : 'bg-amber-300'}`}>
            {theme === 'dark' ? (
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200">
                    {/* Moon Craters */}
                    <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-slate-300 rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]" />
                    <div className="absolute bottom-1 right-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.1)]" />
                </div>
            ) : (
                <div className="relative w-full h-full rounded-full bg-amber-300 overflow-hidden shadow-[inset_-2px_-2px_4px_rgba(245,158,11,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-amber-200" />
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Mobile/Tablet: Premium Day/Night Switch (Restored to larger size for better touch) */}
            <button
                onClick={() => dispatch(toggleTheme())}
                className={`md:hidden relative w-14 h-7 rounded-full p-0.5 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 overflow-hidden group
                    ${theme === 'dark'
                        ? 'bg-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
                        : 'bg-sky-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
                    }`}
                aria-label="Переключить тему"
            >
                <ToggleContent />
                <ToggleKnob translateClass={theme === 'dark' ? 'translate-x-7' : 'translate-x-0'} sizeClass="w-6 h-6" />
            </button>

            {/* Desktop: Premium Day/Night Switch (Compact, h-6 to match LanguageSwitcher) */}
            <button
                onClick={() => dispatch(toggleTheme())}
                className={`hidden md:flex relative w-12 h-6 rounded-full p-0.5 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-inner hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 overflow-hidden group
                    ${theme === 'dark'
                        ? 'bg-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
                        : 'bg-sky-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]'
                    }`}
                aria-label="Переключить тему"
            >
                <ToggleContent />
                <ToggleKnob translateClass={theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} sizeClass="w-5 h-5" />
            </button>
        </>
    );
}
