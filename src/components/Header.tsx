"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import UserProfileButton from "@/components/ui/UserProfileButton";
import { Navbar } from "./navbar/Navbar";

export default function Header() {
  const currentPath = usePathname();
  const [isDark, setIsDark] = useState(false);

  const handleNavigate = (href: string) => {
    // Navigation logic here if needed
  };

  return (
    <>
      <header className="relative z-40 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo className="h-10 w-auto" />
            </Link>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <SocialLinks />
              <ThemeToggle />
              <LanguageSwitcher />
              <UserProfileButton />
            </div>
          </div>
        </div>
      </header>

      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </>
  );
}
