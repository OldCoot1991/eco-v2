'use client';

import React from 'react';
import styles from './ManagementContent.module.css';
import { useTranslation } from '@/shared/lib/hooks/useTranslation';
import { FaUserTie } from 'react-icons/fa';
import { SectionTitle } from '@/shared/ui/SectionTitle';

export default function ManagementContent() {
    const { t } = useTranslation();

    const managementTeam = [
        {
            role: t.management.roles.ceo.title,
            name: t.management.roles.ceo.name,
        },
        {
            role: t.management.roles.director.title,
            name: t.management.roles.director.name,
        },
        {
            role: t.management.roles.deputyFinance.title,
            name: t.management.roles.deputyFinance.name,
        },
        {
            role: t.management.roles.deputyServices.title,
            name: t.management.roles.deputyServices.name,
        },
        {
            role: t.management.roles.deputyAutomation.title,
            name: t.management.roles.deputyAutomation.name,
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={t.management.title}
                subtitle={t.management.subtitle}
                size="small"
            />

            <div className={styles.grid}>
                {managementTeam.map((person, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.decoration} />
                        <div className={styles.iconWrapper}>
                            <FaUserTie />
                        </div>
                        <h3 className={styles.name}>{person.name}</h3>
                        <p className={styles.role}>{person.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
