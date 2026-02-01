import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    accent?: string;
    subtitle?: string;
    className?: string;
    size?: 'default' | 'small';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, accent, subtitle, className, size = 'default' }) => {
    return (
        <div className={`${styles.wrapper} ${className || ''}`}>
            <h2 className={`${styles.title} ${size === 'small' ? styles.titleSmall : ''}`}>
                {title}
                {accent && <span className={styles.accent}> {accent}</span>}
            </h2>
            {subtitle && <p className={`${styles.subtitle} ${size === 'small' ? styles.subtitleSmall : ''}`}>{subtitle}</p>}
        </div>
    );
};
