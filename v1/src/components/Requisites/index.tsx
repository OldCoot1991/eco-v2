import React from "react";
import styles from "../Requisites/requisites.module.css"
import { Info } from "../Info";


const Requisites = () => {
    return (
        <div className="container-info">
            <Info />
            <div className={styles.container}>
                <h1 className={styles.title}>Реквизиты</h1>
                <div className={styles.requisites}>
                    <p className={styles.text}><span className={styles.span_text}>Название организации:</span>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЭКОЛОГИСТИКА"</p>
                    <p className={styles.text}><span className={styles.span_text}>Юридический адрес организации:</span>121059, РОССИЯ, Г.МОСКВА, ВН.ТЕР.Г.
                        МУНИЦИПАЛЬНЫЙ ОКРУГ ДОРОГОМИЛОВО, НАБ
                        БЕРЕЖКОВСКАЯ, Д. 12, КВ. 161</p>
                    <p className={styles.text}><span className={styles.span_text}>ИНН </span>0707019253</p>
                    <p className={styles.text}><span className={styles.span_text}>КПП </span>773001001</p>
                    <p className={styles.text}><span className={styles.span_text}>Расчетный счет:</span>40702810310001520851</p>
                    <p className={styles.text}><span className={styles.span_text}>ОГРН </span>1170726004426</p>
                    <p className={styles.text}><span className={styles.span_text}>Банк </span>АО «ТБанк»</p>
                    <p className={styles.text}><span className={styles.span_text}>БИК </span>044525974</p>
                    <p className={styles.text}><span className={styles.span_text}>ИНН банка: </span>7710140679</p>
                    <p className={styles.text}><span className={styles.span_text}>Корреспондентский счет банка: </span>30101810145250000974</p>
                    <br />
                    <p className={styles.text}><span className={styles.span_text}>Юридический адрес</span>121059, г. Москва, вн.тер.г. муниципальный округ Дорогомилово, наб. Бережковская, д. 12, кв. 161</p>
                    <p className={styles.text}><span className={styles.span_text}>Почтовый адрес</span> 360051, г. Нальчик, ул. Пушкина, д. 33 "А"/72, оф. 335</p>
                    <p className={styles.text}><span className={styles.span_text}>Телефон:</span>8 (8662) 22-91-10</p>
                    <p className={styles.text}><span className={styles.span_text}>Генеральный директор</span>Кочесоков Рустам Галиевич</p>
                </div>
            </div>
        </div>
    )
}
export default Requisites;
