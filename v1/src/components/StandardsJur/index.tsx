import styles from "./tariffs.module.css";
import tariffs from "./tariffs";
import Order204 from '../../assets/docs/order_204.pdf'
import EcoMobileAppBanner from "../EcoMobileAppBanner";

const StandardsJur = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_text_container}>
                <h1 className={styles.zagolovok_center}>Способы расчета по Договору</h1>
                <p className={styles.texts}>Комерческий учет твердых коммунальных отходов осуществляется расчетным путем исходя из: <br />
                    <span className={styles.texti}>a)</span> Нормативов накопления  твердых коммунальных отходов , выраженных в количественных показателях объёма (<span className={styles.texti}>Vм3/год</span>)
                    = расчетная единица х норматив накопления; <span className={styles.texti}>∑год = Vм3/год x</span> действующий предельный тариф);
                </p>
                <h2 className={styles.podzagolovok}>
                    <a href={Order204} target='_blank' className='link-tarrifs'>Приказ от 30 декабря 2020 г. № 204 «О внесении изменений в приказ Министерства инфраструктуры и цифрового развития Кабардино-Балкарской Республики от 5 октября 2018 г. № 79-п»</a>
                </h2>
            </div>
            <div className={styles.table}>
                <div className={styles.container_table}>
                    <p className={styles.text}>N п/п</p>
                    <p className={styles.text}>
                        Наименование категории объектов
                    </p>
                    <p className={styles.text}>
                        Расчетная единица, в отношении которой устанавливается
                        норматив
                    </p>
                    <div className={styles.grids_container}>
                        <p className={styles.text}>Норматив накопления</p>
                        <div className={styles.grid_container}>
                            <p className={styles.text}>мЗ/год</p>
                            <p className={styles.text}>кг/год"</p>
                        </div>
                    </div>
                </div>
                {tariffs.map((tariff, i) => (
                    <div className={styles.table_container}>
                        <p className={`${styles.text} ${styles.zagolovok}`}>
                            {tariff.zagolovok}
                        </p>
                        <div className={styles.table_row_text}>
                            {tariff.rows.map((row, j) => (
                                <>
                                    <p className={styles.text}>{row.number}</p>
                                    <p className={styles.text}>{row.objects}</p>
                                    <p className={styles.text}>
                                        {row.rasschet}
                                    </p>
                                    <p className={styles.text}>{row.cubmetr}</p>
                                    <p className={styles.text}>{row.ves}</p>
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.content_text}>
                <p className={styles.texts}>
                    <span className={styles.texti}>б)</span> количества и объема контейнеров для накопления твердых
                    коммунальных отходов, установленных в местах накопления
                    твердых коммунальных отходов (<span className={styles.texti}>VМ3/год</span> = количество
                    контейнеров <span className={styles.texti}>х Vм3</span> контейнера х периодичность вывоза; <span className={styles.texti}>∑год =
                        VМ3/год x</span> действующий предельный тариф);
                </p>
            </div>
            <EcoMobileAppBanner />
        </div>
    );
};

export default StandardsJur;
