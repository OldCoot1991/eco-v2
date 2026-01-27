import React from 'react';
import { useCookies } from 'react-cookie';
import styles from './Notification.module.css'; // Здесь вы можете создать отдельный файл стилей для вашего нового уведомления

const Notification = () => {
    const [cookies, setCookie] = useCookies(['notificationAccepted']);

    const handleAcceptNotification = () => {
        setCookie("notificationAccepted", "true", {
            maxAge: 31536000
        });
    };

    return (
        <div className={`${cookies.notificationAccepted ? styles.notification__hidden : styles.notification}`}>
            <h1 className={styles.title}>Уважаемые абоненты</h1>
            <div className={styles.notification__content}>
                <div className={styles.notification__text}>
                    Уведомляем вас о том, что с 03 июля 2024 года на основании Листа записи Единого государственного реестра юридических лиц,
                    юридическим адресом ООО «Экологистика» является: 121059, г. Москва, вн.тер.г. муниципальный округ Дорогомилово, наб. Бережковская, д. 12, кв. 161
                </div>
            </div>
            <div className={styles.notification__buttons}>
                    <button onClick={handleAcceptNotification} className={styles.notification__button}>
                        Закрыть
                    </button>
                </div>
        </div>
    );
};

export default Notification;
