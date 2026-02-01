"use client";

import Link from "next/link";
import { FaTruck, FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa";
import styles from "./Services.module.css";
import { SectionTitle } from "../ui/SectionTitle";
import { useTranslation } from "@/lib/hooks/useTranslation";



export const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: FaTruck,
            title: t.home.services.cards.tko.title,
            description: t.home.services.cards.tko.desc,
            href: "/request-tko",
            iconClass: styles.iconEmerald,
            buttonText: t.home.services.cards.tko.button
        },
        {
            icon: FaExclamationTriangle,
            title: t.home.services.cards.report.title,
            description: t.home.services.cards.report.desc,
            href: "/report-tko",
            iconClass: styles.iconAmber,
            buttonText: t.home.services.cards.report.button
        },
        {
            icon: FaQuestionCircle,
            title: t.home.services.cards.support.title,
            description: t.home.services.cards.support.desc,
            href: "/support",
            iconClass: styles.iconBlue,
            buttonText: t.home.services.cards.support.button
        }
    ];

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <SectionTitle
                    title={t.home.services.title}
                    accent={t.home.services.accent}
                    subtitle={t.home.services.subtitle}
                />

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={`${styles.iconWrapper} ${service.iconClass}`}>
                                <service.icon className={styles.icon} />
                            </div>

                            <h3 className={styles.cardTitle}>
                                {service.title}
                            </h3>

                            <p className={styles.cardDescription}>
                                {service.description}
                            </p>

                            <Link href={service.href} className={styles.cardLink}>
                                {service.buttonText}
                                <svg
                                    className={styles.linkIcon}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
