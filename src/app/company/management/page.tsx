import { Metadata } from "next";
import ManagementContent from "./ManagementContent";
import BreadcrumbsLd from "@/shared/seo/BreadcrumbsLd";

export const metadata: Metadata = {
    title: "Руководство ООО «Экологистика» | Генеральный директор и топ-менеджмент",
    description: "Информация о руководящем составе регионального оператора ООО «Экологистика». Генеральный директор и заместители по направлениям.",
};

export default function CompanyManagementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Руководство ООО «Экологистика»",
        "description": "Управляющая команда регионального оператора по обращению с ТКО.",
        "mainEntity": {
            "@type": "Organization",
            "name": "ООО «Экологистика»",
            "url": "https://ecologistika.ru",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Пушкина, д. 33а/72",
                "addressLocality": "г. Нальчик",
                "postalCode": "360051",
                "addressRegion": "Кабардино-Балкарская Республика",
                "addressCountry": "RU"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-989-640-05-23",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": "Russian"
            },
            "employee": [
                {
                    "@type": "Person",
                    "name": "Рустам Галиевич Кочесоков",
                    "jobTitle": "Генеральный директор",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "ООО «Экологистика»"
                    }
                },
                {
                    "@type": "Person",
                    "name": "Заурбек Каральчуевич Гедгагов",
                    "jobTitle": "Директор",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "ООО «Экологистика»"
                    }
                },
                {
                    "@type": "Person",
                    "name": "Ахмед Борисович Хапов",
                    "jobTitle": "Заместитель генерального директора по финансам",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "ООО «Экологистика»"
                    }
                },
                {
                    "@type": "Person",
                    "name": "Аслан Султанович Мурзаканов",
                    "jobTitle": "Заместитель генерального директора по реализации услуг",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "ООО «Экологистика»"
                    }
                },
                {
                    "@type": "Person",
                    "name": "Рамазан Резуанович Мурзаканов",
                    "jobTitle": "Заместитель генерального директора по автоматизации бизнес-процессов",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "ООО «Экологистика»"
                    }
                }
            ]
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
                    { name: "О компании", item: "/company" },
                    { name: "Руководство", item: "/company/management" },
                ]}
            />
            <ManagementContent />
        </>
    );
}
