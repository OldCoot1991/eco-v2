import { Metadata } from "next";
import ContractDocs from "@/components/Documents/ContractDocs";

export const metadata: Metadata = {
  title: "Заключение договора на вывоз ТКО - Типовые договоры и заявки | Экологистика",
  description: "Типовые договоры на оказание услуг по обращению с твердыми коммунальными отходами для физических лиц, юридических лиц, ИП и бюджетных организаций. Скачайте заявку на заключение договора с региональным оператором.",
  keywords: [
    "договор на вывоз мусора",
    "типовой договор ТКО",
    "заявка на договор",
    "договор для физических лиц",
    "договор для юридических лиц",
    "договор для ИП",
    "договор для бюджетных организаций",
    "региональный оператор договор",
    "заключение договора ТКО",
    "форма договора на вывоз отходов"
  ],
  openGraph: {
    title: "Заключение договора на вывоз ТКО - Типовые формы",
    description: "Официальные типовые договоры и заявки на заключение договора с региональным оператором по обращению с ТКО для всех категорий потребителей",
    type: "website",
    locale: "ru_RU",
    siteName: "Экологистика",
  },
  twitter: {
    card: "summary",
    title: "Типовые договоры на вывоз ТКО | Экологистика",
    description: "Скачайте типовые формы договоров и заявок для заключения договора с региональным оператором",
  },
  alternates: {
    canonical: "/documents/contract",
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

export default function ContractPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Заключение договора на оказание услуг по обращению с ТКО",
    "description": "Услуга по заключению договора с региональным оператором на вывоз и утилизацию твердых коммунальных отходов",
    "provider": {
      "@type": "Organization",
      "name": "ООО «Экологистика»",
      "url": "https://ecologistika.ru",
      "telephone": "+7-8662-22-91-10",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Пушкина, д. 33А/72",
        "addressLocality": "Нальчик",
        "addressRegion": "Кабардино-Балкарская Республика",
        "postalCode": "360051",
        "addressCountry": "RU"
      }
    },
    "serviceType": "Обращение с твердыми коммунальными отходами",
    "areaServed": {
      "@type": "State",
      "name": "Кабардино-Балкарская Республика"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://ecologistika.ru/documents/contract",
      "serviceType": "Онлайн заявка"
    },
    "termsOfService": "https://ecologistika.ru/documents/contract",
    "offers": [
      {
        "@type": "Offer",
        "name": "Договор для физических лиц",
        "description": "Типовой договор на оказание услуг по обращению с ТКО для граждан"
      },
      {
        "@type": "Offer",
        "name": "Договор для юридических лиц",
        "description": "Типовой договор на оказание услуг по обращению с ТКО для организаций"
      },
      {
        "@type": "Offer",
        "name": "Договор для индивидуальных предпринимателей",
        "description": "Типовой договор на оказание услуг по обращению с ТКО для ИП"
      },
      {
        "@type": "Offer",
        "name": "Договор для бюджетных организаций",
        "description": "Типовой договор на оказание услуг по обращению с ТКО для бюджетных учреждений"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContractDocs />
    </>
  );
}
