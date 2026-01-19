"use client";

import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import Requisites from "@/components/Requisites/Requisites";
import styles from "./Contacts.module.css";

const LocationIcon = () => (
    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z" />
    </svg>
);

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle} suppressHydrationWarning>{t.contacts.title}</h1>
                <p className={styles.pageText} suppressHydrationWarning>{t.contacts.subtitle}</p>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {t.contacts.offices.map((office, index) => (
                        <div key={index} className={styles.card}>
                            <a href="#" className={styles.addressButton}>
                                <div className={styles.iconWrapper}>
                                    <LocationIcon />
                                </div>
                                <span className={styles.addressText}>{office.address}</span>
                            </a>
                            
                            <div className={styles.cardBody}>
                                <div className={styles.infoRow}>
                                    <ClockIcon />
                                    <div className={styles.schedule}>{office.schedule}</div>
                                </div>
                                
                                {office.phone && (
                                    <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} className={styles.phoneButton}>
                                        <PhoneIcon />
                                        <span className={styles.phoneText}>{office.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.contactInfoCard}>
                    <div className={styles.contactInfoItem}>
                        <div className={styles.label}>{t.requisites.postalAddr}</div>
                        <div className={styles.value}>{t.requisites.postalAddrValue}</div>
                    </div>
                    <div className={styles.contactInfoItem}>
                        <div className={styles.label}>{t.requisites.phone}</div>
                        <a href={`tel:${t.requisites.phoneValue.replace(/[^\d+]/g, '')}`} className={styles.bigPhoneLink}>
                            {t.requisites.phoneValue}
                        </a>
                    </div>
                </div>
            </div>

            <Requisites />
        </div>
    );
}
