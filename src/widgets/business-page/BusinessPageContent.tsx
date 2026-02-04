"use client";

import React from 'react';
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import styles from "@/app/page.module.css";
import BreadcrumbsLd from "@/shared/seo/BreadcrumbsLd";
import { BusinessServices } from "@/widgets/business-services/BusinessServices";
import { BusinessSteps } from "@/widgets/business-steps/BusinessSteps";
import Link from "next/link";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export const BusinessPageContent = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: t.nav.items.main, item: "/" },
                    { name: t.nav.business, item: "/business" },
                ]}
            />
            <SectionTitle title={t.nav.business} />

            <div className={styles.section}>
                <h3 className={styles.subtitle}>{t.businessPage.obligationTitle}</h3>
                <p className={styles.pageText} dangerouslySetInnerHTML={{ __html: t.businessPage.obligationText }} />
                <div className={styles.warningBox}>
                    <p className={styles.warningText}>
                        {t.businessPage.obligationWarning}
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>{t.businessPage.contractStepsTitle}</h3>
                <BusinessSteps />
            </div>

            <div className={styles.section}>
                <h3 className={styles.subtitle}>{t.businessPage.servicesTitle}</h3>
                <BusinessServices />
            </div>

            <div className={styles.combinedSection}>
                <div className={styles.combinedGrid}>
                    {/* Documents Column */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 className={styles.subtitle} style={{ marginBottom: 0 }}>{t.businessPage.documentsTitle}</h3>
                            <Link href="/documents" style={{ color: '#10b981', fontWeight: 600, textDecoration: 'none' }}>
                                {t.businessPage.allDocuments} &rarr;
                            </Link>
                        </div>
                        <p className={styles.pageText}>
                            {t.businessPage.documentsText}
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <a href="/documents" className={styles.link}>{t.businessPage.downloadApp}</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="/documents" className={styles.link}>{t.businessPage.stdContract}</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="/tariffs" className={styles.link}>{t.businessPage.tariffsNorms}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacts Column */}
                    <div>
                        <div className={styles.contactsCard}>
                            <h3 className={styles.subtitle} style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>{t.businessPage.contactsTitle}</h3>
                            <div className={styles.pageText} style={{ marginBottom: 0 }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>{t.businessPage.subDept}</strong>
                                    <span style={{ color: 'var(--foreground)', opacity: 0.9 }}>г. Нальчик, ул. Ленина, 57</span>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>{t.businessPage.phone}</strong>
                                    <a href="tel:+78000000000" style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: 600, textDecoration: 'none' }}>8 (800) 000-00-00</a>
                                </div>

                                <div>
                                    <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.25rem' }}>{t.businessPage.email}</strong>
                                    <a href="mailto:info@ecologistika.com" style={{ color: '#10b981', textDecoration: 'none' }}>info@ecologistika.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
