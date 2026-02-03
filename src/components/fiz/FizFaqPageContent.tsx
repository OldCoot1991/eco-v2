"use client";

import React from 'react';
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import styles from "@/app/page.module.css";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const FizFaqPageContent = () => {
    const { t } = useTranslation();

    const faqItems = t.faq.items;

    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd
                items={[
                    { name: t.nav.items.main, item: "/" },
                    { name: t.nav.fiz, item: "/fiz" },
                    { name: t.nav.items.faq, item: "/fiz/faq" },
                ]}
            />
            <SectionTitle title={t.faq.title} />

            <div className={styles.section}>
                <Accordion items={faqItems} />
            </div>
        </div>
    );
};
