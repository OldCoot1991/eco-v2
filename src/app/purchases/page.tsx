import styles from "./page.module.css";

export default function PurchasesPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Закупки</h1>
            <p className={styles.pageText}>Информация о закупках</p>
        </div>
    );
}
