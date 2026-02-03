import styles from "./PaymentPartners.module.css";
import { partners } from "./paymentPartnersData";
import { PartnerCard } from "./PartnerCard/PartnerCard";

export const PaymentPartners = () => {
    return (
        <div className={styles.partnersGrid}>
            {partners.map((partner) => (
                <PartnerCard
                    key={partner.id}
                    name={partner.name}
                    description={partner.description}
                    iconClass={partner.iconClass}
                    icon={partner.icon}
                />
            ))}
        </div>
    );
};
