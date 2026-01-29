import styles from "./PaymentPartners.module.css";
import { SberbankLogo, TBankLogo } from "@/components/ui/BankLogos";

const partners = [
    {
        id: "sberbank",
        name: "Сбербанк Онлайн",
        description: "Оплата без комиссии",
        icon: SberbankLogo,
        iconClass: styles.partnerIconGreen
    },
    {
        id: "tbank",
        name: "Т-Банк",
        description: "Быстрые платежи",
        icon: TBankLogo,
        iconClass: styles.partnerIconYellow
    }
];

export const PaymentPartners = () => {
    return (
        <div className={styles.partnersGrid}>
            {partners.map((partner) => (
                <div key={partner.id} className={styles.partnerCard}>
                    <div className={styles.partnerInfo}>
                        <div className={`${styles.partnerIcon} ${partner.iconClass}`}>
                            <partner.icon className="w-6 h-6" />
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
