import TariffsFiz from "@/components/tariffs/TariffsFiz";
import styles from "../../page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тарифы для населения (физических лиц) | Экологистика КБР",
  description: "Тарифы на вывоз мусора для населения в Нальчике и Кабардино-Балкарской Республике. Зоны обслуживания, нормативы накопления и стоимость услуг на 2026 год.",
  openGraph: {
    title: "Тарифы на вывоз ТКО для населения | Экологистика",
    description: "Сколько стоит вывоз мусора в 2026 году. Тарифы для жителей КБР.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function FizTariffsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Вывоз ТКО для населения",
    "provider": {
      "@type": "Organization",
      "name": "ООО «Экологистика»",
      "url": "https://ecologistika.com"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Кабардино-Балкарская Республика"
    },
    "serviceType": "Waste Management",
    "description": "Услуги регионального оператора по обращению с твердыми коммунальными отходами для физических лиц (населения).",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageContainer}>
        <TariffsFiz />
      </div>
    </>
  );
}
