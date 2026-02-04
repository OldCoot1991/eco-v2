import { Metadata } from "next";
import { CompanyPageContent } from "@/widgets/company-content/CompanyPageContent";

export const metadata: Metadata = {
    title: "О компании | Экологистика КБР",
    description: "Информация о региональном операторе ООО «Экологистика». Наша миссия, руководство, лицензии и реквизиты. Работаем для чистоты Кабардино-Балкарии.",
};

export default function CompanyAboutPage() {
    return (
        <CompanyPageContent />
    );
}
