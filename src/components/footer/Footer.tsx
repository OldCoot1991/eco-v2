import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { navConfig } from '../navbar/NavConfig';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
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
            Интеллектуальные решения для устойчивого развития.
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
                  {nav.title}
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
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className={styles.contactGrid}>
          <div className={styles.contactSection}>
            <h5 className={styles.contactTitle}>Адрес</h5>
            <p className={styles.contactContent}>
              360051, КБР, г. Нальчик,<br />
              ул. Пушкина, д. 33а/72
            </p>
          </div>
          <div className={styles.contactSection}>
            <h5 className={styles.contactTitle}>Горячая линия</h5>
            <p className={styles.contactContent}>
              Абонентская служба: <a href="tel:+78662229110" className={styles.contactLink}>8 (8662) 22-91-10</a><br />
              Противодействие коррупции: <a href="tel:+79094881686" className={styles.contactLink}>8 (909) 488-16-86</a>
            </p>
          </div>
          <div className={styles.contactSection}>
            <h5 className={styles.contactTitle}>Email</h5>
            <p className={styles.contactContent}>
              <a href="mailto:info@eco07.ru" className={styles.contactLink}>info@eco07.ru</a>
            </p>
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
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.622c2.03 0 3.678 1.648 3.678 3.678S14.03 11.978 12 11.978s-3.678-1.648-3.678-3.678S9.97 4.622 12 4.622zm6.36 14.969c-.414.414-1.086.414-1.5 0L12 14.731l-4.86 4.86c-.414.414-1.086.414-1.5 0-.414-.414-.414-1.086 0-1.5l4.86-4.86-4.86-4.86c-.414-.414-.414-1.086 0-1.5.414-.414 1.086-.414 1.5 0l4.86 4.86 4.86-4.86c.414-.414 1.086-.414 1.5 0 .414.414.414 1.086 0 1.5l-4.86 4.86 4.86 4.86c.414.414.414 1.086 0 1.5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} ООО «Экологистика». Все права защищены.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Приватность</Link>
            <Link href="/cookies" className={styles.bottomLink}>Cookies</Link>
            <Link href="/terms" className={styles.bottomLink}>Условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
