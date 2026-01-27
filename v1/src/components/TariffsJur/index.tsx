import styles from "../TariffsFiz/tariffs.module.css";
import prikaz_214 from "../../assets/docs/prikaz_214.pdf";

const TariffsJur = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_zagolov}>
                <h1 className={styles.zagolovok}>Тарифы</h1>
            </div>

            <div className={styles.wrapper}>
                <h2 className={styles.podzagolovok}>
                    <a
                        href={prikaz_214}
                        rel="noreferrer"
                        target="_blank"
                        className="link-tarrifs"
                    >
                        Приказ от 19 декабря 2025 г. №214 «Об установлении единого предельного тарифа 
                        на услугу регионального оператора по обращению с твердыми коммунальными 
                        отходами общества с ограниченной ответственностью {"«ЭКОЛОГИСТИКА»"} 
                        на 2026 год»
                    </a>
                </h2>
                <div className={styles.table}>
                    <p className={styles.zagolovok_top}>
                        Тарифы на услугу регоператора по обращению с ТКО (руб.
                        за 1 куб.м.)
                    </p>
                    <div className={styles.table_row}>
                        <p className={styles.text}></p>
                        <p className={styles.text}>
                           с 01.01.2026 по 30.09.2026
                        </p>
                        <p className={styles.text}>
                             с 01.10.2026 по 31.12.2026
                        </p>
                    </div>
                    <div className={styles.table_row}>
                        <p className={styles.text}>1 зона</p>
                        <p className={styles.text}>356,73</p>
                        <p className={styles.text}>378,33</p>
                    </div>
                    <div className={styles.table_row}>
                        <p className={styles.text}>2 зона</p>
                        <p className={styles.text}>388,15</p>
                        <p className={styles.text}>410,32</p>
                    </div>
                    <div className={styles.table_row}>
                        <p className={styles.text}>3 зона</p>
                        <p className={styles.text}>358,43</p>
                        <p className={styles.text}>383,21</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TariffsJur;
