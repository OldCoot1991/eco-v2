import styles from "./HotlineInfo.module.css";
import { FaPhoneAlt, FaUserTie, FaFileAlt, FaWhatsapp } from "react-icons/fa";

export const HotlineInfo = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.intro}>
                    Уважаемые абоненты и жители республики, для вашего удобства, в
                    компании «Экологистика» работает горячая линия, которая создана для
                    оперативного приема Ваших жалоб и заявлений.
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconRed}`}>
                            <FaPhoneAlt />
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.title}>Горячая линия</h4>
                            <a href="tel:+78662229110" className={styles.phone}>
                                8 (8662) 22-91-10
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconBlue}`}>
                            <FaUserTie />
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.title}>Запись на прием</h4>
                            <a href="tel:+78662400535" className={styles.phone}>
                                8 (8662) 40-05-35
                            </a>
                            <a href="tel:+88002018884" className={styles.phone}>
                                8 (800) 201-88-84
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconOrange}`}>
                            <FaFileAlt />
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.title}>Статус заявления</h4>
                            <a href="tel:+78662400313" className={styles.phone}>
                                8 (8662) 40-03-13
                            </a>
                            <a href="tel:+88002015212" className={styles.phone}>
                                8 (800) 201-52-12
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconGreen}`}>
                            <FaWhatsapp />
                        </div>
                        <div className={styles.cardContent}>
                            <h4 className={styles.title}>WhatsApp</h4>
                            <a href="https://wa.me/79674110620" className={styles.phone}>
                                8 (967) 411-06-20
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
