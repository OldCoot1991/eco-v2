import styles from "../../page.module.css";

export default function CompanyFleetPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Наш автопарк</h1>
            <p className={styles.pageText}>Информация об автопарке компании</p>
        </div>
    );
}
