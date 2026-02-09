import { Metadata } from "next";
import { BusinessFeedbackPageContent } from "@/widgets/business-feedback/BusinessFeedbackPageContent";
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
                <BusinessFeedbackPageContent />
            </main>
        </>
    );
}
