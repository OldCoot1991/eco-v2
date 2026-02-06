import { Metadata } from "next";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { BusinessFeedbackForm } from "@/widgets/business-feedback/BusinessFeedbackForm";
import { HotlineInfo } from "@/widgets/hotline-info/HotlineInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Обратная связь для бизнеса | Экологистика",
    description:
        "Форма обратной связи для юридических лиц и индивидуальных предпринимателей.",
};

export default function BusinessFeedbackPage() {
    return (
        <>
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.content}>
                        <SectionTitle
                            title="Обратная связь"
                            subtitle="Если у вас возникли вопросы, заполните форму ниже"
                        />
                        <BusinessFeedbackForm />
                    </div>
                </div>
            </main>
            <HotlineInfo />
        </>
    );
}
