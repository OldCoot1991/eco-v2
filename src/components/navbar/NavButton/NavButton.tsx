"use client";

import React from 'react';
import styles from './NavButton.module.css';

interface NavButtonProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ title, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.navButton} ${isActive ? styles.navButtonActive : styles.navButtonDefault}`}
        >
            {['TL', 'TR', 'BL', 'BR'].map(corner => (
                <div key={corner} className={styles[`corner${corner}` as keyof typeof styles]} />
            ))}
            {title}
        </button>
    );
};
