import Link from "next/link";
import { FaChartLine, FaRecycle } from "react-icons/fa";
import styles from "./InfoSection.module.css";

export const InfoSection = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Monitoring Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <FaChartLine className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Мониторинг</h3>
                        </div>
                        <p className={styles.cardDescription}>
                            Отслеживайте статус вывоза отходов в режиме реального времени. Получайте уведомления о выполнении заявок и контролируйте качество услуг.
                        </p>
                        <Link href="/monitoring" className={styles.cardLink}>
                            Перейти к мониторингу
                            <span className={styles.linkIcon}>→</span>
                        </Link>
                    </div>

                    {/* Waste Separation Guide Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <FaRecycle className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Как разделять отходы</h3>
                        </div>
                        <p className={styles.cardDescription}>
                            Узнайте, как правильно сортировать мусор для переработки. Простые правила помогут сохранить окружающую среду и сделать наш регион чище.
                        </p>
                        <Link href="/guide/separate" className={styles.cardLink}>
                            Читать инструкцию
                            <span className={styles.linkIcon}>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
