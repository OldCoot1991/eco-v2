"use client";

import { useState } from "react";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            className={`${styles.button} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
}
