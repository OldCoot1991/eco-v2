"use client";

import { useRef } from "react";
import styles from "./TariffsJur.module.css";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { CustomScrollbar } from "@/components/ui/CustomScrollbar/CustomScrollbar";
import { DocumentCard } from "./DocumentCard";

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

const TariffsJur = () => {
    const { t } = useTranslation();
    const tableContainerRef = useRef<HTMLDivElement>(null);
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
            <DocumentCard
                badgeText={t.tariffs.order}
                dateText={t.tariffs.date}
                title={t.tariffs.orderFullTitle}
                subtitle={t.tariffs.orderSubtitle}
                downloadText={t.tariffs.download}
                fileUrl="/docs/prikaz_214.pdf"
            />

            <div>
                <SectionTitle
                    title={t.tariffs.zonesTitle}
                    subtitle={t.tariffs.zonesSubtitle}
                    size="small"
                />

                <div
                    className={styles.tableContainer}
                    ref={tableContainerRef}
                >
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>{t.tariffs.zonesTitle}</th>
                                <th className={styles.th}>
                                    <div>{tariffZones[0].timeline[0].label}</div>
                                    <div className={styles.thSub}>{tariffZones[0].timeline[0].date}</div>
                                </th>
                                <th className={styles.th}>
                                    <div>{tariffZones[0].timeline[1].label}</div>
                                    <div className={styles.thSub}>{tariffZones[0].timeline[1].date}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tariffZones.map((zone) => (
                                <tr key={zone.id} className={styles.tr}>
                                    <td className={styles.td}>
                                        <div className={styles.zoneCell}>
                                            <div className={`${styles.zoneIconMini} ${zone.iconClass}`}></div>
                                            <div className={styles.zoneName}>{zone.title}</div>
                                        </div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={styles.priceCell}>{zone.timeline[0].price}</div>
                                    </td>
                                    <td className={styles.td}>
                                        <div className={`${styles.priceCell} ${styles.futurePrice}`}>{zone.timeline[1].price}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <CustomScrollbar
                    containerRef={tableContainerRef}
                    className="mt-4 px-4 sm:block"
                />
            </div>
        </div>
    );
};

export default TariffsJur;
