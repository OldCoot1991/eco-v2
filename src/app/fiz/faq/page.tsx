import styles from "../../page.module.css";

export default function FizFaqPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Часто задаваемые вопросы</h1>
            <p className={styles.pageText}>FAQ для физических лиц</p>
        </div>
    );
}
