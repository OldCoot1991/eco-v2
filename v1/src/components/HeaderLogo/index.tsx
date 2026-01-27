import React from "react";
import { useLocation } from "react-router";
import styles from "../HeaderLogo/HeaderContact.module.css";
import Menu from "../Menu";
import { Info } from "../Info";

const HeaderContact = () => {
    let location = useLocation();

    return (
        <div className={styles.main}>
            <div className={styles.headers}>
                <div className={styles.header_top}>
                    <div className={styles.header_info}>
                        <div className={styles.header_location}>
                            <div className={styles.img_location}></div>
                            <a
                                className={styles.adress}
                                target="_blank"
                                href="https://yandex.ru/maps/-/CCUu58hUtC"
                            >
                                <p className={styles.paragraf}>
                                    360051, КБР, г.Нальчик, ул.Пушкинa, д.33а/72
                                </p>
                            </a>
                        </div>
                        <div className={styles.header_time}>
                            <div className={styles.img_location2}></div>
                            <p className={styles.paragraf}>
                                Пн-Пт, 9:00 - 18:00
                            </p>
                        </div>
                        <div className={styles.container_img}>
                            <a
                                href="https://t.me/ecologistik"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Telegram-канал ООО «Экологистика»"
                            >
                                <div className={styles.header_social3}></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.header}>
                    <a href="/">
                        <div className={styles.logo}></div>
                    </a>
                    <div className={styles.header_tops}>
                        <p className={styles.header_text}>
                            Горячая линия абонентской службы
                        </p>
                        <div className={styles.number_contact}>
                            <div className={styles.tel}></div>
                            <a href="tel:8-8662-707-61-65">
                                <span className={styles.phone}>
                                    8 (8662) 22-91-10
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.header_tops}>
                        <p className={styles.header_text}>
                            Горячая линия противодействия коррупции и
                            мошенничеству
                        </p>
                        <div className={styles.number_contact}>
                            <div className={styles.tel}></div>
                            <a href="tel:8-909-488-16-86">
                                <span className={styles.phone}>
                                    8 (909) 488-16-86
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.mail}>
                        <div className={styles.img_mail}></div>
                        <a
                            href="mailto:info@eco07.ru"
                            className={styles.link_mail}
                        >
                            info@eco07.ru
                        </a>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.button}>
                           <a href="https://lk.ecologistika.com/auth/login" className={styles.link} target="_blank">Личный кабинет</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.sub_header}>
                <div className={styles.sub_container}>
                    <a href="/">
                        <div className={styles.logo}></div>
                    </a>
                    <a href="/support">
                        <div className={styles.img_mail}></div>
                    </a>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default HeaderContact;
