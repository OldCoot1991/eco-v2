import styles from "../../page.module.css";

export default function BusinessMainPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Главная - Юр. лицам</h1>
            <p className={styles.pageText}>Главная страница для юридических лиц</p>
        </div>
    );
}
