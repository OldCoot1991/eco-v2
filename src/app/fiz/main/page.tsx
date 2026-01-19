import styles from "../../page.module.css";

export default function FizMainPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Главная - Физ. лицам</h1>
            <p className={styles.pageText}>Главная страница для физических лиц</p>
        </div>
    );
}
