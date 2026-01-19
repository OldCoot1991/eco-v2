"use client";

import React from 'react';
import styles from './NormativeActs.module.css';
import { useTranslation } from "@/lib/hooks/useTranslation";

const documentPaths = [
    "/docs/application_contract.docx",       // 0
    "/docs/standard_contract.docx",          // 1
    "/docs/standard_contract_bo.docx",       // 2
    "/docs/standard_contract_ip.docx",       // 3
    "/docs/standard_contract_jur.docx",      // 4
];

export default function ContractDocs() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle} suppressHydrationWarning>{t.documents.contract.title}</h1>
                    <p className={styles.pageText} suppressHydrationWarning>{t.documents.contract.subtitle}</p>
                </div>

                {/* Notification Link */}
                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '2rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                }}>
                    <a 
                        href="/docs/notification_of_changes.pdf" 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                            color: '#dc2626',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            textDecoration: 'none'
                        }}
                    >
                        {t.documents.contract.notification}
                    </a>
                </div>

                <div className={styles.grid}>
                    {documentPaths.map((href, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.indexNumber}>{t.documents.docNum} {index + 1}</div>
                                <h3 className={styles.cardTitle}>{t.documents.contract.list[index] || ""}</h3>
                            </div>
                            <div className={styles.cardActions}>
                                <a 
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`${styles.button} ${styles.viewButton}`}
                                    aria-label={t.documents.view}
                                >
                                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    {t.documents.view}
                                </a>
                                <a 
                                    href={href} 
                                    download
                                    className={`${styles.button} ${styles.downloadButton}`}
                                    aria-label={t.documents.download}
                                >
                                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {t.documents.download}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
