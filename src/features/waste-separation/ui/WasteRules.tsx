'use client';

import React, { useState } from 'react';
import styles from './WasteRules.module.css';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { useTranslation } from '@/shared/lib/hooks/useTranslation';

export const WasteRules: React.FC = () => {
    const { t } = useTranslation();
    const rco = t.companyPage.rco;
    const [activeTab, setActiveTab] = useState(Object.keys(rco.data)[0]);
    
    const activeData = (rco.data as any)[activeTab];

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs}>
                {Object.keys(rco.tabs).map((key) => (
                    <button
                        key={key}
                        className={`${styles.tab} ${activeTab === key ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {(rco.tabs as any)[key]}
                    </button>
                ))}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{activeData.title}</h3>
                    <p className={styles.description}>{activeData.desc}</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>
                            <HiCheckCircle className={styles.acceptIcon} />
                            {rco.sections.accept}
                        </h4>
                        <div className={styles.tableContainer}>
                            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                <div className={styles.tableCell}>{rco.table.code}</div>
                                <div className={styles.tableCell}>{rco.table.material}</div>
                                <div className={styles.tableCell}>{rco.table.examples}</div>
                            </div>
                            {activeData.accept.map((item: any, idx: number) => (
                                <div key={idx} className={styles.tableRow}>
                                    <div className={`${styles.tableCell} ${styles.tableCellStrong}`}>{item.code}</div>
                                    <div className={styles.tableCell}>{item.name}</div>
                                    <div className={styles.tableCell}>{item.examples}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>
                            <HiXCircle className={styles.rejectIcon} />
                            {rco.sections.reject}
                        </h4>
                        <div className={styles.tableContainer}>
                            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                                <div className={styles.tableCell} style={{ gridColumn: activeData.reject[0].code ? 'span 1' : 'span 2' }}>
                                    {activeData.reject[0].code ? rco.table.code : rco.table.material}
                                </div>
                                {activeData.reject[0].code && <div className={styles.tableCell}>{rco.table.material}</div>}
                                <div className={styles.tableCell}>{rco.table.examples}</div>
                            </div>
                            {activeData.reject.map((item: any, idx: number) => (
                                <div key={idx} className={styles.tableRow} style={!item.code ? { gridTemplateColumns: '1.2fr 1.5fr' } : {}}>
                                    {item.code && <div className={`${styles.tableCell} ${styles.tableCellStrong}`}>{item.code}</div>}
                                    <div className={styles.tableCell}>{item.name}</div>
                                    <div className={styles.tableCell}>{item.examples || '—'}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.prepSection}>
                    <h4 className={styles.sectionTitle}>{rco.sections.preparation}</h4>
                    <div className={styles.prepGrid}>
                        {activeData.steps.map((step: string, idx: number) => (
                            <div key={idx} className={styles.prepCard}>
                                <div className={styles.prepNumber}>{idx + 1}</div>
                                <p className={styles.prepText}>{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
