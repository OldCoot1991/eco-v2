"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from "./TrustedBy.module.css";

const partners = [
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
    return (
        <section className={styles.trustedBy}>
            <div className={styles.waveBg}>
                <svg className={styles.waveLeft} viewBox="0 0 500 500" preserveAspectRatio="none">
                    <path d="M0,250 Q125,150 250,250 T500,250 L500,500 L0,500 Z" fill="#008B40" fillOpacity="0.15" />
                </svg>
                <svg className={styles.waveRight} viewBox="0 0 500 500" preserveAspectRatio="none">
                    <path d="M0,250 Q125,350 250,250 T500,250 L500,500 L0,500 Z" fill="#DFD840" fillOpacity="0.15" />
                </svg>
            </div>

            <div className={styles.container}>
                <h2 className={styles.heading}>Нам доверяют</h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
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

                <a href="/partners" className={styles.viewAllLink}>
                    Смотреть все
                </a>
            </div>
        </section>
    );
};
