"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from "@/lib/hooks";
import { navConfig } from './NavConfig';
import styles from './Navbar.module.css';
import { useTranslation } from '@/lib/hooks/useTranslation';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const router = useRouter();
  const theme = useAppSelector((state) => state.theme.mode);
  const isDark = theme === 'dark';
  const { t } = useTranslation();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);

  // Helper to get translated nav title/desc
  const getNavTitle = (key: string) => {
    const map: Record<string, string> = {
        'Физ. лицам': t.nav.fiz,
        'Бизнесу': t.nav.business,
        'Новости': t.nav.news,
        'О компании': t.nav.company,
        'Документы': t.nav.documents,
        'Закупки': t.nav.purchases,
        'Экострой': t.nav.ecostroy,
        // Subitems
        'Главная': t.nav.items.main,
        'Тарифы': t.nav.items.tariffs,
        'Вопросы-ответы': t.nav.items.faq,
        'Обратная связь': t.nav.items.feedback,
        'Контракт': t.nav.items.contract,
        'Нормативы': t.nav.items.norms,
        'Наша компания': t.nav.items.about,
        'Руководство': t.nav.items.management,
        'Наши клиенты': t.nav.items.clients,
        'Автопарк': t.nav.items.fleet,
        'Контейнеры': t.nav.items.containers,
        'Вакансии': t.nav.items.jobs,
        'Как сдавать отходы': t.nav.items.howto,
        'РСО для детей': t.nav.items.kids,
        'Контакты': t.nav.items.contacts,
        'ООО «Экологистика»': t.nav.items.companyDocs,
        'Нормативные правовые акты': t.nav.items.legal,
        'Заключение договора': t.nav.items.contract,
        'Строительно-монтажные работы': t.nav.items.construction,
        'Продажа/поставка стройматериалов': t.nav.items.materials,
    };
    return map[key] || key;
  };
  
  const getNavDesc = (key: undefined | string) => {
      if (!key) return '';
      // Map based on partial content or specific keys if possible
      // Since desc in NavConfig are specific sentences, we map them by known russian strings
      // Ideally we would put IDs in NavConfig.
      const map: Record<string, string> = {
          'Главная страница для физических лиц': t.nav.desc.fizMain,
          'Утвержденные цены на услуги': t.nav.desc.tariffs,
          'Часто задаваемые вопросы': t.nav.desc.faq,
          'Свяжитесь с нами': t.nav.desc.feedback,
          'Главная страница для бизнеса': t.nav.desc.bizMain,
          'Заключение договора': t.nav.desc.contract,
          'Цены для юридических лиц': t.nav.desc.tariffs,
          'Нормативная база': t.nav.desc.norms,
          'Информация о компании': t.nav.desc.about,
          'Руководящий состав': t.nav.desc.management,
          'Партнеры и клиенты': t.nav.desc.clients,
          'Наша техника': t.nav.desc.fleet,
          'Типы контейнеров': t.nav.desc.containers,
          'Работа в компании': t.nav.desc.jobs,
          'Инструкция по сдаче отходов': t.nav.desc.howto,
          'Образовательная программа': t.nav.desc.kids,
          'Контактная информация': t.nav.desc.contacts,
          'Документы организации': t.nav.desc.companyDocs,
          'Законодательная база': t.nav.desc.legal,
          'Порядок заключения договора': t.nav.desc.contractOrder,
          'Строительные услуги': t.nav.desc.construction,
          'Строительные материалы': t.nav.desc.materials,
      };
      return map[key] || key;
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    router.push(`/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSubmenu = (title: string) => {
    setExpandedMobileMenus(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <header
      className={styles.header}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={styles.headerContainer}>
        {/* Left side placeholder */}
        <div></div>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navConfig.map((item) => (
            <div
              key={item.title}
              className={styles.navItem}
              onMouseEnter={() => setActiveMenu(item.title)}
            >
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`${styles.navButton} ${currentPath === item.path || activeMenu === item.title ? styles.navButtonActive : styles.navButtonDefault}`}
              >
                <div className={styles.cornerTL}></div>
                <div className={styles.cornerTR}></div>
                <div className={styles.cornerBL}></div>
                <div className={styles.cornerBR}></div>
                {getNavTitle(item.title)}
              </button>
            </div>
          ))}
        </nav>

        {/* Right side placeholder */}
        <div></div>
      </div>

      {/* Mega Menu Overlay */}
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
                  <h4 className={styles.supportTitle}>{t.header.support}</h4>
                  <p className={styles.supportDesc}>{t.header.supportDesc}</p>
                </div>
                <a href="tel:88662229110" className={styles.supportPhone}>
                  <div className={styles.supportPhoneIcon}>
                    <svg className={styles.supportPhoneIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" /></svg>
                  </div>
                  <span className={styles.supportPhoneNumber}>8 (8662) 22-91-10</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed} ${isDark ? styles.mobileMenuDark : styles.mobileMenuLight}`}>
        <div className={styles.mobileMenuContent}>
          <div className={`${styles.mobileMenuHeader} ${isDark ? styles.mobileMenuHeaderDark : styles.mobileMenuHeaderLight}`}>
            <h2 className={`${styles.mobileMenuTitle} ${isDark ? styles.mobileMenuTitleDark : styles.mobileMenuTitleLight}`}>
                Main Menu
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${styles.mobileMenuCloseButton} ${isDark ? styles.mobileMenuCloseButtonDark : styles.mobileMenuCloseButtonLight}`}
            >
              <svg className={styles.mobileMenuCloseIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className={styles.mobileMenuList}>
            {navConfig.map((item) => {
              const isExpanded = expandedMobileMenus.includes(item.title);
              return (
                <div key={item.title}>
                  <button
                    onClick={() => item.subItems ? toggleMobileSubmenu(item.title) : handleLinkClick(item.path)}
                    className={`${styles.mobileMenuItemButton} ${isDark ? styles.mobileMenuItemButtonDark : styles.mobileMenuItemButtonLight} ${currentPath === item.path ? styles.mobileMenuItemButtonActive : ''}`}
                  >
                    {getNavTitle(item.title)}
                    {item.subItems && (
                      <svg
                        className={`${styles.mobileMenuChevron} ${isExpanded ? styles.mobileMenuChevronExpanded : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                  {item.subItems && (
                    <div className={`${styles.mobileMenuSubmenu} ${isExpanded ? styles.mobileMenuSubmenuExpanded : styles.mobileMenuSubmenuCollapsed}`}>
                      {item.subItems.map((sub) => (
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
    </header>
  );
};
