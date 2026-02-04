import styles from "./page.module.css";
import { partners } from "@/widgets/trusted-by/trustedByData";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";

export default function CompanyClientsPage() {
    return (
        <div className={styles.pageContainer}>
            <SectionTitle
                title="Наши"
                accent="клиенты"
                subtitle="Список клиентов компании"
            />

            <div className={styles.clientsGrid}>
                {partners.map((partner, index) => (
                    <div key={index} className={styles.clientCard}>
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className={styles.clientLogo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
