"use client";

import styles from "./BusinessSteps.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const BusinessSteps = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: "01",
            title: t.businessSteps.prepareDocs,
            description: t.businessSteps.prepareDocsDesc
        },
        {
            number: "02",
            title: t.businessSteps.fillApp,
            description: t.businessSteps.fillAppDesc
        },
        {
            number: "03",
            title: t.businessSteps.sendToUs,
            description: t.businessSteps.sendToUsDesc
        },
        {
            number: "04",
            title: t.businessSteps.getContract,
            description: t.businessSteps.getContractDesc
        }
    ];

    return (
        <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                    <div className={styles.number}>{step.number}</div>
                    <div className={styles.content}>
                        <h4 className={styles.title}>{step.title}</h4>
                        <p className={styles.description}>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
