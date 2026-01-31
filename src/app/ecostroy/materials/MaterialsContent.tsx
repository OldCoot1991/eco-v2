"use client";

import React from 'react';
import styles from './MaterialsContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function MaterialsContent() {
    const { t } = useTranslation();

    const materialsData = [
        {
            title: t.nav.materials.categories.rebar,
            items: [
                {
                    name: t.nav.materials.items.rebar12,
                    image: "/images/materials/armatura_riflenaya_a3_a500s_12_mm.webp"
                },
                {
                    name: t.nav.materials.items.fiberRebar12,
                    image: "/images/materials/armatura_stekloplastikovaya_bukhta_10_m_12_mm.webp"
                }
            ]
        },
        {
            title: t.nav.materials.categories.pipes,
            items: [
                {
                    name: t.nav.materials.items.pipe202,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_2_m_20kh2_.webp"
                },
                {
                    name: t.nav.materials.items.pipe204,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_4_m_20kh2_.webp"
                },
                {
                    name: t.nav.materials.items.pipe252,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_25_pn20_2_m_25kh3_.webp"
                },
                {
                    name: t.nav.materials.items.pipe322,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_2_m_32kh4_.webp"
                },
                {
                    name: t.nav.materials.items.pipe324,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_4_m_32kh4_.webp"
                },
                {
                    name: t.nav.materials.items.pipe404,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_40_pn20_4_m_40kh5_.webp"
                },
                {
                    name: t.nav.materials.items.pipe504,
                    image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_50_pn20_4_m_50kh6_.webp"
                },
                {
                    name: t.nav.materials.items.pipeNormal,
                    image: "/images/materials/truba_polipropilenovaya_valtec_pp_r_vtp_700_0020_20_pn20_4_m_20kh3_4_mm.webp"
                }
            ]
        }
    ];

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
                    <h2 className={styles.categoryTitle}>{category.title}</h2>
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
