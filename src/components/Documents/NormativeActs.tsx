"use client";

import React from 'react';
import styles from './NormativeActs.module.css';
import { useTranslation } from "@/lib/hooks/useTranslation";

// We keep hrefs here, but titles will come from translation by index
const documentPaths = [
    "/docs/fz_188.pdf",           // 0
    "/docs/fz_89.pdf",            // 1
    "/docs/agreement_1.pdf",      // 2
    "/docs/agreement_2.pdf",      // 3
    "/docs/agreement_3.pdf",      // 4
    "/docs/resolution_354.pdf",   // 5
    "/docs/resolution_1156.pdf",  // 6
    "/docs/resolution_1133.pdf",  // 7
    "/docs/resolution_505.pdf",   // 8
    "/docs/resolution_484.pdf",   // 9
    "/docs/order_222.pdf",        // 10
    "/docs/order_204.pdf",        // 11
    "/docs/order_218.pdf",        // 12
    "/docs/order_154.pdf",        // 13
    "/docs/order_191.pdf",        // 14
    "/docs/order_193.pdf",        // 15
    "/docs/order197.pdf",         // 16
    "/docs/order199.pdf",         // 17
    "/docs/prikaz_213.pdf",       // 18
    "/docs/prikaz_214.pdf",       // 19
];

export default function NormativeActs() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle} suppressHydrationWarning>{t.documents.legal.title}</h1>
                    <p className={styles.pageText} suppressHydrationWarning>{t.documents.legal.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {documentPaths.map((href, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.indexNumber}>{t.documents.docNum} {index + 1}</div>
                                <h3 className={styles.cardTitle}>{t.documents.legal.list[index] || ""}</h3>
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
