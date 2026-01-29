"use client";

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from "./TrustedBy.module.css";
import { SectionTitle } from "../../ui/SectionTitle";
import { useTranslation } from "@/lib/hooks/useTranslation";

const partners = [
    { name: "ВТБ", logo: "/partners/vtb.svg", color: "#0021A5" },
    { name: "Магнит", logo: "/partners/magnit.svg", color: "#E31E24" },
    { name: "Сбербанк", logo: "/partners/sberbank.svg", color: "#21A038" },
    { name: "Пятёрочка", logo: "/partners/pyaterochka.svg", color: "#E31E24" },
    { name: "Почта России", logo: "/partners/pochta.svg", color: "#003D7A" },
    { name: "Газпром", logo: "/partners/gazprom.svg", color: "#0066B3" },
    { name: "Роснефть", logo: "/partners/rosneft.svg", color: "#FFD700" },
    { name: "Лукойл", logo: "/partners/lukoil.svg", color: "#E31E24" },
    { name: "ВТБ", logo: "/partners/vtb.svg", color: "#0021A5" },
    { name: "Магнит", logo: "/partners/magnit.svg", color: "#E31E24" },
    { name: "Сбербанк", logo: "/partners/sberbank.svg", color: "#21A038" },
    { name: "Пятёрочка", logo: "/partners/pyaterochka.svg", color: "#E31E24" },
    { name: "Почта России", logo: "/partners/pochta.svg", color: "#003D7A" },
    { name: "Газпром", logo: "/partners/gazprom.svg", color: "#0066B3" },
    { name: "Роснефть", logo: "/partners/rosneft.svg", color: "#FFD700" },
    { name: "Лукойл", logo: "/partners/lukoil.svg", color: "#E31E24" },
    { name: "ВТБ", logo: "/partners/vtb.svg", color: "#0021A5" },
    { name: "Магнит", logo: "/partners/magnit.svg", color: "#E31E24" },
    { name: "Сбербанк", logo: "/partners/sberbank.svg", color: "#21A038" },
    { name: "Пятёрочка", logo: "/partners/pyaterochka.svg", color: "#E31E24" },
    { name: "Почта России", logo: "/partners/pochta.svg", color: "#003D7A" },
    { name: "Газпром", logo: "/partners/gazprom.svg", color: "#0066B3" },
    { name: "Роснефть", logo: "/partners/rosneft.svg", color: "#FFD700" },
    { name: "Лукойл", logo: "/partners/lukoil.svg", color: "#E31E24" },
];

export const TrustedBy = () => {
    const { t } = useTranslation();
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    // Calculate active dot (5 dots total)
    // Cycle through dots 0-4 as slides change
    const totalSlides = partners.length;
    const activeDot = activeIndex % 5;

    const handleDotClick = (dotIndex: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const targetIndex = Math.floor(dotIndex * (totalSlides / 5));
            swiperRef.current.swiper.slideToLoop(targetIndex);
        }
    };

    return (
        <section className={styles.trustedBy}>
            <div className={styles.waveBg}>
                <svg className={styles.waveSvg} viewBox="0 0 1920 442" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
                    <path d="M0 0C66.8333 89.7222 363.5 269.167 957.5 269.167V442H0V0Z" fill="url(#paint0_linear_bg)" fillOpacity="0.5" />
                    <path d="M1920 0C1853.17 89.7222 1551.5 269.167 957.5 269.167V442H1920V0Z" fill="url(#paint1_linear_bg)" fillOpacity="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_bg" x1="527" y1="333.625" x2="1863.04" y2="326.213" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#008B40" />
                            <stop offset="1" stopColor="#DFD840" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_bg" x1="527" y1="333.625" x2="1863.04" y2="326.213" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#008B40" />
                            <stop offset="1" stopColor="#DFD840" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.container}>
                <SectionTitle title={t.home.trusted.title} accent={t.home.trusted.accent} />
                <div className={styles.swiperWrapper}>
                    <Swiper
                        ref={swiperRef}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            320: {
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2,
                                    slideShadows: false,
                                }
                            },
                            768: {
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2,
                                    slideShadows: false,
                                }
                            }
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        className={styles.swiper}
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <div
                                    className={styles.partnerCard}
                                    style={{
                                        backgroundColor: partner.color,
                                    }}
                                >
                                    <div className={styles.logoPlaceholder}>
                                        {partner.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.controlsContainer}>
                    <div className={styles.navigationWrapper}>
                        <button ref={setPrevEl} className={`${styles.navBtn} ${styles.navPrev}`}>
                            <FiChevronLeft />
                        </button>
                        <div className={styles.customPagination}>
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.dot} ${i === activeDot ? styles.dotActive : ''}`}
                                    onClick={() => handleDotClick(i)}
                                />
                            ))}
                        </div>
                        <button ref={setNextEl} className={`${styles.navBtn} ${styles.navNext}`}>
                            <FiChevronRight />
                        </button>
                    </div>

                    <a href="/partners" className={styles.viewAllLink}>
                        {t.home.trusted.all}
                    </a>
                </div>
            </div>
        </section>
    );
};
