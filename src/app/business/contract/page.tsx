import styles from "../../page.module.css";

export default function BusinessContractPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Договор</h1>
            <p className={styles.pageText}>Информация о договоре для юридических лиц</p>
        </div>
    );
}
