import Contacts from "@/components/Contacts/Contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Экологистика - Офисы в КБР",
  description: "Контактная информация офисов ООО Экологистика в Кабардино-Балкарской Республике. Адреса, график работы и телефоны наших офисов в Нальчике, Баксане, Майском и других районах КБР.",
  openGraph: {
    title: "Контакты Экологистика | Офисы в КБР",
    description: "Адреса и телефоны офисов регионального оператора по обращению с ТКО в КБР.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function ContactsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ООО «Экологистика»",
        "url": "https://ecologistika.com",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-800-555-33-22",
            "contactType": "customer service",
            "areaServed": "RU",
            "availableLanguage": ["Russian"]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Contacts />
        </>
    );
}
