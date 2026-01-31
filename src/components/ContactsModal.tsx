"use client";

import { useEffect } from "react";
import styles from "./ContactsModal.module.css";
import { useAppSelector } from "@/lib/hooks";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import SocialLinks from "./ui/SocialLinks";

interface ContactsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
    const language = useAppSelector((state) => state.language.current);
    const isEn = language === 'en';

    // Close on ESC key
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
                        {isEn ? 'Contacts' : 'Контакты'}
                    </h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className={styles.list}>
                    {/* Subscriber Service */}
                    <a href="tel:+78662229110" className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <FaPhone className={styles.itemIcon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>
                                {isEn ? 'Customer Service' : 'Абонентская служба'}
                            </span>
                            <span className={styles.value}>
                                8 (8662) 22-91-10
                            </span>
                        </div>
                    </a>

                    {/* Corruption Hotline */}
                    <a href="tel:+79094881686" className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <FaShieldAlt className={styles.itemIcon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>
                                {isEn ? 'Anti-corruption' : 'Противодействие коррупции'}
                            </span>
                            <span className={styles.value}>
                                8 (909) 488-16-86
                            </span>
                        </div>
                    </a>

                    {/* Email */}
                    <a href="mailto:info@eco07.ru" className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <FaEnvelope className={styles.itemIcon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>
                                {isEn ? 'Email' : 'Почта'}
                            </span>
                            <span className={styles.value}>
                                info@eco07.ru
                            </span>
                        </div>
                    </a>

                    {/* Address */}
                    <div className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <FaMapMarkerAlt className={styles.itemIcon} />
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>
                                {isEn ? 'Address' : 'Адрес'}
                            </span>
                            <span className={styles.value} style={{ whiteSpace: 'pre-line' }}>
                                {isEn ? '33a/72 Pushkin St.,\nNalchik, KBR, 360051' : '360051, КБР, г. Нальчик,\nул. Пушкина, д. 33а/72'}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.socialSection}>
                    <span className={styles.socialLabel}>
                        {isEn ? 'We are in social media' : 'Мы в соцсетях'}
                    </span>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}
