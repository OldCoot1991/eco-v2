'use client';

import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { KidsVideos } from "@/features/kids-rco/ui/KidsVideos";
import styles from "../../page.module.css";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export default function CompanyKidsPage() {
    const { t } = useTranslation();
    const kids = t.companyPage.kids;

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={kids.title}
                accent={kids.accent}
                subtitle={kids.subtitle}
            />
            
            <div className={styles.pageContent}>
                <KidsVideos />
            </div>
        </div>
    );
}
