import { FaApple, FaGooglePlay, FaCreditCard } from "react-icons/fa";
import styles from "./AppPromo.module.css";

export const AppPromo = () => {
    return (
        <section className={styles.appPromo}>
            <div className={styles.container}>
                {/* Mobile App Section */}
                <div className={styles.mobileAppSection}>
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
                </div>

                {/* Partners/Payment Section */}
                <div className={styles.partnersGrid}>
                    <div className={styles.partnerCard}>
                        <div className={styles.partnerInfo}>
                            <div className={`${styles.partnerIcon} ${styles.partnerIconGreen}`}>
                                <FaCreditCard />
                            </div>
                            <div className={styles.partnerDetails}>
                                <h4 className={styles.partnerName}>Сбербанк Онлайн</h4>
                                <p className={styles.partnerDescription}>Оплата без комиссии</p>
                            </div>
                        </div>
                        <button className={styles.partnerButton}>
                            Оплатить
                        </button>
                    </div>
                    <div className={styles.partnerCard}>
                        <div className={styles.partnerInfo}>
                            <div className={`${styles.partnerIcon} ${styles.partnerIconYellow}`}>
                                <FaCreditCard />
                            </div>
                            <div className={styles.partnerDetails}>
                                <h4 className={styles.partnerName}>Т-Банк</h4>
                                <p className={styles.partnerDescription}>Быстрые платежи</p>
                            </div>
                        </div>
                        <button className={styles.partnerButton}>
                            Оплатить
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
