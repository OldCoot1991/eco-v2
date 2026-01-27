import React from "react";
import styles from "../OurCompanyScene/company.module.css";
import carpark from "../OurCompanyScene/img/carpark.webp";
import throwtrash from "../OurCompanyScene/img/throwtrash.webp";
import KassaPlaceImage from "..//OurCompanyScene/img/kassa_place.jpg";
import UkEcoImage from "..//OurCompanyScene/img/uk_eco.jpg";

// О компании: Наша компания
class OurCompanyScene extends React.Component {
    render() {
        return (
            <div className={styles.containers}>
                <h1 className={styles.text_center}>О компании</h1>
                <div className={styles.container_company}>
                    <h1 className={styles.top_zagolovok}>О нашей компании.</h1>
                    <h2 className={styles.top_text}>
                        ООО «Экологистика» - региональный оператор, с 2018 года
                        наделенный полномочиями осуществления вывоза отходов по
                        Кабардино-Балкарской Республике.
                    </h2>
                    <div className={styles.container_iframe}>
                        <iframe
                            width="100%"
                            height="512"
                            src="https://www.youtube.com/embed/cwWK5tG4XN4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                В нашем распоряжении имеется собственный парк
                                современной техники: самосвалы, погрузчики,
                                газели и контейнеровозы.
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                Все машины проходят техосмотр перед выходом на
                                рейс, что существенно снижает вероятность
                                задержки в пути по вине вышедшей из строя
                                техники.
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                Проводится работа по замене старого
                                автотранспорта на современную технику.
                            </p>
                        </div>
                    </div>
                    <div className={styles.carpark}>
                        <img src={carpark}  className={styles.carpark_img} alt="" />
                    </div>
                    <p className={styles.top_text}>
                        У компании есть специальная IT платформа, которая
                        позволила полностью автоматизировать весь процесс работы
                        по сбору мусора. Существенно повысилась эффективность
                        работы каждого сотрудника, благодаря прозрачности и
                        позволило увеличить качество предоставляемых услуг для
                        населения.
                    </p>
                    <div className={styles.wrapper}>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                Отслеживание передвижения всей нашей техники
                                дает возможность использовать ресурсы компании
                                максимально эффективно.
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                Получение полного фотоотчёта по очистке каждой
                                контейнерной площадки позволяет вести контроль
                                на всех этапах сбора и вывоза бытовых отходов.
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                Получение полного фотоотчёта по очистке каждой
                                контейнерной площадки позволяет вести контроль
                                на всех этапах сбора и вывоза бытовых отходов.
                            </p>
                        </div>
                    </div>
                    <p className={styles.top_text}>
                        Благодаря данной системе получилось полностью искоренить
                        недобросовестное выполнение работ по вывозу ТКО со
                        стороны сотрудников и увеличить общую скорость сбора
                        мусора на 20%.
                    </p>
                    <div className={styles.throwtrash}>
                        <img src={throwtrash} alt="" />
                    </div>
                    <div className={styles.top_text}>
                        В распоряжении Экологистки имеется полигон для
                        захоронения отходов площадью . Вся процедура захоронения
                        31,7 гектар проходит с соблюдением всех необходимых
                        норм. Во избежание неприятных запахов, продуктов
                        разложения и пожаров мусор обрабатывают специальным
                        составом. Чтобы не допустить загрязнения грунтовых вод,
                        дно полигона покрыто специальной пленкой, которая не
                        разлагается и не имеет срока давности.
                    </div>
                    <p className={styles.top_text}>
                        ООО Экологистика является многофункциональной компанией, имеет статус социально-значимого предприятия в Кабардино-Балкарской Республике и является:
                    </p>
                    <div className={styles.wrapper}>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                региональным оператором по обращению с ТКО по Кабардино-Балкарской республике и обслуживает более 900 000 человек и более 7500 юридических лиц в том числе и 906 бюджетных организации, а также является монополистом
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                оператором по захоронению 4-5 класса отходов
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                управляющей компанией и обслуживает 126 домов более 480 000 квадратных метров
                            </p>
                        </div>
                        <div>
                            <img src={UkEcoImage} alt="" style={{width: "100%"}} />
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                региональным расчетным центром по работе с населением в сфере ЖКХ, занимается ведением абонентского обслуживания Водоснабжающих организаций, Теплоснабжающих организаций и Управляющих организаций, осуществлением приема платежей в пользу поставщиков услуг ЖКХ, с использованием мобильных приложений и интернет-сайтов
                            </p>
                        </div>
                        <div>
                            <img src={KassaPlaceImage} alt="" style={{width: "100%"}} />
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                региональным оператором ГИС ЖКХ. Основная работа направлена на решение проблем, связанных с актуализацией данных абонентов по всей республике в сфере ЖКХ. Для достижения этих целей компания сосредоточилась на цифровизации, автоматизации работ в сфере ЖКХ
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                подрядной организацией по строительно-монтажным работам, по благоустройству территорий, осуществляет проектирование сметной документации,
                                разные виды работ <a href="/ecostroi/construction">(подробнее...)</a>
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                занимается переработкой и производством различных полимерных материалов, продажей и закупкой строительных
                                материалов <a href="/ecostroi/sale">(подробнее...)</a>
                            </p>
                        </div>
                        <div className={styles.container_text}>
                            <div className={styles.image}>&#10003;</div>
                            <p className={styles.paragraph}>
                                IT-компанией и разработчиком программных продуктов для нужд и государственных организаций, и компаний жилищно-коммунальных услуг:
                            </p>
                        </div>
                        <ul>
                            <li><a href="https://apps.apple.com/app/экологистика/id1523454346" target="_blank" rel="noreferrer">Мобильное приложение ООО "Экологистика"</a></li>
                            <li><a href="https://apps.apple.com/app/нальчикские-тепловые-сети/id6450223518" target="_blank" rel="noreferrer">Мобильное приложение ООО "Нальчикские тепловые сети"</a></li>
                            <li><a href="https://apps.apple.com/us/app/личный-кабинет-мдр/id1637399943" target="_blank" rel="noreferrer">Мобильное приложение ООО "Компания «РИЦ»"</a></li>
                        </ul>
                    </div>
                    <p className={styles.top_text}>
                        В ООО «Экологистика» работает более 900 человек по всей России, компания имеет более 190 единиц специализированной рабочей техники как в собственности, так в лизинге и аренде. Компания активно развивается в данных направлениях
                    </p>
                </div>
            </div>
        );
    }
}

export default OurCompanyScene;
