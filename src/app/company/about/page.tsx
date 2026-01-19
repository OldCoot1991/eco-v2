import styles from "../../page.module.css";

export default function CompanyAboutPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>О нас</h1>
            <p className={styles.pageText}>Подробная информация о компании</p>
        </div>
    );
}
