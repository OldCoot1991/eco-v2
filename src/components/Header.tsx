"use client";

import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import UserProfileButton from "@/components/ui/UserProfileButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo className="h-10 w-auto" />

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
  );
}
