import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ServiceCardGlass.module.css';

export interface ServiceCardGlassProps {
    icon: React.ReactNode | IconType;
    title: string;
    description: string;
    link?: string;
    actionText?: string;
    color?: string;
    isExpanded?: boolean;
    onClick?: () => void;
}

export const ServiceCardGlass: React.FC<ServiceCardGlassProps> = ({
    icon,
    title,
    description,
    link,
    actionText,
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
            className={clsx(styles.card, isExpanded && styles.expanded)}
            onClick={onClick}
            data-service={color}
        >
            {GlassCardContent}
        </div>
    );
};
