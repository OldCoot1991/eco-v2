import styles from "../../page.module.css";

export default function CompanyJobsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Вакансии</h1>
            <p className={styles.pageText}>Открытые вакансии в компании</p>
        </div>
    );
}
