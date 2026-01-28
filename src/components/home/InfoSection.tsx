"use client";

import Link from "next/link";
import { FaChartLine, FaRecycle } from "react-icons/fa";
import styles from "./InfoSection.module.css";
import { SectionTitle } from "../ui/SectionTitle";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const InfoSection = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.infoSection}>
            <div className={styles.container}>
                <SectionTitle
                    title={t.home.info.title}
                    accent={t.home.info.accent}
                    subtitle={t.home.info.subtitle}
                />
                <div className={styles.grid}>
                    {/* Monitoring Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <FaChartLine className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{t.home.info.monitoring.title}</h3>
                        </div>
                        <p className={styles.cardDescription}>
                            {t.home.info.monitoring.desc}
                        </p>
                        <Link href="/monitoring" className={styles.cardLink}>
                            {t.home.info.monitoring.button}
                            <span className={styles.linkIcon}>→</span>
                        </Link>
                    </div>

                    {/* Waste Separation Guide Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <FaRecycle className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{t.home.info.guide.title}</h3>
                        </div>
                        <p className={styles.cardDescription}>
                            {t.home.info.guide.desc}
                        </p>
                        <Link href="/guide/separate" className={styles.cardLink}>
                            {t.home.info.guide.button}
                            <span className={styles.linkIcon}>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
