"use client";

import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./MobileApp.module.css";
import { StoreButton } from "@/components/ui/StoreButton/StoreButton";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const MobileApp = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.mobileAppSection}>
            <div className={styles.bgGradient} />

            <div className={styles.appGrid}>
                <div className={styles.appContent}>
                    <div className={styles.appBadge}>
                        {t.mobileApp.badge}
                    </div>
                    <h2 className={styles.appHeading}>
                        {t.mobileApp.title}
                    </h2>
                    <p className={styles.appDescription}>
                        {t.mobileApp.desc}
                    </p>

                    <div className={styles.appButtons}>
                        <StoreButton
                            icon={FaApple}
                            label={t.mobileApp.downloadOn}
                            title="App Store"
                            variant="primary"
                            href="#" // Placeholder or actual link
                        />
                        <StoreButton
                            icon={FaGooglePlay}
                            label={t.mobileApp.getItOn}
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
