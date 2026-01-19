"use client";

import React from 'react';
import styles from './jobs.module.css';
import Vacancies from "@/components/Vacancies/Vacancies";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function JobsContent() {
    const { t } = useTranslation();
    
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>{t.jobs.title}</h1>
                <p className={styles.pageText}>{t.jobs.subtitle}</p>
            </div>
            <Vacancies />
        </div>
    );
}
