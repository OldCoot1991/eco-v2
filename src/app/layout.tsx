import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import ThemeSync from "@/components/ThemeSync";
import Header from "@/components/Header";
import { Footer } from "@/components/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Экологистика - Региональный оператор по обращению с ТКО в КБР | Нальчик",
  description: "Официальный сайт регионального оператора ООО «Экологистика». Услуги по вывозу мусора, обращению с ТКО и утилизации отходов в Нальчике и Кабардино-Балкарской Республике. График, тарифы, договоры.",
  keywords: ["Экологистика", "Нальчик", "КБР", "вывоз мусора", "ТКО", "региональный оператор", "утилизация отходов", "экология", "мусор", "вывоз ТБО"],
  openGraph: {
    title: "Экологистика - Чистота нашего родного края",
    description: "Региональный оператор по обращению с ТКО в Кабардино-Балкарии. Мы заботимся о чистоте Нальчика и всей республики.",
    type: "website",
    locale: "ru_RU",
    siteName: "Экологистика КБР",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "name": "Экологистика",
    "alternateName": "Региональный оператор Экологистика КБР",
    "url": "https://ecologistika.com",
    "logo": "https://ecologistika.com/logo.png",
    "description": "Региональный оператор по обращению с твердыми коммунальными отходами (ТКО) в Кабардино-Балкарской Республике.",
    "telephone": "+7-8662-22-91-10",
    "email": "info@eco07.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кешокова, 72/33А",
      "addressLocality": "Нальчик",
      "addressRegion": "Кабардино-Балкарская Республика",
      "postalCode": "360051",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.481118",
      "longitude": "43.604008"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Кабардино-Балкарская Республика"
    },
    "sameAs": [
      "https://t.me/ecologistika07",
      "https://vk.com/ecologistikakbr"
    ]
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StoreProvider>
          <ThemeSync />
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
