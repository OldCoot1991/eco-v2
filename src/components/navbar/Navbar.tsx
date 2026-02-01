"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from "@/lib/hooks";
import styles from './Navbar.module.css';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { navConfig } from './NavConfig';
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

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

  const getNavTitle = (key: string) => {
    const map: Record<string, string> = {
      'Физ. лицам': t.nav.fiz,
      'Бизнесу': t.nav.business,
      'Новости': t.nav.news,
      'О компании': t.nav.company,
      'Документы': t.nav.documents,
      'Закупки': t.nav.purchases,
      'Экострой': t.nav.ecostroy,
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

    const descMap: Record<string, string> = {
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
    return descMap[key] || key;
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    router.push(`/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleHeaderLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const handleHeaderEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <header
      className={styles.header}
      onMouseLeave={handleHeaderLeave}
      onMouseEnter={handleHeaderEnter}
    >
      <div className={styles.headerContainer}>
        <div></div>

        <nav className={styles.desktopNav}>
          {navConfig.map((item) => (
            <div
              key={item.title}
              className={styles.navItem}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                if (item.subItems && item.subItems.length > 0) {
                  setActiveMenu(item.title);
                } else {
                  setActiveMenu(null);
                }
              }}
            >
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`${styles.navButton} ${currentPath === item.path || activeMenu === item.title ? styles.navButtonActive : styles.navButtonDefault}`}
              >
                {['TL', 'TR', 'BL', 'BR'].map(corner => (
                  <div key={corner} className={styles[`corner${corner}` as keyof typeof styles]} />
                ))}
                {getNavTitle(item.title)}
              </button>
            </div>
          ))}
        </nav>

        <div></div>
      </div>

      <MegaMenu
        activeMenu={activeMenu}
        navConfig={navConfig}
        handleLinkClick={handleLinkClick}
        getNavTitle={getNavTitle}
        getNavDesc={getNavDesc}
        supportTitle={t.header.support}
        supportDesc={t.header.supportDesc}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDark={isDark}
        navConfig={navConfig}
        handleLinkClick={handleLinkClick}
        getNavTitle={getNavTitle}
      />
    </header>
  );
};
