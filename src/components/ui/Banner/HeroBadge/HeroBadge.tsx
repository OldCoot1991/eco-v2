import React from "react";
import styles from "./HeroBadge.module.css";

interface HeroBadgeProps {
    text: string;
    dotColor: string;
    className?: string;
}

export const HeroBadge = ({ text, dotColor, className = "" }: HeroBadgeProps) => {
    return (
        <div className={`${styles.badge} ${className}`}>
            <span
                className={styles.badgeDot}
                style={{ backgroundColor: dotColor }}
            />
            <span className={styles.badgeText}>
                {text}
            </span>
        </div>
    );
};
