"use client";

import React, { useState } from 'react';
import styles from './MobileMenu.module.css';
import { NavItem } from '../NavConfig';
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
    navConfig: NavItem[];
    handleLinkClick: (path: string) => void;
    getNavTitle: (key: string) => string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    isDark,
    navConfig,
    handleLinkClick,
    getNavTitle
}) => {
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

    const toggleMenu = (title: string) => {
        setExpandedMenus(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed} ${isDark ? styles.mobileMenuDark : styles.mobileMenuLight}`}>
            <div className={styles.mobileMenuContent}>
                <div className={`${styles.mobileMenuHeader} ${isDark ? styles.mobileMenuHeaderDark : styles.mobileMenuHeaderLight}`}>
                    <h2 className={`${styles.mobileMenuTitle} ${isDark ? styles.mobileMenuTitleDark : styles.mobileMenuTitleLight}`}>
                        Main Menu
                    </h2>
                    <button
                        onClick={onClose}
                        className={`${styles.mobileMenuCloseButton} ${isDark ? styles.mobileMenuCloseButtonDark : styles.mobileMenuCloseButtonLight}`}
                    >
                        <svg className={styles.mobileMenuCloseIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className={styles.mobileMenuList}>
                    {navConfig.map((item) => {
                        const isExpanded = expandedMenus.includes(item.title);
                        const hasSubItems = item.subItems && item.subItems.length > 0;

                        return (
                            <div key={item.title} className={styles.mobileMenuItem}>
                                <button
                                    onClick={() => hasSubItems ? toggleMenu(item.title) : handleLinkClick(item.path)}
                                    className={`${styles.mobileMenuItemButton} ${isDark ? styles.mobileMenuItemButtonDark : styles.mobileMenuItemButtonLight}`}
                                >
                                    {getNavTitle(item.title)}
                                    {hasSubItems && (
                                        <svg
                                            className={`${styles.mobileMenuChevron} ${isExpanded ? styles.mobileMenuChevronExpanded : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>
                                {hasSubItems && (
                                    <div className={`${styles.mobileMenuSubmenu} ${isExpanded ? styles.mobileMenuSubmenuExpanded : styles.mobileMenuSubmenuCollapsed}`}>
                                        {item.subItems!.map((sub) => (
                                            <button
                                                key={sub.title}
                                                onClick={() => handleLinkClick(sub.path)}
                                                className={`${styles.mobileMenuSubItem} ${isDark ? styles.mobileMenuSubItemDark : styles.mobileMenuSubItemLight}`}
                                            >
                                                <div className={styles.mobileMenuSubItemIcon}>
                                                    <svg className={styles.mobileMenuSubItemIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={sub.icon} />
                                                    </svg>
                                                </div>
                                                <div className={`${styles.mobileMenuSubItemTitle} ${isDark ? styles.mobileMenuSubItemTitleDark : styles.mobileMenuSubItemTitleLight}`}>
                                                    {getNavTitle(sub.title)}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
