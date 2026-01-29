import { Metadata } from "next";
import BusinessNormsContent from "./BusinessNormsContent";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
    title: "Нормативы накопления ТКО 2026 | ООО «Экологистика»",
    description: "Действующие нормативы накопления твердых коммунальных отходов в Кабардино-Балкарской Республике. Таблицы расчетов для юридических лиц и бизнеса.",
    keywords: ["нормативы ТКО", "накопление отходов КБР", "расчет мусора", "тарифы экологии", "вывоз мусора бизнес"],
    openGraph: {
        title: "Нормативы накопления ТКО | Экологистика",
        description: "Официальные нормативы накопления ТКО для коммерческих и бюджетных организаций КБР.",
        url: "https://ecologistika.ru/business/norms",
        siteName: "Экологистика КБР",
        type: "article",
        locale: "ru_RU",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Нормативы накопления ТКО"
            }
        ]
    }
};

export default function BusinessNormsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Нормативы накопления ТКО",
        "description": "Утвержденные нормативы накопления твердых коммунальных отходов для юридических лиц и населения.",
        "author": {
            "@type": "Organization",
            "name": "ООО «Экологистика»"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ООО «Экологистика»",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ecologistika.ru/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ecologistika.ru/business/norms"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Бизнесу", item: "/business" },
                    { name: "Нормативы", item: "/business/norms" },
                ]}
            />
            <BusinessNormsContent />
        </>
    );
}
