"use client";

import React from 'react';
import styles from './MaterialsContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getMaterialsData } from './materialsData';

export default function MaterialsContent() {
    const { t } = useTranslation();
    const materialsData = getMaterialsData(t);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <SectionTitle
                    title={t.nav.materials.title}
                    subtitle={t.nav.materials.subtitle}
                />
            </div>

            {materialsData.map((category, index) => (
                <div key={index} className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>{t.nav.materials.categories[category.titleKey as keyof typeof t.nav.materials.categories]}</h2>
                    <div className={styles.grid}>
                        {category.items.map((item, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.name}</h3>
                                    <div className={styles.cardFooter}>
                                        <Link href="/support?topic=materials" className={styles.button}>
                                            <span className={styles.buttonText}>{t.nav.materials.button}</span>
                                            <div className={styles.iconWrapper}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
