import { Metadata } from "next";
import BusinessNormsContent from "./BusinessNormsContent";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export const metadata: Metadata = {
    title: "Нормативы накопления ТКО | ООО «Экологистика»",
    description: "Утвержденные нормативы накопления твердых коммунальных отходов для различных категорий объектов в Кабардино-Балкарской Республике.",
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
