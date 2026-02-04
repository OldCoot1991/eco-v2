"use client";

import React, { useState } from 'react';
import { FaTruck, FaFileContract, FaRecycle, FaIndustry, FaTrashAlt, FaLeaf } from "react-icons/fa";
import styles from "./BusinessServices.module.css";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import { ServiceCard } from "@/shared/ui/ServiceCard/ServiceCard";

export const BusinessServices = () => {
    const { t } = useTranslation();
    const [activeService, setActiveService] = useState<string | null>(null);

    const services = [
        {
            id: 'contract',
            icon: FaFileContract,
            title: t.businessServices.contract,
            description: t.businessServices.contractDesc,
            link: "/documents",
            color: "emerald"
        },
        {
            id: 'wasteRemoval',
            icon: FaTruck,
            title: t.businessServices.wasteRemoval,
            description: t.businessServices.wasteRemovalDesc,
            link: "/tariffs",
            color: "blue"
        },
        {
            id: 'recycling',
            icon: FaRecycle,
            title: t.businessServices.recycling,
            description: t.businessServices.recyclingDesc,
            link: "/business",
            color: "green"
        },
        {
            id: 'industrial',
            icon: FaIndustry,
            title: t.businessServices.industrial,
            description: t.businessServices.industrialDesc,
            link: "/contacts",
            color: "amber"
        },
        {
            id: 'containers',
            icon: FaTrashAlt,
            title: t.businessServices.containers,
            description: t.businessServices.containersDesc,
            link: "/contacts",
            color: "purple"
        },
        {
            id: 'ecoSupport',
            icon: FaLeaf,
            title: t.businessServices.ecoSupport,
            description: t.businessServices.ecoSupportDesc,
            link: "/support",
            color: "teal"
        }
    ];

    const toggleService = (id: string) => {
        setActiveService(prev => prev === id ? null : id);
    };

    return (
        <div className={styles.grid}>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                    actionText="Подробнее"
                    variant="glass"
                    color={service.color}
                    isExpanded={activeService === service.id}
                    onClick={() => toggleService(service.id)}
                />
            ))}
        </div>
    );
};
