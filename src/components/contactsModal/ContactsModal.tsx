"use client";

import { useEffect } from "react";
import styles from "./ContactsModal.module.css";
import { useAppSelector } from "@/lib/hooks";
import { FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks/SocialLinks";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { contactItems } from "./contactsData";
import { Modal } from "../ui/Modal/Modal";

interface ContactsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactsModal({ isOpen, onClose }: ContactsModalProps) {
    const language = useAppSelector((state) => state.language.current);
    const isEn = language === 'en';

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={isEn ? 'Contacts' : 'Контакты'}
        >
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
                            <div
                                className={styles.iconWrapper}
                                style={{
                                    background: `${item.color}1a`, // 10% opacity
                                    color: item.color
                                }}
                            >
                                <Icon className={styles.itemIcon} />
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
        </Modal>
    );
}
