import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import { SectionTitle } from "@/components/ui/SectionTitle";


export const metadata = {
    title: "О компании | Экологистика КБР",
    description: "Информация о региональном операторе ООО «Экологистика». Наша миссия, руководство, лицензии и реквизиты. Работаем для чистоты Кабардино-Балкарии.",
};


export default function CompanyPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "О компании", item: "/company" },
                ]}
            />
            <SectionTitle title="О компании" />
            <p className={styles.pageText}>Информация о компании Экологистика</p>
        </div>
    );
}
