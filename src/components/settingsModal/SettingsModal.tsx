"use client";

import { useEffect } from "react";
import styles from "./SettingsModal.module.css";
import { useAppSelector } from "@/lib/hooks";
import { settingsSections } from "./settingsData";
import { Modal } from "../ui/Modal/Modal";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const language = useAppSelector((state) => state.language.current);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={language === 'en' ? 'Settings' : 'Настройки'}
        >
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
        </Modal>
    );
}
