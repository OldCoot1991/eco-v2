import { FaCreditCard } from "react-icons/fa";
import styles from "./AppPromo.module.css";
import { appStores, partners } from "./appPromoData";

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
                                {appStores.map((store, index) => {
                                    const Icon = store.icon;
                                    return (
                                        <button key={index} className={`${styles.appButton} ${styles[`appButton${store.variant}`]}`}>
                                            <Icon className={styles.appIcon} />
                                            <div className={styles.appButtonText}>
                                                <div className={styles.appButtonLabel}>{store.label}</div>
                                                <div className={styles.appButtonTitle}>{store.title}</div>
                                            </div>
                                        </button>
                                    );
                                })}
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
                    {partners.map((partner, index) => (
                        <div key={index} className={styles.partnerCard}>
                            <div className={styles.partnerInfo}>
                                <div className={`${styles.partnerIcon} ${styles[`partnerIcon${partner.iconColor}`]}`}>
                                    <FaCreditCard />
                                </div>
                                <div className={styles.partnerDetails}>
                                    <h4 className={styles.partnerName}>{partner.name}</h4>
                                    <p className={styles.partnerDescription}>{partner.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
