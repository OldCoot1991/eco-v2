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

import { useTranslation } from "@/lib/hooks/useTranslation";
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

const partners = [
    { name: "Sberbank", logo: "/img/trustedBy/sberbank.svg" },
    { name: "VTB", logo: "/img/trustedBy/vtb.svg" },
    { name: "Gazprom", logo: "/img/trustedBy/gazprom.svg" },
    { name: "Rosneft", logo: "/img/trustedBy/rosneft.svg" },
    { name: "Magnit", logo: "/img/trustedBy/magnet.svg" },
    { name: "Five", logo: "/img/trustedBy/five.svg" },
    { name: "Russian Railways", logo: "/img/trustedBy/russian-railways.svg" },
    { name: "Rostelecom", logo: "/img/trustedBy/rostelecom.svg" },
    { name: "Rosseti", logo: "/img/trustedBy/rosseti.svg" },
    { name: "Post Bank", logo: "/img/trustedBy/post-office-bank.svg" },
    { name: "Gloria Jeans", logo: "/img/trustedBy/gloria-jeans.svg" },
    { name: "Fix Price", logo: "/img/trustedBy/fix-price.svg" },
    { name: "Megafon", logo: "/img/trustedBy/megafon.svg" },
    { name: "Rosgostrah", logo: "/img/trustedBy/rosgostrah.svg" },
    { name: "Invitro", logo: "/img/trustedBy/invitro.svg" },
    { name: "Hemotest", logo: "/img/trustedBy/hemotest.svg" },
    { name: "Rosselkhoznadzor", logo: "/img/trustedBy/rosselkhoznadzor-bank.svg" },
    { name: "Nalchik Sweetness", logo: "/img/trustedBy/nalchik-sweetness.svg" },
    { name: "Ridada", logo: "/img/trustedBy/ridada.svg" },
    { name: "DEA", logo: "/img/trustedBy/dea.svg" },
    { name: "Wester Hyper", logo: "/img/trustedBy/wester-hyper.svg" },
];

export const TrustedBy = () => {
    const { t } = useTranslation();
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

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
            {/* Wave background kept as is */}
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
                                <div className={styles.partnerCard}>
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className={styles.partnerLogo}
                                    />
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
