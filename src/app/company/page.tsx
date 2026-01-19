import styles from "../../page.module.css";

export default function CompanyPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>О компании</h1>
            <p className={styles.pageText}>Информация о компании Экологистика</p>
        </div>
    );
}
