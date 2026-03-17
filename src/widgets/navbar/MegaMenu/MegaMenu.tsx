"use client";

import React, { memo } from 'react';
import styles from './MegaMenu.module.css';
import { NavItem } from '@/widgets/navbar/NavConfig';

interface MegaMenuProps {
    activeMenu: string | null;
    navConfig: NavItem[];
    handleLinkClick: (path: string) => void;
    getNavTitle: (key: string) => string;
    getNavDesc: (key: undefined | string) => string;
    supportTitle: string;
    supportDesc: string;
}

export const MegaMenu = memo(({
    activeMenu,
    navConfig,
    handleLinkClick,
    getNavTitle,
    getNavDesc,
    supportTitle,
    supportDesc
}: MegaMenuProps) => {
    return (
        <div className={`${styles.megaMenu} ${activeMenu ? styles.megaMenuOpen : styles.megaMenuClosed}`}>
            <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuGrid}>
                    <div className={styles.megaMenuItems}>
                        {activeMenu && navConfig.find(n => n.title === activeMenu)?.subItems?.map((sub, idx) => (
                            <button
                                key={sub.title}
                                onClick={() => handleLinkClick(sub.path)}
                                className={styles.megaMenuItem}
                                style={{ animationDelay: `${idx * 75}ms` }}
                            >
                                <div className={styles.megaMenuIcon} style={{ background: idx % 3 === 0 ? 'var(--gradient-accent)' : idx % 3 === 1 ? 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)' : 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)' }}>
                                    <svg className={styles.megaMenuIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={sub.icon} /></svg>
                                </div>
                                <div>
                                    <div className={styles.megaMenuItemTitle}>
                                        {getNavTitle(sub.title)}
                                    </div>
                                    <div className={styles.megaMenuItemDesc}>
                                        {getNavDesc(sub.desc)}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className={styles.megaMenuSidebar}>
                        <div className={styles.supportCard}>
                            <div>
                                <span className={styles.supportBadge}>Support</span>
                                <h4 className={styles.supportTitle}>{supportTitle}</h4>
                                <p className={styles.supportDesc}>{supportDesc}</p>
                            </div>
                            <a href="tel:89896400523" className={styles.supportPhone}>
                                <div className={styles.supportPhoneIcon}>
                                    <svg className={styles.supportPhoneIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" /></svg>
                                </div>
                                <span className={styles.supportPhoneNumber}>8 (989) 640-05-23</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

MegaMenu.displayName = 'MegaMenu';
