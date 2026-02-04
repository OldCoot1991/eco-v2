"use client";

import React, { useState } from 'react';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import styles from "./Requisites.module.css";
import { legalInfoItems, bankInfoItems } from "./requisitesData";

const CopyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

interface RequisiteItemProps {
    label: string;
    value: string;
    allowCopy?: boolean;
}

const RequisiteItem: React.FC<RequisiteItemProps> = ({ label, value, allowCopy }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.item}>
            <div className={styles.label}>{label}</div>
            <div className={styles.valueWrapper}>
                <div className={styles.value}>{value}</div>
                {allowCopy && (
                    <button
                        className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
                        onClick={handleCopy}
                        title={copied ? "Скопировано" : "Копировать"}
                    >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default function Requisites() {
    const { t } = useTranslation();

    const renderItems = (items: typeof legalInfoItems) => {
        const result: React.ReactElement[] = [];
        let rowItems: typeof legalInfoItems = [];

        items.forEach((item, index) => {
            if (item.isRow) {
                rowItems.push(item);
                const nextItem = items[index + 1];
                if (!nextItem || !nextItem.isRow) {
                    result.push(
                        <div key={`row-${index}`} className={styles.rowTwo}>
                            {rowItems.map((rowItem, idx) => (
                                <RequisiteItem
                                    key={idx}
                                    label={t.requisites[rowItem.labelKey as keyof typeof t.requisites] as string}
                                    value={t.requisites[rowItem.valueKey as keyof typeof t.requisites] as string}
                                    allowCopy={rowItem.allowCopy}
                                />
                            ))}
                        </div>
                    );
                    rowItems = [];
                }
            } else {
                result.push(
                    <RequisiteItem
                        key={index}
                        label={t.requisites[item.labelKey as keyof typeof t.requisites] as string}
                        value={t.requisites[item.valueKey as keyof typeof t.requisites] as string}
                        allowCopy={item.allowCopy}
                    />
                );
            }
        });

        return result;
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t.requisites.title}</h2>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.requisites.legalInfo}</h3>
                    {renderItems(legalInfoItems)}
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.requisites.bankInfo}</h3>
                    {renderItems(bankInfoItems)}
                </div>
            </div>

        </div>
    );
}
