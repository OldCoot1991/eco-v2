import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";


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
            <h1 className={styles.pageTitle}>О компании</h1>
            <p className={styles.pageText}>Информация о компании Экологистика</p>
        </div>
    );
}
