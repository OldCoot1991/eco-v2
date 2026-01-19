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
import styles from "./Header.module.css";

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
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.topBarControl}>
              <ThemeToggle />
            </div>
            <div className={styles.topBarControl}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            {/* Left: Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={styles.menuButton}
            >
              <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Center: Logo */}
            <Link href="/" className={styles.logoLink}>
              <Logo className={styles.mobileLogo} />
            </Link>

            {/* Right: User Profile */}
            <UserProfileButton />
          </div>

          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            {/* Logo */}
            <Link href="/" className={styles.desktopLogoLink}>
              <Logo className={styles.desktopLogo} />
            </Link>

            {/* Controls */}
            <div className={styles.controls}>
              {/* Social links on desktop */}
              <div className={styles.socialLinksWrapper}>
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
