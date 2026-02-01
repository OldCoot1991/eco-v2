"use client";

import { useRef } from "react";
import styles from "./TariffsJur.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { DocumentCard } from "./DocumentCard";
import { TariffTable } from "./TariffTable";
import { TariffColumn, TariffRow } from "./types";

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

    const columns: TariffColumn[] = [
        {
            id: 'current',
            label: tariffZones[0].timeline[0].label,
            subLabel: tariffZones[0].timeline[0].date
        },
        {
            id: 'future',
            label: tariffZones[0].timeline[1].label,
            subLabel: tariffZones[0].timeline[1].date
        }
    ];

    const rows: TariffRow[] = tariffZones.map(zone => ({
        id: zone.id,
        header: {
            title: zone.title,
            description: zone.description,
            iconVariant: `zone${zone.id}` as 'zone1' | 'zone2' | 'zone3'
        },
        cells: [
            { value: zone.timeline[0].price, isFuture: zone.timeline[0].isActive === false },
            { value: zone.timeline[1].price, isFuture: zone.timeline[1].isActive === false }
        ]
    }));

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

            <TariffTable
                title={t.tariffs.zonesTitle}
                subtitle={t.tariffs.zonesSubtitle}
                caption={t.tariffs.zonesTitle}
                columns={columns}
                rows={rows}
            />
        </div>
    );
};

export default TariffsJur;
