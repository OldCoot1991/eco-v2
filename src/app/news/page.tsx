import styles from "../page.module.css";

export default function NewsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Новости</h1>
            <p className={styles.pageText}>Последние новости компании</p>
        </div>
    );
}
