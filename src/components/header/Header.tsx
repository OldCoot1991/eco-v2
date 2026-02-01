"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import styles from "./Header.module.css";
import { FaCog } from "react-icons/fa";
import Logo from "../ui/Logo/Logo";
import UserProfileButton from "../ui/UserProfileButton/UserProfileButton";
import { Navbar } from "../Navbar/Navbar";
import SettingsModal from "../SettingsModal/SettingsModal";
import ContactsModal from "../ContactsModal/ContactsModal";

export default function Header() {
  const currentPath = usePathname();
  const theme = useAppSelector((state) => state.theme.mode);
  const language = useAppSelector((state) => state.language.current);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleNavigation = (path: string) => {
  };

  return (
    <>
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

            {/* Right: Settings & User Profile */}
            <div className={styles.mobileControls}>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={styles.settingsButton}
                aria-label="Settings"
              >
                <FaCog className={styles.settingsIcon} />
              </button>
              <UserProfileButton />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            {/* Logo */}
            <Link href="/" className={styles.desktopLogoLink}>
              <Logo className={styles.desktopLogo} />
            </Link>

            {/* Controls */}
            <div className={styles.controls}>
              {/* Contacts Button */}
              <button
                onClick={() => setIsContactsOpen(true)}
                className={styles.contactsButton}
              >
                {language === 'en' ? 'Contacts' : 'Контакты'}
              </button>

              {/* Settings Button */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className={styles.settingsButton}
                aria-label="Settings"
              >
                <FaCog className={styles.settingsIcon} />
              </button>

              <UserProfileButton />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigation}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={isContactsOpen}
        onClose={() => setIsContactsOpen(false)}
      />
    </>
  );
}
