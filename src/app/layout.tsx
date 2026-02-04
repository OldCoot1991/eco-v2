
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/shared/providers/StoreProvider";
import ThemeSync from "@/shared/providers/ThemeSync";
import styles from "./page.module.css";
import Header from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ecologistika.com"),
  title: {
    default: "Экологистика - Региональный оператор по обращению с ТКО в КБР | Нальчик",
    template: "%s | Экологистика КБР",
  },
  description: "Официальный сайт регионального оператора ООО «Экологистика». Услуги по вывозу мусора, обращению с ТКО и утилизации отходов в Нальчике и Кабардино-Балкарской Республике. График, тарифы, договоры.",
  keywords: ["Экологистика", "Нальчик", "КБР", "вывоз мусора", "ТКО", "региональный оператор", "утилизация отходов", "экология", "мусор", "вывоз ТБО"],
  openGraph: {
    title: "Экологистика - Чистота нашего родного края",
    description: "Региональный оператор по обращению с ТКО в Кабардино-Балкарии. Мы заботимся о чистоте Нальчика и всей республики.",
    url: "https://ecologistika.com",
    siteName: "Экологистика КБР",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Экологистика - Региональный оператор КБР",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Экологистика - Региональный оператор КБР",
    description: "Услуги по вывозу мусора и утилизации отходов в Нальчике и КБР.",
    images: ["/og-image.jpg"], // Use the same OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=YOUR_CODE_HERE", // Valid placeholder
    yandex: "yandex-verification=YOUR_CODE_HERE", // Valid placeholder
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
    "image": [
      "https://ecologistika.com/og-image.jpg",
      "https://ecologistika.com/logo.png"
    ],
    "description": "Региональный оператор по обращению с твердыми коммунальными отходами (ТКО) в Кабардино-Балкарской Республике.",
    "telephone": "+7-8662-22-91-10",
    "email": "info@eco07.ru",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+7-8662-22-91-10",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+7-965-499-23-44",
        "contactType": "sales",
        "areaServed": "RU",
        "availableLanguage": "Russian"
      }
    ],
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
      "https://vk.com/ecologistikakbr",
      "https://ecologistika.com"
    ]
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () { try { var t = localStorage.getItem('theme'); if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme:dark)').matches)) { document.documentElement.classList.add('dark') } } catch (e) { } })(); `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${sourceSerif.variable} ${styles.layoutBody} `}>
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
