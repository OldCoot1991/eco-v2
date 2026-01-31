import React from 'react';
import styles from './DocumentCard.module.css';

interface DocumentCardProps {
    badgeText: string;
    dateText: string;
    title: string;
    subtitle: string;
    downloadText: string;
    fileUrl: string;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
    badgeText,
    dateText,
    title,
    subtitle,
    downloadText,
    fileUrl
}) => {
    return (
        <div className={styles.documentCard}>
            <div className={styles.documentCardInner}>
                <div className={styles.documentCardBg} />

                <div className={styles.documentContent}>
                    <div className={styles.documentMeta}>
                        <span className={styles.documentBadge}>{badgeText}</span>
                        <span className={styles.documentDate}>{dateText}</span>
                    </div>
                    <h3 className={styles.documentTitle}>{title}</h3>
                    <p className={styles.documentSubtitle}>
                        {subtitle}
                    </p>
                </div>
                <a
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.downloadButton}
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {downloadText}
                </a>
            </div>
        </div>
    );
};
