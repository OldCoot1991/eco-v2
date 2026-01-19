import styles from "./jobs.module.css";
import Vacancies from "../../../components/Vacancies/Vacancies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вакансии | Экологистика - Работа региональном операторе КБР",
  description: "Работа в компании Экологистика. Открытые вакансии: водители мусоровозов, грузчики, кассиры, дворники. Стабильная зарплата, официальное трудоустройство в Нальчике и КБР.",
  openGraph: {
    title: "Вакансии в компании Экологистика | Работа в КБР",
    description: "Требуются водители, грузчики и другие специалисты. Присоединяйтесь к нашей команде!",
    locale: "ru_RU",
    type: "website",
  },
};

const VACANCIES_DATA = [
    {
        title: "Водитель мусоровоза",
        salary: "70000 RUB",
        description: "Требуются водители категории С для работы на мусоровозах."
    },
    {
        title: "Помощник водителя мусоровоза (грузчик)",
        salary: "60000 RUB",
        description: "Погрузка твердых коммунальных отходов."
    },
    {
        title: "Кассир-операционист",
        salary: "33000 RUB",
        description: "Прием платежей от населения."
    },
    {
        title: "Дворник",
        salary: "40000 RUB",
        description: "Уборка территории."
    }
];

export default function CompanyJobsPage() {
    const jsonLd = VACANCIES_DATA.map(job => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": "2026-01-01",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "ООО «Экологистика»",
            "sameAs": "https://ecologistika.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Нальчик",
                "addressRegion": "Кабардино-Балкарская Республика",
                "addressCountry": "RU"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "RUB",
            "value": {
                "@type": "QuantitativeValue",
                "value": parseInt(job.salary),
                "unitText": "MONTH"
            }
        }
    }));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className={styles.pageContainer}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Вакансии</h1>
                    <p className={styles.pageText}>Присоединяйтесь к нашей команде!</p>
                </div>
                <Vacancies />
            </div>
        </>
    );
}
