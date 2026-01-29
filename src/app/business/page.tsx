import styles from "../page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";


export const metadata = {
    title: "Юридическим лицам | Экологистика КБР",
    description: "Информация для юридических лиц и ИП. Заключение договоров на вывоз ТКО, тарифы, нормативы накопления отходов в Кабардино-Балкарии.",
};


export default function BusinessPage() {
    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Юридическим лицам", item: "/business" },
                ]}
            />
            <h1 className={styles.pageTitle}>Юридическим лицам</h1>
            <p className={styles.pageText}>Информация для юридических лиц</p>
        </div>
    );
}
