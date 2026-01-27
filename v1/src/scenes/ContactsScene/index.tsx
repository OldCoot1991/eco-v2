import styles from "./contactsscene.module.css";
import Requisites from "../../components/Requisites/index";
import EcoMobileAppBanner from "../../components/EcoMobileAppBanner";

// Контакты
function ContactsScene() {
    return (
        <div className={styles.container}>
            <Requisites />
            <div className={styles.table}>
                <h1 className={styles.title}>Контакты</h1>
                <div className={styles.table_title}>
                    <p>Адрес</p>
                    <p>График</p>
                    <p>Телефон</p>
                </div>
                <div className={styles.table_entry}>
                    <p> г.Нальчик, пр-т.Кулиева, д.2 б </p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Без перерыва
                        <br />
                        Выходной: воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p> г.Нальчик , ул.Ашурова, д.16 </p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Без перерыва
                        <br />
                        Выходной: воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p>г. Нальчик, ул. Шогенова, д. 4</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br /> 
                        Суббота: 08:00 - 12:00 
                        <br />
                        Перерыв: 12:00 - 13:00 
                        <br />
                        Выходной: воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p>г.Нальчик, ул.Идарова, д.162</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Суббота: 08:00 - 12:00
                        <br />
                        Перерыв: 12:00 - 13:00
                        <br />
                        Выходной: воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p>Баксанский район, г. Баксан, ул. Угнич, д.11/2</p>
                    <p>
                        Будние дни: 08:00 - 17:00 <br />
                        Перерыв: 12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p>Майский район, г. Майский, ул. Ленина, д.25</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (938) 916 55 37</p>
                </div>
                <div className={styles.table_entry}>
                    <p>Урванский район, г. Нарткала, ул. Кабардинская, д.87</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (967) 411 06 15</p>
                </div>
                <div className={styles.table_entry}>
                    <p>
                        Прохладненский район, г. Прохладный, ул. Свободы, д.78/1
                    </p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (967) 411 06 43</p>
                </div>
                <div className={styles.table_entry}>
                    <p>Терский район, г. Терек, ул. Ленина, д.16</p>
                    <p>
                        Будние дни: 08:00 - 17:00 <br />
                        Перерыв:  12:00 - 13:00 <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                </div>
                <div className={styles.table_entry}>
                    <p>Зольский район, п. Залукокоаже, ул. Комсомольская, д.20</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (967) 411 06 31</p>
                </div>
                <div className={styles.table_entry}>
                    <p>Лескенский район, п. Анзорей, ул. Хамгокова, д.21</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (968) 583 66 38</p>
                </div>
                <div className={styles.table_entry}>
                    <p>Эльбрусский район, г. Тырныауз, пр. Эльбрусский, д.61</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p></p>
                </div>
                <div className={styles.table_entry}>
                    <p>Чегемский район, г. Чегем, ул. Баксанское шоссе, д.2а</p>
                    <p>
                        Будние дни: 08:00 - 17:00 <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (967) 411 06 40</p>
                </div>
                <div className={styles.table_entry}>
                    <p>Черекский район, с.п. Кашхатау, ул. Мечиева, б/н</p>
                    <p>
                        Будние дни: 08:00 - 17:00
                        <br />
                        Перерыв:  12:00 - 13:00
                        <br />
                        Выходные дни: суббота, воскресенье
                    </p>
                    <p>+7 (967) 411 06 27</p>
                </div>
            </div>

            <EcoMobileAppBanner />
        </div>
    );
}

export default ContactsScene;/*
 * File: index.tsx
 * Project: ecologistika-site
 * File Created: Thursday, 5th October 2023 4:04:40 pm
 * Author: <<Ahmed Kochesokov>> (<<i@kochesokov.ru>>)
 * -----
 * Last Modified: Thursday, 5th October 2023 4:25:54 pm
 * Author: <<Ahmed Kochesokov>> (<<i@kochesokov.ru>>)
 * Telegram: https://t.me/AcDcRock32
 * -----
 * 
 * Copyright <<projectCreationYear>> - 2023  (psioniq)
 * 
 */
