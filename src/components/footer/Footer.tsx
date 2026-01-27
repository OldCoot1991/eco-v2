"use client";

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { navConfig } from '../navbar/NavConfig';
import styles from './Footer.module.css';
import { useTranslation } from '@/lib/hooks/useTranslation';

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

        {/* Contact Info Card */}
        <div className={styles.contactCard}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className={styles.contactContentWrapper}>
              <h5 className={styles.contactTitle}>{t.footer.addressTitle}</h5>
              <p className={styles.contactContent}>
                {t.footer.address.split('\\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
               <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className={styles.contactContentWrapper}>
              <h5 className={styles.contactTitle}>{t.footer.hotlineTitle}</h5>
              <p className={styles.contactContent}>
                <span className={styles.contactLabel}>{t.footer.subscriberService}:</span> <a href="tel:+78662229110" className={styles.contactLink}>8 (8662) 22-91-10</a><br />
                <span className={styles.contactLabel}>{t.footer.corruption}:</span> <a href="tel:+79094881686" className={styles.contactLink}>8 (909) 488-16-86</a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <svg className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className={styles.contactContentWrapper}>
              <h5 className={styles.contactTitle}>{t.footer.emailTitle}</h5>
              <p className={styles.contactContent}>
                <a href="mailto:info@eco07.ru" className={styles.contactLink}>info@eco07.ru</a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.socialSection}>
          <div className={styles.socialLinks}>
            <a
              href="https://t.me/ecologistika"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
              aria-label="Telegram"
            >
              <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
            <button
              className={styles.socialButton}
              aria-label="VK"
            >
              <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.39 14.11h-1.34c-.71 0-.93-.57-2.21-1.85-1.12-1.08-1.61-1.22-1.88-1.22-.39 0-.5.11-.5.64v1.68c0 .46-.14.73-1.34.73-2.2 0-4.65-1.34-6.37-3.83-2.58-3.71-3.28-6.51-3.28-7.08 0-.28.11-.54.64-.54h1.34c.48 0 .66.22.84.73.96 2.68 2.57 5.03 3.23 5.03.25 0 .36-.11.36-.74V8.16c-.09-1.31-.77-1.42-.77-1.88 0-.22.18-.44.48-.44h2.11c.4 0 .55.22.55.69v3.71c0 .4.18.55.29.55.25 0 .45-.15.91-.6 1.4-1.58 2.4-4.02 2.4-4.02.13-.28.35-.54.83-.54h1.34c.57 0 .69.29.57.69-.21.99-2.43 4.17-2.43 4.17-.21.34-.29.49 0 .88.21.28.88.86 1.33 1.38.83.94 1.47 1.72 1.64 2.27.18.54-.09.81-.63.81z" />
              </svg>
            </button>
            <button
              className={styles.socialButton}
              aria-label="OK"
            >
              <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.622c2.03 0 3.678 1.648 3.678 3.678S14.03 11.978 12 11.978s-3.678-1.648-3.678-3.678S9.97 4.622 12 4.622zm6.36 14.969c-.414.414-1.086.414-1.5 0L12 14.731l-4.86 4.86c-.414.414-1.086.414-1.5 0-.414-.414-.414-1.086 0-1.5l4.86-4.86-4.86-4.86c-.414-.414-.414-1.086 0-1.5.414-.414 1.086-.414 1.5 0l4.86 4.86 4.86-4.86c.414.414.414 1.086 0 1.5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>{t.footer.privacy}</Link>
            <Link href="/cookies" className={styles.bottomLink}>{t.footer.cookies}</Link>
            <Link href="/terms" className={styles.bottomLink}>{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
