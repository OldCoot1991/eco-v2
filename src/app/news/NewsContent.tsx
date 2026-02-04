"use client";
import React from 'react';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import styles from "../page.module.css";

export default function NewsContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <SectionTitle title={t.pages.news.title} />
            <p className={styles.pageText}>{t.pages.news.subtitle}</p>
        </div>
    );
}
