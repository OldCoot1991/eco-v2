import styles from "./PaymentPartners.module.css";
import { partners } from "./paymentPartnersData";

export const PaymentPartners = () => {
    return (
        <div className={styles.partnersGrid}>
            {partners.map((partner) => (
                <div key={partner.id} className={styles.partnerCard}>
                    <div className={styles.partnerInfo}>
                        <div className={`${styles.partnerIcon} ${styles[partner.iconClass]}`}>
                            <partner.icon className={styles.iconSvg} />
                        </div>
                        <div className={styles.partnerDetails}>
                            <h4 className={styles.partnerName}>{partner.name}</h4>
                            <p className={styles.partnerDescription}>{partner.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
