import ContactInfo from "./ContactInfo";
import TopBarSettings from "./TopBarSettings";
import styles from "./TopBar.module.css";

export default function TopBar() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <ContactInfo />
                    <TopBarSettings />
                </div>
            </div>
        </div>
    );
}
