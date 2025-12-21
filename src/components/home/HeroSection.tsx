"use client";

import { useState, useEffect } from "react";
// import { useAppSelector } from "@/lib/hooks"; // Removed: Theme handled by CSS
import Button from "@/components/ui/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import CSS Module
import styles from "./HeroSection.module.css";

const slides = [
    {
        id: 1,
        title: "Ecologistics",
        subtitle: "Чистое будущее начинается сегодня",
        desc: "Мы внедряем передовые технологии для сохранения экологии вашего региона. Профессиональный и ответственный подход к окружающей среде.",
        cta: "Оставить заявку",
        link: "/contact",
        gradient: "linear-gradient(135deg, #fafaf9 0%, #ecfdf5 50%, #ffffff 100%)",
        darkGradient: "linear-gradient(135deg, #0c0a09 0%, rgba(2, 44, 34, 0.2) 50%, #000000 100%)",
        accentColor: "#10b981",
        buttons: [
            { text: "Оставить заявку", href: "/contact", variant: "primary" },
            { text: "О компании", href: "/about", variant: "outline" }
        ]
    },
    {
        id: 2,
        title: "Для бизнеса",
        subtitle: "Надежность и ответственность",
        desc: "Комплексные решения по вывозу и утилизации отходов для предприятий. Гарантируем соблюдение всех экологических норм и графиков.",
        cta: "Узнать тарифы",
        link: "/services",
        gradient: "linear-gradient(135deg, #eff6ff 0%, #fafaf9 50%, #ffffff 100%)",
        darkGradient: "linear-gradient(135deg, #020617 0%, rgba(23, 37, 84, 0.2) 50%, #000000 100%)",
        accentColor: "#3b82f6",
        buttons: [
            { text: "Узнать тарифы", href: "/services", variant: "primary" },
            { text: "Тарифы", href: "/tariffs", variant: "outline" }
        ]
    },
    {
        id: 3,
        title: "Инновации",
        subtitle: "Технологии переработки",
        desc: "Современные методы сортировки и переработки ТКО. Мы превращаем отходы в ресурсы, заботясь о будущем поколений.",
        cta: "Подробнее",
        link: "/about",
        gradient: "linear-gradient(135deg, #f0fdfa 0%, #fafaf9 50%, #ffffff 100%)",
        darkGradient: "linear-gradient(135deg, #020617 0%, rgba(19, 78, 74, 0.2) 50%, #000000 100%)",
        accentColor: "#14b8a6",
        buttons: [
            { text: "Подробнее", href: "/about", variant: "primary" },
            { text: "Скачать приложение", href: "/app", variant: "outline" }
        ]
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 500); // Faster lock
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleDotClick = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section className={styles.heroContainer}>
            {/* Background Layers */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slideLayer} ${index === currentSlide ? styles.active : ''}`}
                >
                    <div
                        className={styles.gradientOverlay}
                        style={{
                            '--slide-gradient-light': slide.gradient,
                            '--slide-gradient-dark': slide.darkGradient
                        } as React.CSSProperties}
                    />
                    {/* Subtle Pattern Overlay */}
                    <div className={styles.noiseOverlay} />
                </div>
            ))}

            {/* Content */}
            <div className={styles.contentContainer}>
                {slides.map((slide, index) => {
                    if (index !== currentSlide) return null;
                    return (
                        <div key={slide.id} className={styles.textContent}>
                            {/* Badge */}
                            <div className={styles.badge}>
                                <span
                                    className={styles.badgeDot}
                                    style={{ backgroundColor: slide.accentColor }}
                                />
                                <span className={styles.badgeText}>
                                    {slide.subtitle}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className={styles.title}>
                                {slide.title}
                            </h1>

                            {/* Description */}
                            <p className={styles.description}>
                                {slide.desc}
                            </p>

                            {/* Buttons */}
                            <div className={styles.buttonGroup}>
                                <Button href={slide.link} size="lg">
                                    {slide.cta}
                                    <FaArrowRight className="ml-2" />
                                </Button>
                                <Button href="/about" variant="secondary" size="lg">
                                    О компании
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Controls (Side Arrows) */}
            <div className={styles.sideArrows}>
                <button
                    onClick={handlePrev}
                    className={styles.arrowBtn}
                    aria-label="Previous Slide"
                >
                    <FaArrowLeft className={styles.arrowIcon} />
                </button>
                <button
                    onClick={handleNext}
                    className={styles.arrowBtn}
                    aria-label="Next Slide"
                >
                    <FaArrowRight className={styles.arrowIcon} />
                </button>
            </div>

            {/* Pagination (Dots) */}
            <div className={styles.controls}>
                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.bottomFade} />
        </section>
    );
}
