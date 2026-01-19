import { Metadata } from "next";
import CompanyDocs from "@/components/Documents/CompanyDocs";

export const metadata: Metadata = {
  title: "Документы ООО «Экологистика» - Устав, Лицензии, Политики | Официальные документы",
  description: "Корпоративные документы ООО «Экологистика»: устав компании, лицензия на деятельность, политика обработки персональных данных, политика конфиденциальности, декларация соответствия условий труда и СОУТ.",
  keywords: [
    "документы Экологистика",
    "устав ООО",
    "лицензия регионального оператора",
    "политика персональных данных",
    "политика конфиденциальности",
    "СОУТ",
    "декларация условий труда",
    "корпоративные документы",
    "официальные документы компании"
  ],
  openGraph: {
    title: "Документы ООО «Экологистика» - Устав, Лицензии, Политики",
    description: "Официальные корпоративные документы регионального оператора по обращению с ТКО: устав, лицензии, политики безопасности и конфиденциальности",
    type: "website",
    locale: "ru_RU",
    siteName: "Экологистика",
  },
  twitter: {
    card: "summary",
    title: "Корпоративные документы ООО «Экологистика»",
    description: "Устав, лицензии, политики и декларации компании",
  },
  alternates: {
    canonical: "/documents/company",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
};

export default function CompanyDocumentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ООО «Экологистика»",
    "url": "https://ecologistika.ru",
    "logo": "https://ecologistika.ru/logo.png",
    "description": "Региональный оператор по обращению с твердыми коммунальными отходами в Кабардино-Балкарской Республике",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Пушкина, д. 33А/72",
      "addressLocality": "Нальчик",
      "addressRegion": "Кабардино-Балкарская Республика",
      "postalCode": "360051",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-8662-22-91-10",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": ["Russian"]
    },
    "publishingPrinciples": {
      "@type": "CreativeWork",
      "name": "Политика конфиденциальности и обработки персональных данных",
      "url": "https://ecologistika.ru/documents/company"
    },
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Обращение с твердыми коммунальными отходами"
      },
      {
        "@type": "Thing",
        "name": "Региональный оператор ТКО"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompanyDocs />
    </>
  );
}
