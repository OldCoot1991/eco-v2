"use client";

import { useEffect } from "react";
import styles from "./SettingsModal.module.css";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useAppSelector } from "@/lib/hooks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { settingsSections } from "./settingsData";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const theme = useAppSelector((state) => state.theme.mode);
    const language = useAppSelector((state) => state.language.current);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {language === 'en' ? 'Settings' : 'Настройки'}
                    </h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {settingsSections.map((section, index) => {
                    const Component = section.component;
                    return (
                        <div key={index} className={styles.section}>
                            <div className={styles.info}>
                                <span className={styles.label}>
                                    {language === 'en' ? section.label.en : section.label.ru}
                                </span>
                                <span className={styles.description}>
                                    {language === 'en' ? section.description.en : section.description.ru}
                                </span>
                            </div>
                            <div className={styles.control}>
                                <Component />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
