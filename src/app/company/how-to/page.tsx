'use client';

import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { WasteRules } from "@/features/waste-separation/ui/WasteRules";
import styles from "../../page.module.css";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export default function CompanyHowToPage() {
    const { t } = useTranslation();
    const rco = t.companyPage.rco;

    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title={rco.title}
                accent={rco.accent}
                subtitle={rco.subtitle}
            />
            
            <div className={styles.pageContent}>
                <WasteRules />
            </div>
        </div>
    );
}
