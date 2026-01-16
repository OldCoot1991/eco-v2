"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { navConfig } from './NavConfig';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, isDark, setIsDark }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    router.push(`/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="relative z-50 w-full bg-background/50 border-b border-foreground/10 backdrop-blur supports-[backdrop-filter]:bg-background/40"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Left side placeholder - logo is in header above */}
        <div></div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          {navConfig.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.title)}
            >
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`relative flex items-center gap-2 px-6 py-2 rounded text-base font-medium transition-all duration-300 cursor-pointer ${currentPath === item.path || activeMenu === item.title
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-emerald-600/70 dark:text-emerald-400/70 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
              >
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Top-right corner */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom-left corner */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bottom-right corner */}
                
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {item.title}
              </button>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden flex h-14 w-14 items-center justify-center rounded bg-slate-900 dark:bg-emerald-500 text-white shadow-xl"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <div
        className={`absolute left-0 right-0 top-full bg-background border-b border-foreground/10 shadow-md transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${activeMenu ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="container mx-auto px-10 py-16">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-10">
              {activeMenu && navConfig.find(n => n.title === activeMenu)?.subItems?.map((sub, idx) => (
                <button
                  key={sub.title}
                  onClick={() => handleLinkClick(sub.path)}
                  className="group flex items-center gap-8 text-left p-6 rounded hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 border-2 border-transparent hover:border-emerald-500/20 transition-all duration-500 animate-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${idx * 75}ms` }}
                >
                  <div className="w-12 h-12 rounded bg-emerald-500 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-500/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={sub.icon} /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {sub.title}
                    </div>
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
                      {sub.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="col-span-4 pl-16 border-l border-slate-200 dark:border-slate-800">
              <div className="p-10 rounded bg-slate-100 dark:bg-slate-800/50 space-y-8 relative overflow-hidden group/card">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">Support</span>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">Нужна помощь?</h4>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed uppercase tracking-wider">Ответим на любой вопрос за 5 минут.</p>
                </div>
                <a href="tel:88005553322" className="flex items-center gap-4 text-slate-900 dark:text-white group/link">
                  <div className="w-12 h-12 rounded bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center shadow-lg group-hover/link:bg-emerald-600 dark:group-hover/link:bg-emerald-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" /></svg>
                  </div>
                  <span className="text-lg font-black tracking-tight uppercase">8 800 555-33-22</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[110] bg-white dark:bg-[#020617] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-10 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-4xl font-black uppercase text-slate-900 dark:text-white tracking-tighter">Навигация</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-16 h-16 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-10 space-y-8">
            {navConfig.map((item) => (
              <div key={item.title} className="space-y-6">
                <button
                  onClick={() => !item.subItems && handleLinkClick(item.path)}
                  className={`w-full flex items-center justify-between p-8 rounded bg-slate-50 dark:bg-slate-900 text-2xl font-black uppercase tracking-tight ${currentPath === item.path ? 'text-emerald-500' : 'text-slate-800 dark:text-slate-200'}`}
                >
                  {item.title}
                  {item.subItems && <svg className="w-6 h-6 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>}
                </button>
                {item.subItems && (
                  <div className="grid grid-cols-1 gap-4 pl-4">
                    {item.subItems.map((sub) => (
                      <button key={sub.title} onClick={() => handleLinkClick(sub.path)} className="flex items-center gap-6 w-full text-left p-6 rounded bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                        <div className="w-14 h-14 rounded bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={sub.icon} /></svg>
                        </div>
                        <div className="text-xl font-black uppercase tracking-tight">{sub.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-10 border-t border-slate-100 dark:border-slate-800">
            <button className="w-full bg-emerald-500 text-white h-24 rounded font-black uppercase tracking-[0.2em] text-sm">Вход</button>
          </div>
        </div>
      </div>
    </header>
  );
};
