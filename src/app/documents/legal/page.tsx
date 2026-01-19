import { Metadata } from "next";
import NormativeActs from "@/components/Documents/NormativeActs";

export const metadata: Metadata = {
  title: "Нормативные правовые акты по обращению с ТКО | Экологистика",
  description: "Полный перечень федеральных законов, постановлений правительства РФ и приказов, регулирующих обращение с твердыми коммунальными отходами в Кабардино-Балкарской Республике. Жилищный кодекс, ФЗ-89, соглашения и тарифы.",
  keywords: [
    "нормативные акты ТКО",
    "законы об отходах",
    "постановления правительства РФ",
    "жилищный кодекс",
    "ФЗ-89",
    "тарифы на вывоз мусора",
    "региональный оператор КБР",
    "законодательство ТКО",
    "правовая база отходов"
  ],
  openGraph: {
    title: "Нормативные правовые акты по обращению с ТКО",
    description: "Актуальная законодательная база по обращению с твердыми коммунальными отходами: федеральные законы, постановления, приказы и соглашения для КБР",
    type: "website",
    locale: "ru_RU",
    siteName: "Экологистика",
  },
  twitter: {
    card: "summary_large_image",
    title: "Нормативные правовые акты по ТКО | Экологистика",
    description: "Полный перечень законов и нормативных актов по обращению с твердыми коммунальными отходами",
  },
  alternates: {
    canonical: "/documents/legal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LegalDocumentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Нормативные правовые акты по обращению с ТКО",
    "description": "Законодательная база и нормативные документы, регулирующие обращение с твердыми коммунальными отходами",
    "provider": {
      "@type": "Organization",
      "name": "ООО «Экологистика»",
      "url": "https://ecologistika.ru"
    },
    "about": {
      "@type": "Thing",
      "name": "Твердые коммунальные отходы",
      "description": "Законодательное регулирование обращения с ТКО"
    },
    "hasPart": [
      {
        "@type": "DigitalDocument",
        "name": "Жилищный кодекс Российской Федерации",
        "encodingFormat": "application/pdf",
        "about": "Основной законодательный акт, регулирующий жилищные отношения"
      },
      {
        "@type": "DigitalDocument",
        "name": "Федеральный закон №89-ФЗ об отходах производства и потребления",
        "encodingFormat": "application/pdf",
        "about": "Базовый закон об обращении с отходами"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NormativeActs />
    </>
  );
}
