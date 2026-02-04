"use client";

import React from 'react';
import styles from './ConstructionContent.module.css';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import { Icons, serviceCategories } from './constructionData';
import { SectionTitle } from "@/shared/ui/SectionTitle";

export default function ConstructionContent() {
    const { t } = useTranslation();

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={t.nav.construction.title}
                subtitle={t.nav.construction.subtitle}
            />

            <div className={styles.grid}>
                {serviceCategories.map((category, index) => {
                    const Icon = Icons[category.iconKey];
                    const service = t.nav.construction[category.itemsKey as keyof typeof t.nav.construction] as { title: string; items: string[] };

                    return (
                        <div key={index} className={styles.card} style={{ animationDelay: `${index * 100}ms` }}>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <ul className={styles.cardList}>
                                {service.items.map((item: string, idx: number) => (
                                    <li key={idx} className={styles.cardListItem}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
