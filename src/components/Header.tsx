"use client";

import AnimatedLogo from "./ui/AnimatedLogo";
import TopBar from "./ui/TopBar";
import SearchBar from "./ui/SearchBar";
import MobileSettings from "./ui/MobileSettings";
import UserProfileButton from "./ui/UserProfileButton";
import MobileTopBar from "./ui/MobileTopBar";
import MobileNav from "./ui/MobileNav";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Mobile: Level 1 - Settings */}
            <MobileTopBar />

            {/* Mobile: Level 2 - Burger, Logo, Profile */}
            <MobileNav />

            {/* Desktop: TopBar with contacts and settings */}
            <TopBar />

            {/* Desktop: Main navigation */}
            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    <AnimatedLogo />
                    <SearchBar />

                    <div className={styles.rightSection}>
                        <UserProfileButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
