import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./MobileApp.module.css";

export const MobileApp = () => {
    return (
        <section className={styles.mobileAppSection}>
            <div className={styles.bgGradient} />

            <div className={styles.appGrid}>
                <div className={styles.appContent}>
                    <div className={styles.appBadge}>
                        Все услуги в кармане
                    </div>
                    <h2 className={styles.appHeading}>
                        Мобильное приложение
                    </h2>
                    <p className={styles.appDescription}>
                        Оплачивайте услуги, подавайте заявки и следите за статусом выполнения в нашем удобном приложении.
                    </p>

                    <div className={styles.appButtons}>
                        <button className={`${styles.appButton} ${styles.appButtonPrimary}`}>
                            <FaApple className={styles.appIcon} />
                            <div className={styles.appButtonText}>
                                <div className={styles.appButtonLabel}>Download on</div>
                                <div className={styles.appButtonTitle}>App Store</div>
                            </div>
                        </button>
                        <button className={`${styles.appButton} ${styles.appButtonSecondary}`}>
                            <FaGooglePlay className={styles.appIcon} />
                            <div className={styles.appButtonText}>
                                <div className={styles.appButtonLabel}>Get it on</div>
                                <div className={styles.appButtonTitle}>Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={styles.appMockup}>
                    <div className={styles.phoneMockup}>
                        App Screenshot
                    </div>
                </div>
            </div>
        </section>
    );
};
