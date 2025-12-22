import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { RotatingBorder } from '../RotatingBorder/RotatingBorder';
import styles from './GridCard.module.css';

export interface GridCardProps {
    title: string;
    description: string;
    link?: string;
    bgImage?: string;
    btnVariant?: "primary" | "secondary" | "outline" | "ghost";
    borderGradient?: string;
    variantClass?: string; // e.g. 'eco', 'news'
    className?: string; // For layout (col-span, etc) - managed by parent usually, but need to pass through?
    // Note: Parent layout styles (grid-column/row) should probably be passed via style object or wrapper. 
    // But standard way is passing className if using CSS modules composition, or just style.
    // We will accept style for grid-area if needed, or className if useful.
    style?: React.CSSProperties;
}

export const GridCard = ({
    title,
    description,
    link,
    bgImage,
    btnVariant = "primary",
    borderGradient = "conic-gradient(from 0deg, transparent 0 340deg, #000 360deg)",
    variantClass,
    className,
    style
}: GridCardProps) => {
    return (
        <div
            className={`${styles.card} ${variantClass ? styles[variantClass] : ''} ${className || ''} group`}
            style={style}
        >
            <RotatingBorder color={borderGradient} isVisible={true} />

            {bgImage && (
                <>
                    <div
                        className={styles.bgImageLayer}
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className={styles.overlay} />
                </>
            )}

            <div className={styles.content}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>

                {link && (
                    <div className={styles.buttonWrapper}>
                        <Button href={link} variant={btnVariant} size="sm" icon={<FaArrowRight />}>
                            Подробнее
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
