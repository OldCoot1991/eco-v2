import { Metadata } from "next";
import { CompanyPageContent } from "@/components/company/CompanyPageContent";

export const metadata: Metadata = {
    title: "О компании | Экологистика КБР",
    description: "Информация о региональном операторе ООО «Экологистика». Наша миссия, руководство, лицензии и реквизиты. Работаем для чистоты Кабардино-Балкарии.",
};

export default function CompanyPage() {
    return (
        <CompanyPageContent />
    );
}
