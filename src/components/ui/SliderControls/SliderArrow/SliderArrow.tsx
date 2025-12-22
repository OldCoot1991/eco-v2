import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./SliderArrow.module.css";

interface SliderArrowProps {
    onClick: () => void;
    direction: "left" | "right";
    ariaLabel?: string;
    className?: string; // Allow passing extra classes if needed
}

export const SliderArrow = ({ onClick, direction, ariaLabel, className = "" }: SliderArrowProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.arrowBtn} ${className}`}
            aria-label={ariaLabel || (direction === "left" ? "Previous Slide" : "Next Slide")}
        >
            {direction === "left" ? (
                <FaArrowLeft className={styles.arrowIcon} />
            ) : (
                <FaArrowRight className={styles.arrowIcon} />
            )}
        </button>
    );
};
