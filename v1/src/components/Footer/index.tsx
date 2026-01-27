import React from 'react';
import { useLocation } from 'react-router';
import styles from '../Footer/footer.module.css';
import { routes } from '../Menu';
import policyPdf from '../../assets/docs/policy.pdf'; 

const Footer = () => {
    let location = useLocation()



    return (
        <div className={styles.container_footer}>
            <div className={styles.footer}>
                <div className={styles.footer_grid}>
                    <div className={styles.grid}>
                        {routes.map(route => (
                            <div>
                                <a href={route.path as string} className={styles.link}><h1 className={styles.zagolovok}>{route.title}</h1></a>
                                {route.routes && route.routes.map(subRoute => (
                                    <a href={subRoute.path as string} className={styles.link}><p>{subRoute.title}</p></a>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.grid_info}>
                        <h1 className={styles.zagolovok}>ДИСПЕТЧЕРСКИЙ ЦЕНТР</h1>
                        <p className={styles.header_text}>Горячая линия  абонентской службы</p>
                        <a href="tel:8-8662-707-61-65" className={styles.link}><p className={styles.number_tel}>8 (8662) 22-91-10</p></a>
                        <p className={styles.header_text}>Горячая линия противодействия коррупции и мошенничеству</p>
                        <a href="tel:8-909-488-16-86" className={styles.link}><p className={styles.number_tel}>8 (909) 488-16-86</p></a>
                        <a href={location.pathname.match('/jur/') ? '/support-jur' : '/support'} className={styles.button}>Обратная связь</a>
                        <p className={styles.text_white}>Мы в социальных сетях:</p>
                        <div className={styles.flex_column}>
                            <a href="https://t.me/ecologistik" target="_blank" className={styles.link_telegram} title="Telegram-канал ООО «Экологистика»"></a>
                        </div>
                    </div>
                </div>
                <div className={styles.container_link}>
                    <a href={policyPdf} target='_blank' className={styles.bottom_link}>Политика обработки персональных данных</a>
                    <p className={styles.bottom_text}>Региональный оператор по обращению с отходами ООО «Экологистика». {new Date().getUTCFullYear()}</p>
                </div>
            </div>

            <div className={styles.footer_2}>
                <div className={styles.container_footer2}>
                    <h1 className={styles.zagolovok}>ДИСПЕТЧЕРСКИЙ ЦЕНТР</h1>
                    <p className={styles.header_text}>Горячая линия  абонентской службы</p>
                    <a href="tel:8-8662-707-61-65" className={styles.link}><p className={styles.number_tel}>8 (8662) 22-91-10</p></a>
                    <p className={styles.header_text}>Горячая линия противодействия коррупции и мошенничеству</p>
                    <a href="tel:8-909-488-16-86" className={styles.link}><p className={styles.number_tel}>8 (909) 488-16-86</p></a>
                    <a href={location.pathname.match('/jur/') ? '/support-jur' : '/support'} className={styles.button2}>Обратная связь</a>
                    <p className={styles.text_white}>Мы в социальных сетях:</p>
                    <div className={styles.flex_column}>
                        <a href="https://t.me/ecologistik" target="_blank" className={styles.link_telegram}></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
