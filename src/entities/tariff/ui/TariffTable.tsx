"use client";

import React, { useRef } from 'react';
import styles from './TariffTable.module.css';
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { CustomScrollbar } from "@/shared/ui/CustomScrollbar/CustomScrollbar";
import { TariffRow, TariffColumn } from './types';

interface TariffTableProps {
    columns: TariffColumn[];
    rows: TariffRow[];
    caption: string;
    title?: string;
    subtitle?: string;
}

export const TariffTable: React.FC<TariffTableProps> = ({
    columns,
    rows,
    caption,
    title,
    subtitle,
}) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            {title && (
                <SectionTitle
                    title={title}
                    subtitle={subtitle}
                    size="small"
                />
            )}

            <div className={styles.tableContainer} ref={tableContainerRef}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>{caption}</th>
                            {columns.map((col) => (
                                <th key={col.id} className={`${styles.th} ${col.className || ''}`}>
                                    <div>{col.label}</div>
                                    {col.subLabel && <div className={styles.thSub}>{col.subLabel}</div>}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} className={styles.tr}>
                                <td className={styles.td}>
                                    <div className={styles.zoneCell}>
                                        <div className={`${styles.zoneIconMini} ${styles[row.header.iconVariant]}`}></div>
                                        <div>
                                            <div className={styles.zoneName}>{row.header.title}</div>
                                            {row.header.description && (
                                                <div className={styles.zoneDescription}>{row.header.description}</div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                {row.cells.map((cell, idx) => (
                                    <td key={idx} className={styles.td}>
                                        <div className={`${styles.priceCell} ${cell.isFuture ? styles.futurePrice : ''} ${cell.className || ''}`}>
                                            {cell.value}
                                            {cell.subValue && <span className={styles.currency}>{cell.subValue}</span>}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CustomScrollbar
                containerRef={tableContainerRef}
                className={styles.scrollbarWrapper}
            />
        </div>
    );
};
