import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
    icon: React.ReactNode | IconType;
    title: string;
    description: string;
    link?: string;
    actionText?: string;
    variant?: 'glass' | 'simple'; // glass для компании, simple для бизнеса
    color?: string; // для simple варианта
    isExpanded?: boolean;
    onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    link,
    actionText,
    variant = 'simple',
    color,
    isExpanded = false,
    onClick
}) => {
    // Render icon properly whether it's a component or element
    const renderIcon = () => {
        if (typeof icon === 'function') {
            const IconComponent = icon as IconType;
            return <IconComponent />;
        }
        return icon;
    };

    // Simple variant (для бизнеса)
    if (variant === 'simple') {
        const CardContent = (
            <>
                <div className={styles.iconWrapper}>
                    {renderIcon()}
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </>
        );

        if (link) {
            return (
                <Link
                    href={link}
                    className={`${styles.card} ${styles.simple} ${color ? styles[color] : ''}`}
                >
                    {CardContent}
                </Link>
            );
        }

        return (
            <div className={`${styles.card} ${styles.simple} ${color ? styles[color] : ''}`}>
                {CardContent}
            </div>
        );
    }

    // Glass variant (для компании)
    const GlassCardContent = (
        <>
            <div className={styles.cardIconCircle}>
                {renderIcon()}
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
                {link ? (
                    <Link
                        href={link}
                        className={styles.cardAction}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>{actionText || 'Перейти'}</span> <FaArrowRight />
                    </Link>
                ) : (
                    <div className={styles.cardAction}>
                        <span>{actionText || 'Подробнее'}</span> <FaArrowRight />
                    </div>
                )}
            </div>
        </>
    );

    return (
        <div
            className={`${styles.card} ${styles.glass} ${isExpanded ? styles.expanded : ''}`}
            onClick={onClick}
            data-service={color}
        >
            {GlassCardContent}
        </div>
    );
};
