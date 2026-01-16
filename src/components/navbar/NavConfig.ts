
export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  subItems?: { title: string; path: string; desc?: string; icon: string }[];
}

export const navConfig: NavItem[] = [
  {
    title: 'Жителям',
    path: 'fiz',
    subItems: [
      { title: 'Тарифы', path: 'tariffs', desc: 'Утвержденные цены на 2025 год', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { title: 'Оплата онлайн', path: 'payment', desc: 'Быстро и без комиссии', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { title: 'Договор ТКО', path: 'contract-fiz', desc: 'Заявка на подключение услуг', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { title: 'График вывоза', path: 'schedule', desc: 'Мониторинг спецтехники', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    ]
  },
  {
    title: 'Бизнесу',
    path: 'ur',
    subItems: [
      { title: 'Личный кабинет', path: 'lk-ur', desc: 'Электронный документооборот', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
      { title: 'Нормативы', path: 'docs', desc: 'Правовая база и приказы', icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
      { title: 'Контейнеры', path: 'containers', desc: 'Обустройство площадок', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    ]
  },
  {
    title: 'О компании',
    path: 'about',
    subItems: [
      { title: 'История', path: 'history', desc: 'Наш путь и достижения', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { title: 'Пресс-центр', path: 'press', desc: 'СМИ о нас и событиях', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { title: 'Карьера', path: 'jobs', desc: 'Станьте частью команды', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    ]
  },
  { title: 'Контакты', path: 'contacts' },
];
