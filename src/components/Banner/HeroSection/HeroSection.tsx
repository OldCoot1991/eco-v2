"use client";

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// UI Components (CSS Modules)
import { HeroBadge } from "../../ui/Banner/HeroBadge/HeroBadge";
import { HeroTitle, HeroDescription } from "../../ui/Banner/HeroTypography/HeroTypography";
import { HeroButton } from "../../ui/Banner/HeroButton/HeroButton";
import { HeroBackground, HeroBottomFade } from "../../ui/Banner/HeroBackground/HeroBackground";
import { SliderArrow } from "../../ui/SliderControls/SliderArrow/SliderArrow";
import { SliderDot } from "../../ui/SliderControls/SliderDot/SliderDot";

import styles from "./HeroSection.module.css";

// Data
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
            { text: "Оставить заявку", href: "/contact", variant: "primary" as const },
            { text: "О компании", href: "/about", variant: "outline" as const }
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
            { text: "Узнать тарифы", href: "/services", variant: "primary" as const },
            { text: "Тарифы", href: "/tariffs", variant: "outline" as const }
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
            { text: "Подробнее", href: "/about", variant: "primary" as const },
            { text: "Скачать приложение", href: "/app", variant: "outline" as const }
        ]
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance
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
        setTimeout(() => setIsAnimating(false), 500);
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
        <section className={styles.heroContainer} aria-label="Hero Banner">
            {/* Background Layers */}
            {slides.map((slide, index) => (
                <HeroBackground
                    key={slide.id}
                    isActive={index === currentSlide}
                    gradient={slide.gradient}
                    darkGradient={slide.darkGradient}
                />
            ))}

            {/* Content */}
            <div className={styles.contentContainer}>
                {slides.map((slide, index) => {
                    if (index !== currentSlide) return null;
                    return (
                        <div key={slide.id} className={styles.textContent}>
                            <HeroBadge text={slide.subtitle} dotColor={slide.accentColor} />

                            <HeroTitle>{slide.title}</HeroTitle>

                            <HeroDescription>{slide.desc}</HeroDescription>

                            <div className={styles.buttonGroup}>
                                <HeroButton
                                    href={slide.buttons[0].href}
                                    variant={slide.buttons[0].variant}
                                    icon={<FaArrowRight />}
                                >
                                    {slide.buttons[0].text}
                                </HeroButton>
                                <HeroButton
                                    href={slide.buttons[1].href}
                                    variant={slide.buttons[1].variant}
                                >
                                    {slide.buttons[1].text}
                                </HeroButton>
                            </div>
                            <div className={styles.controls}>
                                <SliderArrow direction="left" onClick={handlePrev} ariaLabel="Previous Slide" />

                                <div className={styles.dots}>
                                    {slides.map((_, index) => (
                                        <SliderDot
                                            key={index}
                                            onClick={() => handleDotClick(index)}
                                            isActive={index === currentSlide}
                                            ariaLabel={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <SliderArrow direction="right" onClick={handleNext} ariaLabel="Next Slide" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <HeroBottomFade />
        </section>
    );
}
