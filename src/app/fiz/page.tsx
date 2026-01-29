import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";


export const metadata = {
    title: "Частным лицам | Экологистика КБР",
    description: "Информация для физических лиц. Оплата услуг, график вывоза мусора, заключение договоров и тарифы для населения Кабардино-Балкарии.",
};


export default function FizPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Частным лицам", item: "/fiz" },
                ]}
            />
            <h1 className={styles.pageTitle}>Физическим лицам</h1>
            <p className={styles.pageText}>Информация для физических лиц</p>
        </div>
    );
}
