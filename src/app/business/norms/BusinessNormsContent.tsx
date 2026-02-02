"use client";

import React, { useRef } from 'react';
import styles from './BusinessNormsContent.module.css';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CustomScrollbar } from '@/components/ui/CustomScrollbar/CustomScrollbar';

interface CategoryItemProps {
    category: {
        title: string;
        rows: {
            name: string;
            unit: string;
            m3: string | number;
            kg: string | number;
        }[];
    };
    index: number;
    t: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, index, t }) => {
    const tableContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div id={`category-${index}`} className={styles.categoryGroup}>
            <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
            </div>
            <div className={styles.tableWrapper} ref={tableContainerRef}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.colName}>{t.nav.businessNorms.table.category}</th>
                            <th className={styles.colUnit}>{t.nav.businessNorms.table.unit}</th>
                            <th className={styles.colValue}>{t.nav.businessNorms.table.normM3}</th>
                            <th className={styles.colValue}>{t.nav.businessNorms.table.normKg}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.rows.map((row: any, rIndex: number) => (
                            <tr key={rIndex}>
                                <td>{row.name}</td>
                                <td>{row.unit}</td>
                                <td className={styles.colValue}>{row.m3}</td>
                                <td className={styles.colValue}>{row.kg}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CustomScrollbar
                containerRef={tableContainerRef}
                className={styles.scrollbarWrapper}
            />
        </div>
    );
};

export default function BusinessNormsContent() {
    const { t } = useTranslation();

    // Mapping over categories array from translations
    const categories = t.nav.businessNorms.categories;

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={t.nav.businessNorms.title}
                subtitle={t.nav.businessNorms.subtitle}
                size="small"
            />

            <div className={styles.contentWrapper}>
                <div className={styles.mainContent}>
                    <section className={styles.infoCard}>
                        <p className={styles.infoText}>{t.nav.businessNorms.intro}</p>
                        <div className={styles.formulas}>
                            <div className={styles.formula}>{t.nav.businessNorms.formula1}</div>
                            <div className={styles.formula}>{t.nav.businessNorms.formula2}</div>
                        </div>
                    </section>

                    <div className={styles.categoriesSection}>
                        {categories.map((category, index) => (
                            <CategoryItem
                                key={index}
                                category={category}
                                index={index}
                                t={t}
                            />
                        ))}
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.stickyMenu}>
                        <h3 className={styles.menuTitle}>{t.nav.businessNorms.table.category}</h3>
                        <nav className={styles.anchorNav}>
                            {categories.map((category, index) => (
                                <a
                                    key={index}
                                    href={`#category-${index}`}
                                    className={styles.anchorLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(`category-${index}`)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                >
                                    {category.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
}
