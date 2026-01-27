import styles from "../Management/management.module.css";
import managements from '../../components/Management/management';
import EcoMobileAppBanner from '../EcoMobileAppBanner';

const Management = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.management}>Руководство</h2>
            <div className={styles.table}>
                <div className={styles.rows}>
                    <p className={styles.text}>Должность</p>
                    <p className={styles.text}>Ф.И.О</p>
                </div>
                {managements.map(management => (
                    <div className={styles.row}>
                        <p className={styles.text}>{management.doljnost}</p>
                        <p className={styles.text}>{management.name}</p>
                    </div>
                ))}
            </div>
            <EcoMobileAppBanner />
        </div>
    )
};

export default Management;
