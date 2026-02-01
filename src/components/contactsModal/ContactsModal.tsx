"use client";

import { useEffect } from "react";
import styles from "./ContactsModal.module.css";
import { useAppSelector } from "@/lib/hooks";
import { FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks/SocialLinks";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { contactItems } from "./contactsData";

interface ContactsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
    const language = useAppSelector((state) => state.language.current);
    const { t } = useTranslation();
    const isEn = language === 'en';

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
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;
                        const ItemTag = item.type === 'link' ? 'a' : 'div';
                        const itemProps = item.type === 'link' ? { href: item.href } : {};
                        const valueText = typeof item.value === 'string'
                            ? item.value
                            : (isEn ? item.value.en : item.value.ru);

                        return (
                            <ItemTag key={index} className={styles.item} {...itemProps}>
                                <div className={styles.iconWrapper}>
                                    <Icon className={styles.itemIcon} />
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.label}>
                                        {isEn ? item.label.en : item.label.ru}
                                    </span>
                                    <span
                                        className={styles.value}
                                        style={item.icon === FaMapMarkerAlt ? { whiteSpace: 'pre-line' } : {}}
                                    >
                                        {valueText}
                                    </span>
                                </div>
                            </ItemTag>
                        );
                    })}
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
