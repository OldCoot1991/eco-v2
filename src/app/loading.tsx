import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.pageText}>Загрузка...</p>
    </div>
  );
}
