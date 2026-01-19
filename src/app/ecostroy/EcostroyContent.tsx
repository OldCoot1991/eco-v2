"use client";
import React from 'react';
import { useTranslation } from "@/lib/hooks/useTranslation";
import styles from "../page.module.css";

export default function EcostroyContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>{t.pages.ecostroy.title}</h1>
            <p className={styles.pageText}>{t.pages.ecostroy.subtitle}</p>
        </div>
    );
}
