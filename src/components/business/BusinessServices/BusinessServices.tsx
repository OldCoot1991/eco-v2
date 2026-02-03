"use client";

import Link from "next/link";
import { FaTruck, FaFileContract, FaRecycle, FaIndustry, FaTrashAlt, FaLeaf } from "react-icons/fa";
import styles from "./BusinessServices.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const BusinessServices = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <FaFileContract />,
            title: t.businessServices.contract,
            description: t.businessServices.contractDesc,
            link: "/documents",
            color: "emerald"
        },
        {
            icon: <FaTruck />,
            title: t.businessServices.wasteRemoval,
            description: t.businessServices.wasteRemovalDesc,
            link: "/tariffs",
            color: "blue"
        },
        {
            icon: <FaRecycle />,
            title: t.businessServices.recycling,
            description: t.businessServices.recyclingDesc,
            link: "/business",
            color: "green"
        },
        {
            icon: <FaIndustry />,
            title: t.businessServices.industrial,
            description: t.businessServices.industrialDesc,
            link: "/contacts",
            color: "amber"
        },
        {
            icon: <FaTrashAlt />,
            title: t.businessServices.containers,
            description: t.businessServices.containersDesc,
            link: "/contacts",
            color: "purple"
        },
        {
            icon: <FaLeaf />,
            title: t.businessServices.ecoSupport,
            description: t.businessServices.ecoSupportDesc,
            link: "/support",
            color: "teal"
        }
    ];

    return (
        <div className={styles.grid}>
            {services.map((service, index) => (
                <Link href={service.link} key={index} className={`${styles.card} ${styles[service.color]}`}>
                    <div className={styles.iconWrapper}>
                        {service.icon}
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
