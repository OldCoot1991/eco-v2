"use client";

import React from 'react';
import styles from './ConstructionContent.module.css';
import { useTranslation } from "@/lib/hooks/useTranslation";

// Icons as components for cleaner render
const Icons = {
    General: () => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    Forest: () => ( // Using as icon for Specialized/Ground works (Earth/Nature)
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Network: () => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    Road: () => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
    ),
    Tech: () => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    Linear: () => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    )
};

export default function ConstructionContent() {
    const services = [
        {
            title: "Общестроительные работы",
            icon: Icons.General,
            items: [
                "Земляные работы",
                "Каменные работы",
                "Монтаж строительных конструкций",
                "Возведение несущих и ограждающих конструкций",
                "Кровельные работы"
            ]
        },
        {
            title: "Инженерные сети",
            icon: Icons.Network,
            items: [
                "Сети электроснабжения и электроосвещения",
                "Сети водоснабжения и канализации",
                "Сети газоснабжения (всегда давления)",
                "Внутренние инженерные системы",
                "Капитальный ремонт и реконструкция сетей"
            ]
        },
        {
            title: "Транспортная инфраструктура",
            icon: Icons.Road,
            items: [
                "Строительство автомобильных дорог",
                "Устройство оснований и покрытий",
                "Защитные сооружения",
                "Обустройство дорог III-V категорий",
                "Строительство проезжей части улиц"
            ]
        },
        {
            title: "Монтаж оборудования",
            icon: Icons.Tech,
            items: [
                "Монтаж технологического оборудования",
                "Пусконаладочные работы",
                "Системы контроля и сигнализации",
                "Объекты электроэнергетики",
                "Приборы учета и контроля"
            ]
        },
        {
            title: "Специальные работы",
            icon: Icons.Forest,
            items: [
                "Буровые работы",
                "Устройство свайных оснований",
                "Грудротехнические сооружения",
                "Плотины и дамбы",
                "Селезащитные сооружения"
            ]
        },
        {
            title: "Линейные сооружения",
            icon: Icons.Linear,
            items: [
                "Прокладка линейных сооружений",
                "Монтаж стальных резервуаров",
                "Емкости под давлением",
                "Хранилища взрывопожароопасных веществ",
                "Капитальный ремонт сооружений"
            ]
        }
    ];

    return (
        <div className={styles.pageContainer}>
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Строительно-монтажные работы</h1>
                <p className={styles.heroText}>
                    Полный комплекс услуг по возведению зданий, сооружений и монтажу технологических систем.
                    Профессиональный подход, соблюдение сроков и гарантия качества.
                </p>
            </section>

            <div className={styles.grid}>
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index} className={styles.card} style={{ animationDelay: `${index * 100}ms` }}>
                            <div className={styles.cardIconWrapper}>
                                <div style={{ width: '32px', height: '32px' }}>
                                    <Icon />
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <ul className={styles.cardList}>
                                {service.items.map((item, idx) => (
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
