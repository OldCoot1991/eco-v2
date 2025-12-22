import React from "react";
import styles from "./SliderDot.module.css";

interface SliderDotProps {
    isActive: boolean;
    onClick: () => void;
    ariaLabel?: string;
    className?: string;
}

export const SliderDot = ({ isActive, onClick, ariaLabel, className = "" }: SliderDotProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.dot} ${isActive ? styles.active : ""} ${className}`}
            aria-label={ariaLabel}
        />
    );
};
