"use client";

import { useState } from "react";

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
    <nav className="border-b border-foreground/5 bg-background/50">
      <div className="container mx-auto px-4">
        <ul className="flex items-center gap-8 py-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href || "#"}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground flex items-center gap-1"
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
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
                  className={`absolute left-0 top-full pt-2 w-48 bg-background border border-foreground/10 rounded shadow-lg transition-all duration-200 ${
                    openMenu === item.label
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {item.submenu.map((subitem) => (
                    <li key={subitem.href}>
                      <a
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors first:rounded-t last:rounded-b"
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
