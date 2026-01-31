"use client";
import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "../page.module.css";

export default function EcostroyContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.ecostroy.title} />
            <p className={styles.pageText}>{t.pages.ecostroy.subtitle}</p>
        </div>
    );
}
