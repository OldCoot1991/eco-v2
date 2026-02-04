"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CompanyPageContent.module.css';
import { FaTruck, FaLeaf, FaRecycle, FaBuilding, FaMobileAlt, FaTools, FaCheckCircle, FaCity, FaFileInvoiceDollar, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

// Images
import carparkImg from "@/assets/images/company/carpark.webp";
import throwtrashImg from "@/assets/images/company/throwtrash.webp";
import ukResidenceImg from "@/assets/images/company/uk_residence.jpg";
import kassaPlaceImg from "@/assets/images/company/kassa_place.jpg";

export const CompanyPageContent = () => {
    const { t } = useTranslation();
    const [activeService, setActiveService] = React.useState<string | null>(null);
    const cp = t.companyPage;

    // Service Configuration
    const services = [
        { id: 'operator', icon: FaRecycle },
        { id: 'uk', icon: FaCity },
        { id: 'erc', icon: FaFileInvoiceDollar },
        { id: 'stroy', icon: FaTools, link: '/ecostroy/construction' },
        { id: 'materials', icon: FaBuilding, link: '/ecostroy/materials' },
    ];

    const toggleService = (id: string) => {
        setActiveService(prev => prev === id ? null : id);
    };

    if (!cp) return null; // Safety check

    return (
        <div className={styles.mainWrapper}>

            {/* 1. HERO SECTION */}
            <div className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroLeft}>
                            <span className={styles.badge}>{cp.badge}</span>
                            <h1 className={styles.heroTitle}>
                                {cp.hero.title1} <br />
                                <span className={styles.gradientText}>{cp.hero.title2}</span>
                            </h1>
                            <p className={styles.heroText}>
                                {cp.hero.text}
                            </p>
                        </div>
                        <div className={styles.heroVisual}>
                            <div className={styles.heroCard}>
                                <iframe
                                    src="https://www.youtube.com/embed/cwWK5tG4XN4?rel=0"
                                    title="Corporate Video"
                                    className={styles.heroVideo}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. AUTOPARK */}
            <section className={styles.featureSection}>
                <div className={styles.container}>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureContent}>
                            <span className={styles.featureTag}>{cp.autopark.tag}</span>
                            <h2 className={styles.featureTitle}>{cp.autopark.title}</h2>
                            <p className={styles.featureDesc}>
                                {cp.autopark.desc}
                            </p>
                            <div className={styles.featurePoints}>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaTruck /></div>
                                    <span className={styles.pointText}>{cp.autopark.points[0]}</span>
                                </div>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaCheckCircle /></div>
                                    <span className={styles.pointText}>{cp.autopark.points[1]}</span>
                                </div>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaChartLine /></div>
                                    <span className={styles.pointText}>{cp.autopark.points[2]}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureImageWrapper}>
                            <Image
                                src={carparkImg}
                                alt={cp.autopark.tag}
                                className={styles.featureImage}
                                placeholder="blur"
                            />
                            <div className={styles.floatingStat}>
                                <div className={styles.statText}>
                                    <strong>190+</strong>
                                    <span>{cp.autopark.stat}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ECOLOGY */}
            <section className={styles.bannerSection}>
                <div className={styles.container}>
                    <div className={styles.bannerGrid}>
                        <div className={styles.bannerIconWrapper}>
                            {/* SVG Gradient Definition */}
                            <svg width="0" height="0" style={{ position: 'absolute' }}>
                                <defs>
                                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--leaf-start)" />
                                        <stop offset="100%" stopColor="var(--leaf-end)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <FaLeaf className={styles.bannerIcon} style={{ fill: "url(#leafGradient)" }} />
                        </div>
                        <div className={styles.bannerTextWrapper}>
                            <h2 className={styles.bannerTitle}>{cp.ecology.title}</h2>
                            <p className={styles.bannerText}>
                                {cp.ecology.text}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. IT (REVERSED) */}
            <section className={`${styles.featureSection} ${styles.reversed}`}>
                <div className={styles.container}>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureContent}>
                            <span className={styles.featureTag}>{cp.it.tag}</span>
                            <h2 className={styles.featureTitle}>{cp.it.title}</h2>
                            <p className={styles.featureDesc}>
                                {cp.it.desc}
                            </p>
                            <div className={styles.featurePoints}>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaMobileAlt /></div>
                                    <span className={styles.pointText}>{cp.it.points[0]}</span>
                                </div>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaFileInvoiceDollar /></div>
                                    <span className={styles.pointText}>{cp.it.points[1]}</span>
                                </div>
                                <div className={styles.point}>
                                    <div className={styles.pointIcon}><FaUsers /></div>
                                    <span className={styles.pointText}>{cp.it.points[2]}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureImageWrapper}>
                            <Image
                                src={throwtrashImg}
                                alt={cp.it.tag}
                                className={styles.featureImage}
                                placeholder="blur"
                            />
                            <div className={styles.floatingStat}>
                                <div className={styles.statText}>
                                    <strong>900+</strong>
                                    <span>{cp.it.stat}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICES */}
            <section className={styles.cardsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.featureTitle}>{cp.services.title}</h2>
                        <p className={styles.featureDesc}>
                            {cp.services.subtitle}
                        </p>
                    </div>

                    <div className={styles.cardsGrid}>
                        {services.map((item) => {
                            const data = cp.services.items[item.id as keyof typeof cp.services.items];
                            const isActive = activeService === item.id;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className={`${styles.glassCard} ${isActive ? styles.expanded : ''}`}
                                    data-service={item.id}
                                    onClick={() => toggleService(item.id)}
                                >
                                    <div className={styles.cardIconCircle}><Icon /></div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{data.title}</h3>
                                        <p className={styles.cardText}>{data.text}</p>
                                        {item.link ? (
                                            <Link href={item.link} className={styles.cardAction} onClick={(e) => e.stopPropagation()}>
                                                <span>{cp.services.actions.go}</span> <FaArrowRight />
                                            </Link>
                                        ) : (
                                            <div className={styles.cardAction}>
                                                <span>{cp.services.actions.more}</span> <FaArrowRight />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* GALLERY */}
                    <div className={styles.gallerySection}>
                        <div className={styles.galleryCard}>
                            <Image src={ukResidenceImg} alt={cp.gallery.uk.title} className={styles.galleryImage} placeholder="blur" />
                            <div className={styles.galleryOverlay}>
                                <h4>{cp.gallery.uk.title}</h4>
                                <p>{cp.gallery.uk.desc}</p>
                            </div>
                        </div>
                        <div className={styles.galleryCard}>
                            <Image src={kassaPlaceImg} alt={cp.gallery.erc.title} className={styles.galleryImage} placeholder="blur" />
                            <div className={styles.galleryOverlay}>
                                <h4>{cp.gallery.erc.title}</h4>
                                <p>{cp.gallery.erc.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
