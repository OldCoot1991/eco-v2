import styles from "../../page.module.css";

export default function CompanyClientsPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Наши клиенты</h1>
            <p className={styles.pageText}>Список клиентов компании</p>
        </div>
    );
}
