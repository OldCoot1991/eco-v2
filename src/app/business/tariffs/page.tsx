import Link from "next/link";
import TariffsJur from "@/components/tariffs/TariffsJur";
import styles from "../../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Тарифы для юридических лиц | Экологистика - Региональный оператор КБР",
  description:
    "Актуальные тарифы на услуги по обращению с ТКО для юридических лиц и ИП в Кабардино-Балкарской Республике на 2026 год. Приказ №214.",
  openGraph: {
    title: "Тарифы на вывоз мусора для бизнеса | Экологистика",
    description: "Тарифы регоператора для юрлиц в КБР. Скачать приказ №214.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function BusinessTariffsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Вывоз ТКО для юридических лиц",
    provider: {
      "@type": "Organization",
      name: "ООО «Экологистика»",
      url: "https://ecologistika.com",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Кабардино-Балкарская Республика",
    },
    description:
      "Услуги регионального оператора по обращению с твердыми коммунальными отходами для юридических лиц и индивидуальных предпринимателей.",
    serviceType: "Waste Management",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "356.73",
      priceValidUntil: "2026-12-31",
      description: "Тариф за 1 куб.м для Зоны №1 (с 01.01.2026)",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageContainer}>
        <TariffsJur />
      </div>
    </>
  );
}
