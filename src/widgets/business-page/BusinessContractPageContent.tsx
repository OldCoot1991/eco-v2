"use client";

import React from 'react';
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import styles from "@/app/page.module.css";
import localStyles from "./BusinessContractPageContent.module.css";
import BreadcrumbsLd from "@/shared/seo/BreadcrumbsLd";
import { BusinessSteps } from "@/widgets/business-steps/BusinessSteps";
import { FaFileDownload, FaEnvelopeOpenText, FaMapMarkerAlt, FaDownload, FaPhoneVolume } from "react-icons/fa";
import { ContractModalTrigger } from "@/features/contract-modal-trigger/ContractModalTrigger";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export const BusinessContractPageContent = () => {
    const { t } = useTranslation();
    const bc = t.businessContract;

    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: t.nav.items.main, item: "/" },
                    { name: t.nav.business, item: "/business" },
                    { name: t.nav.items.contract, item: "/business/contract" },
                ]}
            />
            <SectionTitle title={bc.title} />

            {/* Legal Basis Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.subtitle}</h3>
                <div className={styles.cardBox}>
                    <p className={styles.pageText} style={{ marginBottom: '1.5rem' }}>
                        {bc.legalBasis}
                    </p>
                    <p className={styles.pageText} style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: bc.legalBasis2 }}>
                    </p>
                </div>
            </div>

            {/* Contract Form Trigger */}
            <div className={styles.section} id="form">
                <ContractModalTrigger />
            </div>

            {/* Required Documents Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.documents.title}</h3>
                <div className={styles.combinedGrid}>
                    {/* For Legal Entities */}
                    <div className={styles.cardBox}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>{bc.documents.legal.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {bc.documents.legal.list.map((item: string, i: number) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--foreground)' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Entrepreneurs */}
                    <div className={styles.cardBox}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>{bc.documents.entrepreneur.title}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {bc.documents.entrepreneur.list.map((item: string, i: number) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--foreground)' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Same Steps */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.stepsTitle}</h3>
                <BusinessSteps />
            </div>

            {/* Downloads Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.download.title}</h3>
                <div className={localStyles.downloadGrid}>
                    <a href="/documents/application_form.pdf" download className={localStyles.downloadCard}>
                        <div className={localStyles.iconWrapper}>
                            <FaFileDownload />
                        </div>
                        <div className={localStyles.fileDetails}>
                            <div className={localStyles.fileName}>{bc.download.appForm || "Заявка на заключение договора"}</div>
                            <div className={localStyles.fileMeta}>PDF, 256 KB</div>
                        </div>
                        <div className={localStyles.downloadAction}>
                            <FaDownload />
                        </div>
                    </a>

                    <a href="/documents/contract_template.docx" download className={localStyles.downloadCard}>
                        <div className={localStyles.iconWrapper}>
                            <FaFileDownload />
                        </div>
                        <div className={localStyles.fileDetails}>
                            <div className={localStyles.fileName}>{bc.download.template || "Типовой договор"}</div>
                            <div className={localStyles.fileMeta}>DOCX, 120 KB</div>
                        </div>
                        <div className={localStyles.downloadAction}>
                            <FaDownload />
                        </div>
                    </a>
                </div>
            </div>

            {/* Contacts Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.contacts.title}</h3>
                <div className={localStyles.contactsBox}>
                    <div className={localStyles.contactItem}>
                        <div className={`${localStyles.contactIcon} ${localStyles.iconAddress}`}><FaMapMarkerAlt /></div>
                        <div className={localStyles.contactInfo}>
                            <div className={localStyles.contactLabel}>{bc.contacts.address || "Адрес"}</div>
                            <div className={localStyles.contactValue}>{bc.contacts.addressValue}</div>
                        </div>
                    </div>
                    <div className={localStyles.contactItem}>
                        <div className={`${localStyles.contactIcon} ${localStyles.iconPhone}`}><FaPhoneVolume /></div>
                        <div className={localStyles.contactInfo}>
                            <div className={localStyles.contactLabel}>{bc.contacts.phone || "Телефон"}</div>
                            <a href="tel:88005500000" className={localStyles.contactValue}>8 (800) 550-00-00 (доб. 2)</a>
                        </div>
                    </div>
                    <div className={localStyles.contactItem}>
                        <div className={`${localStyles.contactIcon} ${localStyles.iconEmail}`}><FaEnvelopeOpenText /></div>
                        <div className={localStyles.contactInfo}>
                            <div className={localStyles.contactLabel}>{bc.contacts.email || "Email"}</div>
                            <a href="mailto:info@ecologistika.com" className={localStyles.contactValue}>info@ecologistika.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
