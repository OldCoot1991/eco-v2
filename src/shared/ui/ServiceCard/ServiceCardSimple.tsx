import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import styles from './ServiceCardSimple.module.css';

export interface ServiceCardSimpleProps {
    icon: React.ReactNode | IconType;
    title: string;
    description: string;
    link?: string;
    color?: string;
}

export const ServiceCardSimple: React.FC<ServiceCardSimpleProps> = ({
    icon,
    title,
    description,
    link,
    color,
}) => {
    // Render icon properly whether it's a component or element
    const renderIcon = () => {
        if (typeof icon === 'function') {
            const IconComponent = icon as IconType;
            return <IconComponent />;
        }
        return icon;
    };

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
                className={clsx(styles.card, color && styles[color])}
            >
                {CardContent}
            </Link>
        );
    }

    return (
        <div className={clsx(styles.card, color && styles[color])}>
            {CardContent}
        </div>
    );
};
