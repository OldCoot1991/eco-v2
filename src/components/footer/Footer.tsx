"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useTranslation } from '@/lib/hooks/useTranslation';
import Logo from '../ui/Logo/Logo';
import { navConfig } from '../Navbar/NavConfig';
import { bottomLinksConfig } from './footerData';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  // Helper to get translated nav title
  const getNavTitle = (key: string) => {
    // Map known Russian titles to translation keys
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

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Logo className={styles.logo} />
          </Link>
          <div>
            <h3 className={styles.companyName}>
              Эко<span className={styles.companyNameAccent}>логистика</span>
            </h3>
          </div>
          <p className={styles.tagline}>
            {t.footer.tagline}
          </p>
        </div>

        {/* Navigation Grid - All Sections - Hidden on mobile/tablet */}
        <div className={styles.navGrid}>
          {navConfig.map((nav) => (
            <div key={nav.title} className={styles.navSection}>
              <h4 className={styles.navTitle}>
                <Link
                  href={`/${nav.path}`}
                  className={styles.navTitleLink}
                >
                  {getNavTitle(nav.title)}
                </Link>
              </h4>
              {nav.subItems && (
                <ul className={styles.navList}>
                  {nav.subItems.map((sub) => (
                    <li key={sub.title} className={styles.navItem}>
                      <Link
                        href={`/${sub.path}`}
                        className={styles.navLink}
                      >
                        {getNavTitle(sub.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className={styles.bottomLinks}>
            {bottomLinksConfig.map((link, index) => (
              <Link key={index} href={link.href} className={styles.bottomLink}>
                {t.footer[link.labelKey]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
