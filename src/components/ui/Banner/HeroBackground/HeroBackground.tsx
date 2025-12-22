import React from "react";
import styles from "./HeroBackground.module.css";

interface HeroBackgroundProps {
    isActive: boolean;
    gradient: string;
    darkGradient: string;
}

export const HeroBackground = ({ isActive, gradient, darkGradient }: HeroBackgroundProps) => {
    return (
        <div className={`${styles.slideLayer} ${isActive ? styles.active : ""}`}>
            <div
                className={styles.gradientOverlay}
                style={
                    {
                        "--slide-gradient-light": gradient,
                        "--slide-gradient-dark": darkGradient,
                    } as React.CSSProperties
                }
            />
            <div className={styles.noiseOverlay} />
        </div>
    );
};

export const HeroBottomFade = () => {
    return <div className={styles.bottomFade} />;
}
