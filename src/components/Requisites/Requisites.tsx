"use client";

import React, { useState } from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import styles from "./Requisites.module.css";

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

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t.requisites.title}</h2>
            
            <div className={styles.grid}>
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.requisites.legalInfo}</h3>
                    <RequisiteItem label={t.requisites.orgName} value={t.requisites.orgNameValue} />
                    <RequisiteItem label={t.requisites.legalAddress} value={t.requisites.legalAddressValue} />
                    <RequisiteItem label={t.requisites.director} value={t.requisites.directorValue} />
                    <div className={styles.rowTwo}>
                        <RequisiteItem label={t.requisites.inn} value={t.requisites.innValue} allowCopy />
                        <RequisiteItem label={t.requisites.kpp} value={t.requisites.kppValue} allowCopy />
                    </div>
                    <RequisiteItem label={t.requisites.ogrn} value={t.requisites.ogrnValue} allowCopy />
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>{t.requisites.bankInfo}</h3>
                    <RequisiteItem label={t.requisites.bank} value={t.requisites.bankValue} />
                    <RequisiteItem label={t.requisites.account} value={t.requisites.accountValue} allowCopy />
                    <div className={styles.rowTwo}>
                        <RequisiteItem label={t.requisites.bik} value={t.requisites.bikValue} allowCopy />
                        <RequisiteItem label={t.requisites.bankInn} value={t.requisites.bankInnValue} allowCopy />
                    </div>
                    <RequisiteItem label={t.requisites.corrAccount} value={t.requisites.corrAccountValue} allowCopy />
                </div>
            </div>

        </div>
    );
}
