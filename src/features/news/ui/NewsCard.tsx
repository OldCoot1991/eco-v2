'use client';

import React from 'react';
import Link from 'next/link';
import styles from './NewsCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface NewsCardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    image?: string;
    readMoreText: string;
    loading?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ id, date, title, description, image, readMoreText, loading }) => {
    const baseUrl = "https://ecologistika.com/api";
    const imageUrl = image ? `${baseUrl}/assets/${image}` : null;

    return (
        <Link href={`/news/${id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className={styles.image} />
                ) : (
                    <div className={styles.image} style={{ backgroundColor: 'var(--primary)', opacity: 0.1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '3rem', opacity: 0.3 }}>📰</span>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{date}</div>
                <h3 className={`${styles.title} ${loading ? styles.skeleton : ''}`}>
                    {loading ? 'Loading title...' : title}
                </h3>
                <p className={`${styles.description} ${loading ? styles.skeleton : ''}`}>
                    {loading ? 'Loading description content for the news card skeleton loader placeholder text...' : description}
                </p>
                <div className={styles.footer}>
                    {readMoreText} <FaArrowRight fontSize="0.8em" />
                </div>
            </div>
        </Link>
    );
};
