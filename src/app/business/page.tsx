import styles from "../page.module.css";

export default function BusinessPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Юридическим лицам</h1>
            <p className={styles.pageText}>Информация для юридических лиц</p>
        </div>
    );
}
