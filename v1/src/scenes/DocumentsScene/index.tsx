import React from "react";
import styles from "./documents.module.css";
import license from "../../assets/docs/license.pdf";
import ustav from "../../assets/docs/ustav.pdf";
import policy from "../../assets/docs/policy.pdf";
import privacy_policy from "../../assets/docs/privacy_policy.pdf";
import deklaraciya_sootvetstviya_ohrani_truda from "../../assets/docs/deklaraciya_sootvetstviya_ohrani_truda.pdf";
import agreement from "../../assets/docs/agreement_1.pdf";
import agreement1 from "../../assets/docs/agreement_2.pdf";
import agreement2 from "../../assets/docs/agreement_3.pdf";
import resolution_354 from "../../assets/docs/resolution_354.pdf";
import resolution_1156 from "../../assets/docs/resolution_1156.pdf";
import resolution_484 from "../../assets/docs/resolution_484.pdf";
import resolution_505 from "../../assets/docs/resolution_505.pdf";
import resolution_222 from "../../assets/docs/order_222.pdf";
import resolution_1133 from "../../assets/docs/resolution_1133.pdf";
import resolution_218 from "../../assets/docs/order_218.pdf";
import resolution_204 from "../../assets/docs/order_204.pdf";
import fz_89 from "../../assets/docs/fz_89.pdf";
import fz_188 from "../../assets/docs/fz_188.pdf";

class DocumentsScene extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.document}>
                    <h1 className={styles.tittle}>
                        Документы ООО «Экологистика»
                    </h1>
                    <div className={styles.container_card}>
                        <div className={styles.doc_card}>
                            <a
                                href={ustav}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>1. Устав</p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={license}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>2. Лицензия</p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={policy}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    3. Политика оператора в отношении обработки
                                    персональных данных
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={deklaraciya_sootvetstviya_ohrani_truda}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    4. Декларация соответствия условий труда
                                    государственным нормативным требованиям
                                    охраны труда
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={privacy_policy}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    5. Политика конфиденциальности персональных
                                    данных
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.document}>
                    <h1 className={styles.tittle}>Нормативные правовые акты</h1>
                    <div className={styles.container_card}>
                        <div className={styles.doc_card}>
                            <a
                                href={fz_188}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    1. Жилищный кодекс Российской Федерации от
                                    29.12.2004 г. № 188-ФЗ
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={fz_89}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    2. Федеральный закон «Об отходах
                                    производства и потребления» от 24.06.1998 г.
                                    № 89-ФЗ
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={agreement}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    3. Соглашение № 1 «Об организации
                                    деятельности по обращению с твердыми
                                    коммунальными отходами на территории
                                    Кабардино-Балкарской Республики (1 зона
                                    деятельности)»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={agreement1}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    4. Соглашение № 2 «Об организации
                                    деятельности по обращению с твердыми
                                    коммунальными отходами на территории
                                    Кабардино-Балкарской Республики (2 зона
                                    деятельности)»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={agreement2}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    5. Соглашение № 3 «Об организации
                                    деятельности по обращению с твердыми
                                    коммунальными отходами на территории
                                    Кабардино-Балкарской Республики (3 зона
                                    деятельности)»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_354}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    6. Постановление Правительства РФ от 6 мая
                                    2011 г. № 354 «О предоставлении коммунальных
                                    услуг собственникам и пользователям
                                    помещений в многоквартирных домах и жилых
                                    домов»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_1156}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    7. Постановление Правительства РФ от 12
                                    ноября 2016 г. № 1156 «Об обращении с
                                    твердыми коммунальными отходами и внесении
                                    изменения в постановление Правительства
                                    Российской Федерации от 25 августа 2008 г. №
                                    641»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_1133}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    8. Постановление Правительства РФ от 3
                                    ноября 2016 г. № 1133 «Об утверждении Правил
                                    проведения торгов, по результатам которых
                                    формируются цены на услуги по
                                    транспортированию твердых коммунальных
                                    отходов для регионального оператора»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_505}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    9. Постановление Правительства РФ от
                                    03.06.2016 г. № 505 «Об утверждении Правил
                                    коммерческого учета объема и (или) массы
                                    твердых коммунальных отходов»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_484}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    10. Постановление Правительства РФ от 30 мая
                                    2016 г. № 484 «О ценообразовании в области
                                    обращения с твердыми коммунальными отходами»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_222}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    11. Приказ от 17 ноября 2022 г. № 216 «Об
                                    установлении единого предельного тарифа на
                                    услугу регионального оператора по обращению
                                    с твердыми коммунальными отходами общества с
                                    ограниченной ответственностью «Экологистика»
                                    на 2023 - 2025 годы»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_204}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    12. Приказ от 30 декабря 2020 г. № 204 «О
                                    внесении изменений в приказ Министерства
                                    инфраструктуры и цифрового развития
                                    Кабардино-Балкарской Республики от 5 октября 2018 г. № 79-п»
                                </p>
                            </a>
                        </div>

                        <div className={styles.doc_card}>
                            <a
                                href={resolution_218}
                                className={styles.link}
                                target="_blank"
                            >
                                <p className={styles.paragraf}>
                                    13. Приказ от 17 ноября 2022 г. № 214 «О
                                    корректировке предельных тарифов на
                                    захоронение твердых коммунальных отходов для
                                    общества с ограниченной ответственностью
                                    «Экологистика» на 2023 год»
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DocumentsScene;
