import { IconType } from "react-icons";
import { FC } from "react";
import styles from "./PartnerCard.module.css";
import { SberbankLogo, TBankLogo } from "@/shared/ui/BankLogos/BankLogos";

export type IconComponent = typeof SberbankLogo | typeof TBankLogo;

interface PartnerCardProps {
    name: string;
    description: string;
    iconClass: string;
    icon: IconComponent;
}

export const PartnerCard: FC<PartnerCardProps> = ({ name, description, iconClass, icon: Icon }) => {
    return (
        <div className={styles.partnerCard}>
            <div className={styles.partnerInfo}>
                <div className={`${styles.partnerIcon} ${styles[iconClass]}`}>
                    <Icon className={styles.iconSvg} />
                </div>
                <div className={styles.partnerDetails}>
                    <h4 className={styles.partnerName}>{name}</h4>
                    <p className={styles.partnerDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};
