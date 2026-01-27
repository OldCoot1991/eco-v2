import React from 'react';
import TariffsFiz from '../../components/TariffsFiz'
import styles from '../../components/TariffsFiz/tariffs.module.css'
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';
import prikaz_213 from "../../assets/docs/prikaz_213.pdf"

// Физическим лицам: Тарифы
class TariffsFizScene extends React.Component {
    render() {
        return (
            <div>
                <TariffsFiz />
                <div className={styles.container} style={{marginTop: "20px", marginBottom: "40px"}}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.podzagolovok}>
                            <a href={prikaz_213} rel="noreferrer" target='_blank' className='link-tarrifs'>
                                Приказ от 19 декабря 2025 г. №213 «О корректировке предельных тарифов на захоронение 
                                твердых коммунальных отходов для общества с ограниченной ответственностью «ЭКОЛОГИСТИКА» на 2026 год»
                            </a>
                        </h2>
                        <div className={styles.table}>
                            <p className={styles.zagolovok_top}>
                                Тарифы на захоронение ТКО (руб. за 1 тонну)
                            </p>
                            <div className={styles.table_row}>
                                <p className={styles.text}></p>
                                <p className={styles.text}>с 01.01.2026 по 30.09.2026</p>
                                <p className={styles.text}>с 01.10.2026 по 31.12.2026</p>
                            </div>
                            <div className={styles.table_row}>
                                <p className={styles.text}>Полигон ТКО Урвань</p>
                                <p className={styles.text}>308,19</p>
                                <p className={styles.text}>308,19</p>
                            </div>
                        </div>
                    </div>
                </div>
                <EcoMobileAppBanner />
            </div>
        )
    }
}

export default TariffsFizScene;
