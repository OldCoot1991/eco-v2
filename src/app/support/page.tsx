
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";;
import styles from "../page.module.css";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

export const metadata = {
    title: "Поддержка | Экологистика КБР",
    description: "Служба поддержки регионального оператора. Ответы на частые вопросы, контакты для связи и помощь абонентам.",
};


export default function SupportPage() {
    return (
        <main className="container min-h-screen pb-24 px-4">
            <BreadcrumbsLd
                items={[
                    { name: "Главная", item: "/" },
                    { name: "Поддержка", item: "/support" },
                ]}
            />
            <SectionTitle title="Поддержка" />
            <p className={styles.pageText}>Страница находится в разработке.</p>
        </main>
    );
}
