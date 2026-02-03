import { FC } from "react";
import styles from "./PartnerLogoSlide.module.css";

interface PartnerLogoSlideProps {
    name: string;
    logo: string;
}

export const PartnerLogoSlide: FC<PartnerLogoSlideProps> = ({ name, logo }) => {
    return (
        <div className={styles.partnerCard}>
            <img
                src={logo}
                alt={name}
                className={styles.partnerLogo}
            />
        </div>
    );
};
