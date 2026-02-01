"use client";

import React from 'react';
import styles from './jobs.module.css';
import Vacancies from "@/components/vacancies/Vacancies";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function JobsContent() {
    const { t } = useTranslation();

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={t.jobs.title}
                subtitle={t.jobs.subtitle}
                size="small"
            />
            <Vacancies />
        </div>
    );
}
