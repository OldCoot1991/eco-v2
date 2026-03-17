'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/shared/lib/hooks/useTranslation';
import { SectionTitle } from '@/shared/ui/SectionTitle/SectionTitle';
import styles from '../../page.module.css';
import detailStyles from './NewsDetail.module.css';
import { FaArrowLeft, FaCalendarAlt, FaRobot } from 'react-icons/fa';
import BreadcrumbsLd from '@/shared/seo/BreadcrumbsLd';

interface PostRecord {
    id: string;
    title: string;
    date_created: string;
    article: string;
    cover: string;
    translatedTitle?: string;
    translatedArticle?: string;
}

export default function NewsDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { t, lang } = useTranslation();
    const newsLabels = t.news;
    
    const [post, setPost] = useState<PostRecord | null>(null);
    const [loading, setLoading] = useState(true);
    const [translating, setTranslating] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://ecologistika.com/api/items/news/${params.id}`);
                const result = await response.json();
                setPost(result.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchPost();
        }
    }, [params.id]);

    // Auto-translation logic for detail page
    useEffect(() => {
        if (lang === 'en' && post && !post.translatedTitle && !translating) {
            const translateArticle = async () => {
                setTranslating(true);
                try {
                    const [titleRes, articleRes] = await Promise.all([
                        fetch('/api/translate', {
                            method: 'POST',
                            body: JSON.stringify({ text: post.title, target: 'en' })
                        }),
                        fetch('/api/translate', {
                            method: 'POST',
                            body: JSON.stringify({ text: post.article, target: 'en' })
                        })
                    ]);

                    const titleData = await titleRes.json();
                    const articleData = await articleRes.json();

                    setPost(prev => prev ? ({
                        ...prev,
                        translatedTitle: titleData.translatedText,
                        translatedArticle: articleData.translatedText
                    }) : null);
                } catch (err) {
                    console.error("Translation error:", err);
                } finally {
                    setTranslating(false);
                }
            };
            translateArticle();
        }
    }, [lang, post?.id, post?.title, post?.article, post?.translatedTitle, translating]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className={styles.pageContainer}>
                <div style={{ textAlign: 'center', padding: '10rem', color: 'var(--primary)', fontWeight: 700 }}>
                    {newsLabels.loading}
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className={styles.pageContainer}>
                <SectionTitle title="404" subtitle={newsLabels.notFound} />
                <button onClick={() => router.push('/news')} className={detailStyles.backButton}>
                    <FaArrowLeft /> {newsLabels.backToList}
                </button>
            </div>
        );
    }

    const baseUrl = "https://ecologistika.com/api";
    const displayTitle = lang === 'en' && post.translatedTitle ? post.translatedTitle : post.title;
    const displayArticle = lang === 'en' && post.translatedArticle ? post.translatedArticle : post.article;

    return (
        <div className={styles.pageContainer}>
            <BreadcrumbsLd 
                items={[
                    { name: t.nav.items.main, item: "/" },
                    { name: t.pages.news.title, item: "/news" },
                    { name: displayTitle, item: `/news/${post.id}` }
                ]}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <button onClick={() => router.push('/news')} className={detailStyles.backButton} style={{ marginBottom: 0 }}>
                    <FaArrowLeft /> {newsLabels.backToList}
                </button>
                
                {lang === 'en' && (
                    <div className={detailStyles.translationStatus}>
                        {translating ? (
                            <div className={detailStyles.spinner}></div>
                        ) : (
                            <FaRobot size={14} />
                        )}
                        <span>{translating ? newsLabels.translating : newsLabels.translatedByAI}</span>
                    </div>
                )}
            </div>

            <article className={detailStyles.article}>
                <header className={detailStyles.header}>
                    <div className={detailStyles.date}>
                        <FaCalendarAlt /> {formatDate(post.date_created)}
                    </div>
                    <h1 className={`${detailStyles.title} ${translating ? detailStyles.skeleton : ''}`}>
                        {translating ? 'Loading article title placeholder' : displayTitle}
                    </h1>
                </header>

                <div className={detailStyles.imageContainer}>
                    {post.cover ? (
                        <img src={`${baseUrl}/assets/${post.cover}`} alt={displayTitle} className={detailStyles.fullImage} />
                    ) : (
                        <div className={detailStyles.imagePlaceholder}>
                            <span>📰</span>
                        </div>
                    )}
                </div>

                {translating ? (
                    <div className={detailStyles.content}>
                        <div className={`${detailStyles.skeleton} ${detailStyles.skeletonText}`}></div>
                        <div className={`${detailStyles.skeleton} ${detailStyles.skeletonText}`}></div>
                        <div className={`${detailStyles.skeleton} ${detailStyles.skeletonText}`} style={{ width: '60%' }}></div>
                    </div>
                ) : (
                    <div 
                        className={detailStyles.content}
                        dangerouslySetInnerHTML={{ __html: displayArticle }}
                    />
                )}
            </article>
        </div>
    );
}
