"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAppSelector } from "@/shared/lib/hooks";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroBanner.module.css";

const translations = {
    ru: {
        slides: [
            {
                id: 1,
                title: "Региональный оператор по обращению с ТКО",
                subtitle: "Экологистика КБР",
                description:
                    "Профессиональный вывоз мусора в Нальчике и Кабардино-Балкарской Республике",
                buttonText: "Заключить договор",
                buttonLink: "/business/contract",
                image: "/images/hero-1.jpg",
            },
            {
                id: 2,
                title: "Чистый город - наша забота",
                subtitle: "Качественный сервис",
                description:
                    "Современные технологии обращения с отходами для комфортной жизни",
                buttonText: "Узнать больше",
                buttonLink: "/company/about",
                image: "/images/hero-2.jpg",
            },
        ],
    },
    en: {
        slides: [
            {
                id: 1,
                title: "Regional Waste Management Operator",
                subtitle: "Ecologistics KBR",
                description:
                    "Professional waste collection in Nalchik and Kabardino-Balkarian Republic",
                buttonText: "Sign Contract",
                buttonLink: "/business/contract",
                image: "/images/hero-1.jpg",
            },
            {
                id: 2,
                title: "Clean City - Our Care",
                subtitle: "Quality Service",
                description:
                    "Modern waste management technologies for comfortable living",
                buttonText: "Learn More",
                buttonLink: "/company/about",
                image: "/images/hero-2.jpg",
            },
        ],
    },
};

export const HeroBanner = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const language = useAppSelector((state) => state.language.current);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Use default language on server, actual language on client after mount
    const currentLanguage = mounted ? language : "ru";
    const slides =
        translations[currentLanguage as keyof typeof translations].slides;

    return (
        <div className={styles.heroBanner}>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: `.${styles.customPagination}`,
                    bulletClass: styles.paginationBullet,
                    bulletActiveClass: styles.paginationBulletActive,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                }}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className={styles.swiper}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={styles.slide}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={styles.overlay} />
                            <div className={styles.content}>
                                <div className={styles.badge}>{slide.subtitle}</div>
                                <h1 className={styles.title}>{slide.title}</h1>
                                <p className={styles.description}>{slide.description}</p>
                                <a href={slide.buttonLink} className={styles.button}>
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Controls Container */}
            <div className={styles.controlsContainer}>
                <div className={styles.navigationWrapper}>
                    <button
                        className={styles.navButtonPrev}
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous slide"
                    >
                        <FiChevronLeft />
                    </button>
                    <div className={styles.customPagination}></div>
                    <button
                        className={styles.navButtonNext}
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next slide"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};
