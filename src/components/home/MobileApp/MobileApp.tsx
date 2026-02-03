import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./MobileApp.module.css";
import { StoreButton } from "@/components/ui/StoreButton/StoreButton";

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
                        <StoreButton
                            icon={FaApple}
                            label="Download on"
                            title="App Store"
                            variant="primary"
                            href="#" // Placeholder or actual link
                        />
                        <StoreButton
                            icon={FaGooglePlay}
                            label="Get it on"
                            title="Google Play"
                            variant="secondary"
                            href="#" // Placeholder or actual link
                        />
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
