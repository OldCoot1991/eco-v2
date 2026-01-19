"use client";

import styles from "./TariffsJur.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";



interface TimelineItem {
    label: string;
    date: string;
    price: string;
    isActive: boolean;
}

interface TariffZone {
    id: number;
    title: string;
    description?: string;
    iconClass: string;
    timeline: TimelineItem[];
}

const tariffZones: TariffZone[] = [
    {
        id: 1,
        title: "Зона №1",
        iconClass: styles.zoneIcon1,
        timeline: [
            {
                label: "Текущий",
                date: "до 30.09.2026",
                price: "356,73 ₽",
                isActive: true
            },
            {
                label: "Будущий",
                date: "с 01.10.2026",
                price: "378,33 ₽",
                isActive: false
            }
        ]
    },
    {
        id: 2,
        title: "Зона №2",
        iconClass: styles.zoneIcon2,
        timeline: [
            {
                label: "Текущий",
                date: "до 30.09.2026",
                price: "388,15 ₽",
                isActive: true
            },
            {
                label: "Будущий",
                date: "с 01.10.2026",
                price: "410,32 ₽",
                isActive: false
            }
        ]
    },
    {
        id: 3,
        title: "Зона №3",
        iconClass: styles.zoneIcon3,
        timeline: [
            {
                label: "Текущий",
                date: "до 30.09.2026",
                price: "358,43 ₽",
                isActive: true
            },
            {
                label: "Будущий",
                date: "с 01.10.2026",
                price: "383,21 ₽",
                isActive: false
            }
        ]
    }
];

const TariffsJur = () => {
    const { t } = useTranslation();
    const isEn = t.common.download === "Download";

    const tariffZones: TariffZone[] = [
        {
            id: 1,
            title: isEn ? "Zone #1" : "Зона №1",
            iconClass: styles.zoneIcon1,
            timeline: [
                {
                    label: t.tariffs.current,
                    date: isEn ? "until 30.09.2026" : "до 30.09.2026",
                    price: "356,73 ₽",
                    isActive: true
                },
                {
                    label: t.tariffs.future,
                    date: isEn ? "from 01.10.2026" : "с 01.10.2026",
                    price: "378,33 ₽",
                    isActive: false
                }
            ]
        },
        {
            id: 2,
            title: isEn ? "Zone #2" : "Зона №2",
            iconClass: styles.zoneIcon2,
            timeline: [
                {
                    label: t.tariffs.current,
                    date: isEn ? "until 30.09.2026" : "до 30.09.2026",
                    price: "388,15 ₽",
                    isActive: true
                },
                {
                    label: t.tariffs.future,
                    date: isEn ? "from 01.10.2026" : "с 01.10.2026",
                    price: "410,32 ₽",
                    isActive: false
                }
            ]
        },
        {
            id: 3,
            title: isEn ? "Zone #3" : "Зона №3",
            iconClass: styles.zoneIcon3,
            timeline: [
                {
                    label: t.tariffs.current,
                    date: isEn ? "until 30.09.2026" : "до 30.09.2026",
                    price: "358,43 ₽",
                    isActive: true
                },
                {
                    label: t.tariffs.future,
                    date: isEn ? "from 01.10.2026" : "с 01.10.2026",
                    price: "383,21 ₽",
                    isActive: false
                }
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.documentCard}>
                    <div className={styles.documentCardInner}>
                        <div className={styles.documentCardBg} />
                        <div className={styles.documentIcon}>
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className={styles.documentContent}>
                            <div className={styles.documentMeta}>
                                <span className={styles.documentBadge}>{t.tariffs.order}</span>
                                <span className={styles.documentDate}>{t.tariffs.date}</span>
                            </div>
                            <h3 className={styles.documentTitle}>{t.tariffs.orderFullTitle}</h3>
                            <p className={styles.documentSubtitle}>
                                {t.tariffs.orderSubtitle}
                            </p>
                        </div>
                        <a
                            href="/docs/prikaz_214.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadButton}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {t.tariffs.download}
                        </a>
                    </div>
                </div>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>{t.tariffs.zonesTitle}</h2>
                    <p className={styles.sectionSubtitle}>{t.tariffs.zonesSubtitle}</p>
                </div>

                <div className={styles.zoneGrid}>
                    {tariffZones.map((zone) => (
                        <div key={zone.id} className={styles.zoneCard}>
                            <div className={styles.zoneHeader}>
                                <div className={styles.zoneInfo}>
                                    <h3 className={styles.zoneTitle}>{zone.title}</h3>
                                </div>
                                <div className={`${styles.zoneIcon} ${zone.iconClass}`}></div>
                            </div>
                            <div className={styles.timeline}>
                                <div className={styles.timelineLine}></div>
                                
                                {zone.timeline.map((item, index) => (
                                    <div key={index} className={styles.timelineItem}>
                                        <div className={`${styles.timelineDot} ${item.isActive ? styles.timelineDotActive : ''}`}></div>
                                        <div className={styles.timelineContent}>
                                            <div className={styles.timelineInfo}>
                                                <span className={styles.timelineLabel}>{item.label}</span>
                                                <span className={styles.timelineDate}>{item.date}</span>
                                            </div>
                                            <div className={`${styles.timelinePrice} ${item.isActive ? styles.timelinePriceActive : ''}`}>
                                                {item.price}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TariffsJur;
