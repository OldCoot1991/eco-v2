"use client";
import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import styles from "../page.module.css";
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

export default function PurchasesContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.purchases.title} />
            <p className={styles.pageText}>{t.pages.purchases.subtitle}</p>
        </div>
    );
}
