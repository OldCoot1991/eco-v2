"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import styles from "./News.module.css";
import { SectionTitle } from "../ui/SectionTitle";
import { useTranslation } from "@/lib/hooks/useTranslation";

interface NewsItem {
    id: number;
    description: string;
    cover: string;
    date_created: string;
}

const API_URL = "https://ecologistika.com/api";

export const News = () => {
    const { t } = useTranslation();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/items/news?sort=-date_created`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setNews(data.data.slice(0, 3));
                }
            })
            .catch((err) => console.error("Failed to fetch news:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className={styles.news}>
            <div className={styles.container}>
                <SectionTitle
                    title={t.home.news.title}
                    subtitle={t.home.news.subtitle}
                />

                <div className={styles.headerActions}>
                    <Link href="/news" className={styles.allNewsLink}>
                        {t.home.news.all}
                        <FaArrowRight className={styles.linkIcon} />
                    </Link>
                </div>

                {loading ? (
                    <div className={styles.grid}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`${styles.skeletonCard} ${styles.skeleton}`}>
                                <div className={styles.skeletonImage} />
                                <div className={styles.skeletonLine} />
                                <div className={`${styles.skeletonLine} ${styles.skeletonLineShort}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {news.map((item) => (
                            <Link
                                key={item.id}
                                href={`/news/post/${item.id}`}
                                className={styles.newsCard}
                            >
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder} />
                                    {item.cover && (
                                        <img
                                            src={`${API_URL}/assets/${item.cover}`}
                                            alt=""
                                            className={styles.newsImage}
                                        />
                                    )}
                                    <div className={styles.dateBadge}>
                                        <FaCalendarAlt className={styles.dateIcon} />
                                        {new Date(item.date_created).toLocaleDateString("ru-RU")}
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.newsTitle}>
                                        {item.description}
                                    </h3>
                                    <div className={styles.readMore}>
                                        {t.home.news.read}
                                        <FaArrowRight className={styles.readMoreIcon} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className={styles.mobileAllNews}>
                    <Link href="/news">
                        {t.home.news.all}
                        <FaArrowRight className={styles.linkIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
