/*
 * File: index.tsx
 * Project: ecologistika-site
 * File Created: 2022-10-28 17:44:30
 * Author: Ahmed
 * -----
 * Last Modified: 2022-11-01 09:26:08
 * Modified By: NEZNAYVAS
 * -----
 * Copyright 2022 - present
 */

import styles from "./online-payments.module.css";

export default function OnlinePayments() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.onlinepayments_title}>
                    Совершайте онлайн платежи через мобильное приложение
                </p>
                <div className={styles.online_container}>
                    <p className={styles.onlinepayments_description}>
                        Скачать <br /> приложение
                    </p>
                    <div className={styles.online_img}></div>
                </div>
            </div>

            <div className={styles.onlinepayments_2}>
                <p className={styles.onlinepayments_title_2}>
                    Совершайте онлайн платежи через мобильное приложение и
                    получайте кэшбэк
                </p>
                <div className="container-app">
                    <a
                        href="https://ecologistika.page.link/ios"
                        className="link-app-ios"
                    ></a>
                    <a
                        href="https://ecologistika.page.link/android"
                        className="link-app-android"
                    ></a>
                </div>
            </div>
        </div>
    );
}
