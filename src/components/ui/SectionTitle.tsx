import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    accent?: string;
    subtitle?: string;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, accent, subtitle, className }) => {
    return (
        <div className={`${styles.wrapper} ${className || ''}`}>
            <h2 className={styles.title}>
                {title}
                {accent && <span className={styles.accent}> {accent}</span>}
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};
