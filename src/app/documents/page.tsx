import styles from "../page.module.css";

export default function DocumentsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Документы</h1>
            <p className={styles.pageText}>Документация компании</p>
        </div>
    );
}
