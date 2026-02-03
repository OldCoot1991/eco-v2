"use client";

import styles from "./PaymentPartners.module.css";
import { PartnerCard } from "./PartnerCard/PartnerCard";
import { SberbankLogo, TBankLogo } from "@/components/ui/BankLogos/BankLogos";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const PaymentPartners = () => {
    const { t } = useTranslation();

    const partners = [
        {
            id: "sberbank",
            name: t.paymentPartners.sberName,
            description: t.paymentPartners.sberDesc,
            icon: SberbankLogo,
            iconClass: 'partnerIconGreen'
        },
        {
            id: "tbank",
            name: t.paymentPartners.tbankName,
            description: t.paymentPartners.tbankDesc,
            icon: TBankLogo,
            iconClass: 'partnerIconYellow'
        }
    ];

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
