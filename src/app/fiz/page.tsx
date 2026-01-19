import styles from "../page.module.css";

export default function FizPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Физическим лицам</h1>
            <p className={styles.pageText}>Информация для физических лиц</p>
        </div>
    );
}
