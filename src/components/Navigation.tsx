"use client";

import { useState } from "react";
import styles from "./Navigation.module.css";

export interface SubmenuItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
}

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li
              key={item.label}
              className={styles.item}
              onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href || "#"}
                className={styles.link}
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className={styles.chevron}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {item.submenu && (
                <ul
                  className={`${styles.submenu} ${openMenu === item.label ? styles.submenuVisible : styles.submenuHidden}`}
                >
                  {item.submenu.map((subitem) => (
                    <li key={subitem.href} className={styles.submenuItem}>
                      <a
                        href={subitem.href}
                        className={styles.submenuLink}
                      >
                        {subitem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
