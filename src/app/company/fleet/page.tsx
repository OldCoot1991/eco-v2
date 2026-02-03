"use client";

import styles from "./page.module.css";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { autoparkData } from "./data";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function CompanyFleetPage() {
    const { t } = useTranslation();
    const fleet = t.fleet || {};
    // Fallback for types or missing keys
    const vehicles: Record<string, string> = t.fleet?.vehicles || {};

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={fleet.title || "Наш"}
                accent={fleet.accent || "автопарк"}
                subtitle={fleet.subtitle || "Современная техника"}
            />

            <div className={styles.grid}>
                {autoparkData.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={item.img}
                                alt={vehicles[item.key] || ""}
                                className={styles.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{vehicles[item.key] || ""}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
