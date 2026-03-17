'use client';

import React from 'react';
import styles from './KidsVideos.module.css';
import { useTranslation } from '@/shared/lib/hooks/useTranslation';

interface VideoCard {
    text: string;
    src: string;
}

const videoData: VideoCard[] = [
    {
        text: "Мультфильм «Просто разделяй. Раздельный сбор отходов - мой выбор!»",
        src: "https://www.youtube.com/embed/4cZcgIBPc_U",
    },
    {
        text: "Мультфильм «Барбоскины. Осторожно, экология!»",
        src: "https://vk.com/video_ext.php?oid=-61911646&id=456239823&hash=755ed14be3b82ab3",
    },
    {
        text: "Мультфильм «Синий трактор. Машинка мусоровоз»",
        src: "https://www.youtube.com/embed/LG6jaTbxiFs",
    },
    {
        text: "Мультфильм «Развлечёба. Экология»",
        src: "https://www.youtube.com/embed/ys4yJeclORk",
    },
    {
        text: "Мультфильм «Щенячий патруль. раздельный сбор отходов»",
        src: "https://www.youtube.com/embed/p4uxIEYyQcM",
    },
];

export const KidsVideos: React.FC = () => {
    const { t } = useTranslation();
    const kids = t.companyPage.kids;

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {videoData.map((video, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                src={video.src}
                                title={video.text}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.videoTitle}>{video.text}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.kidsBanner}>
                <h3 className={styles.bannerTitle}>{kids.banner.title}</h3>
                <p className={styles.bannerText}>{kids.banner.text}</p>
            </div>
        </div>
    );
};
