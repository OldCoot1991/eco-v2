"use client";

import React from 'react';
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "@/app/page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import { BusinessSteps } from "@/components/business/BusinessSteps/BusinessSteps";
import { FaFileDownload, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ContractModalTrigger } from "@/components/business/ContractModalTrigger/ContractModalTrigger";
import { useTranslation } from "@/lib/hooks/useTranslation";

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
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
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
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
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
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '4px', border: '1px solid var(--border)' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '1.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '3rem', height: '3rem',
                                background: 'rgba(5, 150, 105, 0.1)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--primary)', fontSize: '1.5rem'
                            }}>
                                <FaFileDownload />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{bc.download.appForm}</h4>
                                <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: 0 }}>PDF, 256 KB</p>
                            </div>
                        </div>
                        <a href="/documents/application_form.pdf" download style={{
                            background: 'white', border: '1px solid var(--border)',
                            padding: '0.5rem 1rem', borderRadius: '4px',
                            color: 'var(--primary)', fontWeight: 500, textDecoration: 'none',
                            fontSize: '0.875rem', transition: 'all 0.2s'
                        }}>
                            {bc.download.button}
                        </a>
                    </div>

                    <div style={{
                        background: 'var(--card-bg)',
                        padding: '1.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '3rem', height: '3rem',
                                background: 'rgba(5, 150, 105, 0.1)',
                                borderRadius: '4px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--primary)', fontSize: '1.5rem'
                            }}>
                                <FaFileDownload />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem' }}>{bc.download.template}</h4>
                                <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: 0 }}>DOCX, 120 KB</p>
                            </div>
                        </div>
                        <a href="/documents/contract_template.docx" download style={{
                            background: 'white', border: '1px solid var(--border)',
                            padding: '0.5rem 1rem', borderRadius: '4px',
                            color: 'var(--primary)', fontWeight: 500, textDecoration: 'none',
                            fontSize: '0.875rem', transition: 'all 0.2s'
                        }}>
                            {bc.download.button}
                        </a>
                    </div>
                </div>
            </div>

            {/* Contacts Section */}
            <div className={styles.section}>
                <h3 className={styles.subtitle}>{bc.contacts.title}</h3>
                <div style={{
                    background: 'var(--card-bg)',
                    padding: '2rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaMapMarkerAlt /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>{bc.contacts.address}</p>
                            <p style={{ margin: 0, opacity: 0.8 }}>{bc.contacts.addressValue}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaPhoneAlt /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>{bc.contacts.phone}</p>
                            <a href="tel:88005500000" style={{ margin: 0, opacity: 0.8, color: 'inherit', textDecoration: 'none' }}>8 (800) 550-00-00 (доб. 2)</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '1.25rem' }}><FaEnvelope /></div>
                        <div>
                            <p style={{ fontWeight: 600, margin: 0 }}>{bc.contacts.email}</p>
                            <a href="mailto:info@ecologistika.com" style={{ margin: 0, opacity: 0.8, color: 'inherit', textDecoration: 'none' }}>info@ecologistika.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
