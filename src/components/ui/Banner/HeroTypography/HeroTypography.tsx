import React from "react";
import styles from "./HeroTypography.module.css";

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({ children, className = "" }: TypographyProps) => {
    return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export const HeroDescription = ({ children, className = "" }: TypographyProps) => {
    return <p className={`${styles.description} ${className}`}>{children}</p>;
};
