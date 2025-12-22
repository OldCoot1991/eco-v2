import React from "react";
import Link from "next/link";
import styles from "./HeroButton.module.css";

interface HeroButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    icon?: React.ReactNode;
    className?: string; // For extra margins if really needed
    onClick?: () => void;
}

export const HeroButton = ({
    children,
    variant = "primary",
    href,
    icon,
    className = "",
    onClick,
}: HeroButtonProps) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${styles.lg} ${className}`;

    const content = (
        <>
            {children}
            {icon && <span className={styles.icon}>{icon}</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} onClick={onClick}>
            {content}
        </button>
    );
};
