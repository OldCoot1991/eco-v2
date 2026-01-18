"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import UserProfileButton from "@/components/ui/UserProfileButton";
import { Navbar } from "./navbar/Navbar";

export default function Header() {
  const currentPath = usePathname();
  const theme = useAppSelector((state) => state.theme.mode);
  const isDark = theme === 'dark';
  const setIsDark = () => { }; // Managed by Redux/ThemeToggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    // Navigation logic here if needed
  };

  return (
    <>
      {/* Top Bar - Theme & Language (Mobile/Tablet only) */}
      <div className="lg:hidden bg-card-bg border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-end py-2 gap-3">
            <div className="scale-75">
              <ThemeToggle />
            </div>
            <div className="scale-75">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <header className="relative z-40 w-full border-b lg:border-b border-primary/10 bg-card-bg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between">
            {/* Left: Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded bg-slate-900 dark:bg-emerald-500 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Center: Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo className="h-10 w-auto" />
            </Link>

            {/* Right: User Profile */}
            <UserProfileButton />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
              <Logo className="h-8 sm:h-10 w-auto" />
            </Link>

            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Social links on desktop */}
              <div className="hidden md:block">
                <SocialLinks />
              </div>
              <ThemeToggle />
              <LanguageSwitcher />
              <UserProfileButton />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
