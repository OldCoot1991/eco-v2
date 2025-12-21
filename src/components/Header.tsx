"use client";

import Link from "next/link";
import { FaVk, FaTelegram, FaSearch, FaUser } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAppSelector } from "@/lib/hooks";
import Logo from "./ui/Logo";
import { useState } from "react";
import SnowEffect from "./ui/SnowEffect";

export default function Header() {
    const theme = useAppSelector((state) => state.theme.mode);
    const [isSnowing, setIsSnowing] = useState(false);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        backdrop-blur-xl border-b ${theme === "dark"
                ? "bg-black/80 border-white/10"
                : "bg-white/95 border-black/5 shadow-sm"
            }`}>
            {isSnowing && <SnowEffect />}

            {/* Top Bar: Clean & Elegant */}
            <div className={`hidden md:block border-b transition-colors duration-300 ${theme === "dark"
                ? "border-white/10 text-white"
                : "border-black/5 text-stone-700"
                }`}>
                <div className="container mx-auto px-6 py-2">
                    <div className="flex items-center justify-between text-sm font-semibold tracking-wide">

                        {/* Left: Contact / Info */}
                        <div className="flex items-center gap-6">
                            <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                                Нальчик, ул. Ленина 1
                            </span>
                            <a href="tel:+78001234567" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                +7 (800) 123-45-67
                            </a>
                        </div>

                        {/* Right: Socials (Subtle) */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <a href="#" aria-label="VK" className="hover:text-[#0077FF] dark:hover:text-[#0077FF] transition-colors p-1 transform hover:scale-110 duration-200">
                                    <FaVk className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="Telegram" className="hover:text-[#24A1DE] dark:hover:text-[#24A1DE] transition-colors p-1 transform hover:scale-110 duration-200">
                                    <FaTelegram className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="w-px h-4 bg-current opacity-30"></div>
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header: Logo, Search, Actions */}
            <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
                <div className="flex items-center justify-between gap-6">

                    {/* Left: Logo */}
                    <Link
                        href="/"
                        className="flex items-center group shrink-0 relative z-10"
                        onMouseEnter={() => setIsSnowing(true)}
                        onMouseLeave={() => setIsSnowing(false)}
                    >
                        <Logo className="h-8 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105" />
                    </Link>

                    {/* Center: Search Bar (Desktop) */}
                    <div className="hidden lg:block flex-1 max-w-2xl">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Поиск по сайту..."
                                className={`w-full h-12 px-6 pl-12 rounded-full text-base transition-all duration-300
                                ${theme === "dark"
                                        ? "bg-white/5 border border-white/10 hover:bg-white/10 focus:bg-white/10 focus:border-white/30 text-white placeholder:text-gray-400"
                                        : "bg-black/5 border border-black/5 hover:bg-black/10 focus:bg-black/10 focus:border-black/20 text-gray-900 placeholder:text-gray-500"
                                    }
                                focus:outline-none focus:ring-0`}
                            />
                            <FaSearch className={`absolute left-4 top-1/2 -translate-y-1/2 transition-opacity ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} opacity-60 group-focus-within:opacity-100`} />
                        </div>
                    </div>

                    {/* Right: User & Mobile Actions */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Mobile Settings (Visible only on mobile) */}
                        <div className="md:hidden flex items-center gap-2">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>

                        <Link
                            href="/profile"
                            className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-300
                            ${theme === "dark"
                                    ? "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white"
                                    : "border-black/10 bg-black/5 hover:bg-black/10 hover:border-black/30 text-gray-900"
                                }`}
                            aria-label="Вход в кабинет"
                        >
                            <FaUser className="w-4 h-4 md:w-5 md:h-5 opacity-90" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
