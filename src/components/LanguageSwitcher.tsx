"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleLanguage } from "@/lib/features/language/languageSlice";
import { HiLanguage } from "react-icons/hi2";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
    const language = useAppSelector((state) => state.language.current);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleLanguage())}
            className={`${styles.button} ${theme === "dark" ? styles.buttonDark : styles.buttonLight}`}
            aria-label="Toggle language"
        >
            <HiLanguage className={styles.icon} />
            <span className={`${styles.separator} ${theme === 'dark' ? styles.separatorDark : styles.separatorLight}`}>/</span>
            <span className={styles.language}>{language}</span>
        </button>
    );
}
