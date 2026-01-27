import styles from "../TariffsFiz/tariffs.module.css";
import prikaz_214 from "../../assets/docs/prikaz_214.pdf";

const TariffsFiz = () => {

    //PG - это число за первую часть года (с 01.01.2026 по 30.09.2026)
    //VG - это число за вторую часть года (с 01.10.2026 по 31.12.2026)
    const zone1_PG1 = 356.73;
    const zone1_VPG2 = 378.33;
    const zone2_PG1 = 388.15;
    const zone2_VPG2 = 410.32;
    const zone3_PG1 = 358.43;
    const zone3_VPG2 = 383.21;
    //MD - многоквартирные дома
    //IJ - индивидуальные жилые дома
    const zone1_MD_PG1 = normative(zone1_PG1, 2.83);
    const zone2_MD_PG1 = normative(zone2_PG1, 2.83);
    const zone3_MD_PG1 = normative(zone3_PG1, 2.83);    
    
    const zone1_MD_VPG2 = normative(zone1_VPG2, 2.83);
    const zone2_MD_VPG2 = normative(zone2_VPG2, 2.83);
    const zone3_MD_VPG2 = normative(zone3_VPG2, 2.83);

    const zone1_IJ_PG1 = normative(zone1_PG1, 3.11);
    const zone2_IJ_PG1 = normative(zone2_PG1, 3.11);
    const zone3_IJ_PG1 = normative(zone3_PG1, 3.11);
    
    const zone1_IJ_VPG2 = normative(zone1_VPG2, 3.11);
    const zone2_IJ_VPG2 = normative(zone2_VPG2, 3.11);
    const zone3_IJ_VPG2 = normative(zone3_VPG2, 3.11);
    
    const pg = {
        zone1_MD_PG1: zone1_MD_PG1,
        zone2_MD_PG1: zone2_MD_PG1,
        zone3_MD_PG1: zone3_MD_PG1,
        zone1_IJ_PG1: zone1_IJ_PG1,
        zone2_IJ_PG1: zone2_IJ_PG1,
        zone3_IJ_PG1: zone3_IJ_PG1,
    };
    
    const vpg = {
        zone1_MD_VPG2: zone1_MD_VPG2,
        zone2_MD_VPG2: zone2_MD_VPG2,
        zone3_MD_VPG2: zone3_MD_VPG2,
        zone1_IJ_VPG2: zone1_IJ_VPG2,
        zone2_IJ_VPG2: zone2_IJ_VPG2,
        zone3_IJ_VPG2: zone3_IJ_VPG2,
    };

    function normative(tariff: number, volume: number): string {
        let value = Math.round((tariff * volume / 12) * 100) / 100;
        return value.toFixed(2).replace('.', ',');
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_zagolov}>
                <h1 className={styles.zagolovok}>Тарифы</h1>
            </div>

            <div className={styles.wrapper}>
                <h2 className={styles.podzagolovok}>
                    <a href={prikaz_214} rel="noreferrer" target="_blank" className="link-tarrifs">
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

                    <div className={styles.table}>
                        <p className={styles.zagolovok_top}>
                            Нормативы накопления ТКО/Плата на 1 человека в месяц по зонам (руб.)
                            <br />
                            с 01.01.2026 по 30.09.2026
                        </p>
                        <div className={styles.table_rowss_1}>
                            <p className={styles.texts}>{""}</p>
                            <p className={styles.text}>{""}</p>
                            <p className={styles.text}>1 зона</p>
                            <p className={styles.text}>2 зона</p>
                            <p className={styles.text}>3 зона</p>
                        </div>
                        <div className={styles.table_rows_1}>
                            <p className={styles.text}>Многоквартирные жилые дома: твердые коммунальные отходы, в т.ч. крупногабаритные отходы</p>
                            <p className={styles.text}>2,83 м3 в год на 1 проживающего</p>
                            <p className={styles.text}>{pg.zone1_MD_PG1}</p>
                            <p className={styles.text}>{pg.zone2_MD_PG1}</p>
                            <p className={styles.text}>{pg.zone3_MD_PG1}</p>
                        </div>
                        <div className={styles.table_rows_1}>
                            <p className={styles.text}>Индивидуальные жилые дома: твердые коммунальные отходы, в т.ч. крупногабаритные отходы</p>
                            <p className={styles.text}>3,11 м3 в год на 1 проживающего </p>
                            <p className={styles.text}>{pg.zone1_IJ_PG1}</p>
                            <p className={styles.text}>{pg.zone2_IJ_PG1}</p>
                            <p className={styles.text}>{pg.zone3_IJ_PG1}</p>
                        </div>
                    </div>

                    <div className={styles.table}>
                        <p className={styles.zagolovok_top}>
                            Нормативы накопления ТКО/Плата на 1 человека в месяц по зонам (руб.)
                            <br />
                            с 01.10.2026 по 31.12.2026
                        </p>

                        <div className={styles.table_rowss_1}>
                            <p className={styles.texts}>{""}</p>
                            <p className={styles.text}>{""}</p>
                            <p className={styles.text}>1 зона</p>
                            <p className={styles.text}>2 зона</p>
                            <p className={styles.text}>3 зона</p>
                        </div>
                        <div className={styles.table_rows_1}>
                            <p className={styles.text}>Многоквартирные жилые дома: твердые коммунальные отходы, в т.ч. крупногабаритные отходы</p>
                            <p className={styles.text}>2,83 м3 в год на 1 проживающего</p>
                            <p className={styles.text}>{vpg.zone1_MD_VPG2}</p>
                            <p className={styles.text}>{vpg.zone2_MD_VPG2}</p>
                            <p className={styles.text}>{vpg.zone3_MD_VPG2}</p>
                        </div>
                        <div className={styles.table_rows_1}>
                            <p className={styles.text}>Индивидуальные жилые дома: твердые коммунальные отходы, в т.ч. крупногабаритные отходы</p>
                            <p className={styles.text}>3,11 м3 в год на 1 проживающего</p>
                            <p className={styles.text}>{vpg.zone1_IJ_VPG2}</p>
                            <p className={styles.text}>{vpg.zone2_IJ_VPG2}</p>
                            <p className={styles.text}>{vpg.zone3_IJ_VPG2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TariffsFiz;
