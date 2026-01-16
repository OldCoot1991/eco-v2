import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { navConfig } from '../navbar/NavConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-foreground/10 py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Logo Section */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo className="h-12 w-auto" />
            </Link>
            <div>
              <h3 className="text-2xl font-black text-foreground tracking-tight uppercase">
                Эко<span className="text-emerald-500">логистика</span>
              </h3>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Интеллектуальные решения для устойчивого развития.
            </p>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded bg-foreground/5 border border-foreground/10 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {navConfig.slice(0, 3).map((nav) => (
            <div key={nav.title}>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground/50 mb-6">
                {nav.title}
              </h4>
              <ul className="space-y-3 text-sm font-medium text-foreground/70">
                {nav.subItems?.map((sub) => (
                  <li key={sub.title}>
                    <Link
                      href={sub.path}
                      className="hover:text-emerald-500 transition-colors"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-foreground/50 text-xs">
          <div>
            © {new Date().getFullYear()} ООО «Экологистика». Все права защищены.
          </div>
          <div className="flex gap-6">
            <button className="hover:text-foreground transition-colors">Приватность</button>
            <button className="hover:text-foreground transition-colors">Cookies</button>
            <button className="hover:text-foreground transition-colors">Условия</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
