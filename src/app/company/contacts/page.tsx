import Contacts from "@/components/Contacts/Contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты ООО «Экологистика» - Офисы в Нальчике и КБР | Адреса, Телефоны, График работы",
  description: "Контактная информация всех офисов регионального оператора ООО «Экологистика» в Кабардино-Балкарской Республике: Нальчик, Баксан, Прохладный, Майский, Терек и другие районы. Адреса, телефоны, график работы абонентских служб.",
  keywords: [
    "контакты Экологистика",
    "офисы Экологистика КБР",
    "адреса офисов Нальчик",
    "телефон регионального оператора",
    "абонентская служба ТКО",
    "график работы офисов",
    "офис в Баксане",
    "офис в Прохладном",
    "офис в Майском",
    "контакты регионального оператора КБР"
  ],
  openGraph: {
    title: "Контакты ООО «Экологистика» - 14 офисов в КБР",
    description: "Найдите ближайший офис регионального оператора по обращению с ТКО: адреса, телефоны и график работы всех офисов в Кабардино-Балкарской Республике",
    type: "website",
    locale: "ru_RU",
    siteName: "Экологистика",
  },
  twitter: {
    card: "summary",
    title: "Контакты ООО «Экологистика» | Офисы в КБР",
    description: "14 офисов в Кабардино-Балкарской Республике. Адреса, телефоны, график работы",
  },
  alternates: {
    canonical: "/company/contacts",
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

export default function ContactsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ООО «Экологистика»",
        "alternateName": "Экологистика",
        "url": "https://ecologistika.ru",
        "logo": "https://ecologistika.ru/logo.png",
        "description": "Региональный оператор по обращению с твердыми коммунальными отходами в Кабардино-Балкарской Республике",
        "telephone": "+7-8662-22-91-10",
        "email": "info@ecologistika.ru",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Пушкина, д. 33А/72, оф. 335",
            "addressLocality": "Нальчик",
            "addressRegion": "Кабардино-Балкарская Республика",
            "postalCode": "360051",
            "addressCountry": "RU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.4981",
            "longitude": "43.6189"
        },
        "areaServed": {
            "@type": "State",
            "name": "Кабардино-Балкарская Республика"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+7-8662-22-91-10",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": ["Russian"],
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                }
            },
            {
                "@type": "ContactPoint",
                "telephone": "+7-8662-22-91-10",
                "contactType": "customer support",
                "areaServed": "RU",
                "availableLanguage": ["Russian"]
            }
        ],
        "location": [
            {
                "@type": "Place",
                "name": "Офис в Нальчике (пр-т. Кулиева)",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "пр-т. Кулиева, д. 2б",
                    "addressLocality": "Нальчик",
                    "addressRegion": "КБР",
                    "postalCode": "360000",
                    "addressCountry": "RU"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "17:00"
                }
            },
            {
                "@type": "Place",
                "name": "Офис в Баксане",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ул. Угнич, д. 11/2",
                    "addressLocality": "Баксан",
                    "addressRegion": "КБР",
                    "addressCountry": "RU"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                }
            },
            {
                "@type": "Place",
                "name": "Офис в Майском",
                "telephone": "+7-938-916-55-37",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ул. Ленина, д. 25",
                    "addressLocality": "Майский",
                    "addressRegion": "КБР",
                    "addressCountry": "RU"
                }
            },
            {
                "@type": "Place",
                "name": "Офис в Прохладном",
                "telephone": "+7-967-411-06-43",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ул. Свободы, д. 78/1",
                    "addressLocality": "Прохладный",
                    "addressRegion": "КБР",
                    "addressCountry": "RU"
                }
            },
            {
                "@type": "Place",
                "name": "Офис в Нарткале",
                "telephone": "+7-967-411-06-15",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ул. Кабардинская, д. 87",
                    "addressLocality": "Нарткала",
                    "addressRegion": "КБР",
                    "addressCountry": "RU"
                }
            }
        ],
        "sameAs": [
            "https://vk.com/ecologistika",
            "https://ok.ru/ecologistika"
        ]
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
