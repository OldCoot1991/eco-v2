'use client';

import { useState } from 'react';
import styles from './BusinessFeedbackPageContent.module.css';
import { SectionTitle } from '@/shared/ui/SectionTitle/SectionTitle';
import { BusinessFeedbackForm } from './BusinessFeedbackForm';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import { FaPhone, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Modal } from '@/shared/ui/Modal/Modal';

export const BusinessFeedbackPageContent = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerWrapper}>
                <SectionTitle
                    title={t.businessFeedback.title}
                    subtitle={t.businessFeedback.subtitle}
                />
                <p className={styles.pageDescription}>
                    {t.businessFeedback.pageDescription}
                </p>
            </div>

            {/* Mobile Button - Visible only on mobile */}
            <div className={styles.mobileButtonWrapper}>
                <button
                    className={styles.silverButton}
                    onClick={() => setIsModalOpen(true)}
                >
                    {t.businessFeedback.form.button || "Написать нам"}
                </button>
            </div>

            <div className={styles.contentGrid}>
                {/* Left Column: Form (Desktop Only) */}
                <div className={styles.formColumn}>
                    <BusinessFeedbackForm />
                </div>

                {/* Right Column: Contacts */}
                <div className={styles.contactsColumn}>
                    <div className={styles.contactsCard}>

                        <h3 className={styles.contactsTitle}>Контакты и горячая линия</h3>

                        <div className={styles.hotlineSection}>
                            <p className={styles.hotlineIntro}>
                                {t.businessFeedback.hotline.intro}
                            </p>

                            <div className={styles.hotlineItem}>
                                <div className={`${styles.iconBox} ${styles.iconRed}`}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className={styles.hotlineTitle}>Горячая линия</h4>
                                    <div className={styles.phonesGrid}>
                                        <a href="tel:89887010497" className={styles.hotlinePhone}>8 (988) 701-04-97</a>
                                        <a href="tel:89280142618" className={styles.hotlinePhone}>8 (928) 014-26-18</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hotlineItem}>
                                <div className={`${styles.iconBox} ${styles.iconGreen}`}>
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <h4 className={styles.hotlineTitle}>WhatsApp</h4>
                                    <div className={styles.phonesGrid}>
                                        <a href="tel:89289269431" className={styles.hotlinePhone}>8 (928) 926-94-31</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hotlineItem}>
                                <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                                    <FaTelegramPlane />
                                </div>
                                <div>
                                    <h4 className={styles.hotlineTitle}>Telegram</h4>
                                    <div className={styles.phonesGrid}>
                                        <a href="tel:89280068802" className={styles.hotlinePhone}>8 (928) 006-88-02</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Mobile Form */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <BusinessFeedbackForm />
            </Modal>
        </div>
    );
};
